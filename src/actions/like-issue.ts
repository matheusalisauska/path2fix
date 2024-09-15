'use server';

import { authOptions } from '@/lib/auth';
import prisma from '@/lib/db';
import { actionClient } from '@/lib/safe-actions';
import { likeIssueSchema } from '@/types/schema';
import { getServerSession } from 'next-auth';
import { flattenValidationErrors } from 'next-safe-action';
import { revalidatePath } from 'next/cache';

class ActionError extends Error {}

export const likeIssueAction = actionClient
    .schema(likeIssueSchema, {
        handleValidationErrorsShape: (ve) =>
            flattenValidationErrors(ve).fieldErrors,
    })
    .action(async ({ parsedInput: { errorId } }) => {
        const session = await getServerSession(authOptions);

        if (!session) {
            throw new ActionError('Usuário não autenticado');
        }

        const hasLiked = await prisma.like.findFirst({
            where: {
                errorId: errorId,
                userId: session?.user.id,
            },
        });

        if (hasLiked!!) {
            await prisma.like.delete({
                where: {
                    userId_errorId: {
                        userId: session?.user.id,
                        errorId: errorId,
                    },
                },
            });
        } else {
            await prisma.like.create({
                data: {
                    errorId: errorId,
                    userId: session?.user.id,
                },
            });
        }
        revalidatePath('/error')

        return { message: 'Usuário cadastrado com sucesso!' };
    });
