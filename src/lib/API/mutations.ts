'use server';

import { createClient } from '@/utils/supabase/server';
import prisma from '../db';

export const likeIssue = async (errorId: string) => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        throw new Error('Usuário não autenticado');
    }

    try {
        await prisma.like.create({
            data: {
                userId: user.id,
                errorId: errorId, 
            },
        });
        
        return { message: 'Like adicionado com sucesso!' };
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao adicionar like');
    }
};
