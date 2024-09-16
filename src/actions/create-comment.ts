'use server';

import { authOptions } from '@/lib/auth';
import prisma from '@/lib/db';
import { actionClient } from '@/lib/safe-actions';
import { createCommentSchema } from '@/types/schema';
import { getServerSession } from 'next-auth';
import { flattenValidationErrors } from 'next-safe-action';
import { revalidatePath } from 'next/cache';

class ActionError extends Error {}

export const createCommentAction = actionClient
    .schema(createCommentSchema, {
        handleValidationErrorsShape: (ve) =>
            flattenValidationErrors(ve).fieldErrors,
    })
    .action(async ({ parsedInput: { errorId, content } }) => {
        const session = await getServerSession(authOptions);

        if (!session) {
            throw new ActionError('Usuário não autenticado');
        }
        await prisma.comment.create({
            data: {
                content,
                errorId,
                userId: session.user.id,
            },
        });
        
        revalidatePath('/error');

        return { message: 'Comentário adicionado com sucesso!' };
    });
