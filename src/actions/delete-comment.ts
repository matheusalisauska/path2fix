'use server';

import { authOptions } from '@/lib/auth';
import prisma from '@/lib/db';
import { actionClient } from '@/lib/safe-actions';
import { deleteCommentSchema } from '@/types/schema';
import { getServerSession } from 'next-auth';
import { flattenValidationErrors } from 'next-safe-action';
import { revalidatePath } from 'next/cache';

class ActionError extends Error {}

export const deleteCommentAction = actionClient
    .schema(deleteCommentSchema, {
        handleValidationErrorsShape: (ve) =>
            flattenValidationErrors(ve).fieldErrors,
    })
    .action(async ({ parsedInput: { id } }) => {
        const session = await getServerSession(authOptions);

        if (!session) {
            throw new ActionError('Usuário não autenticado');
        }
        await prisma.comment.delete({ where: { id: id } });

        revalidatePath('/error');

        return { message: 'Comentário excluido com sucesso!' };
    });
