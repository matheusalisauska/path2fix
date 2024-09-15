'use server';

import { actionClient } from '@/lib/safe-actions';
import { signupSchema } from '@/types/schema';
import { flattenValidationErrors } from 'next-safe-action';
import { redirect } from 'next/navigation';

class ActionError extends Error {}

export const signupAction = actionClient
    .schema(signupSchema, {
        handleValidationErrorsShape: (ve) =>
            flattenValidationErrors(ve).fieldErrors,
    })
    .action(async ({ parsedInput: { username, email, password } }) => {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/user`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            redirect('/sign-in');
        } else {
            throw new ActionError('Erro ao cadastrar usuário');
        }

        return { message: 'Usuário cadastrado com sucesso!' };
    });
