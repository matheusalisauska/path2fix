'use client';

import { likeIssue } from '@/lib/API/mutations';
import prisma from '@/lib/db';
import { ErrorType } from '@/types';
import { Heart, MessageCircle } from 'lucide-react';

interface ErrorInteractionProps {
    error: ErrorType;
    userId: string;
}

export const ErrorInteraction = ({ error, userId }: ErrorInteractionProps) => {
    const isLiked = prisma.like.findMany({
        where: {
            errorId: error.id,
            userId: userId,
        },
    });

    const handleLike = async () => {
        try {
            await likeIssue(error.id);
        } catch (error) {}
    };

    return (
        <div className='flex items-center gap-2'>
            <button onClick={handleLike}>
                <div className='flex items-center gap-1'>
                    <Heart size={20} color='#757575' strokeWidth={1.6} />
                    <p className='text-[#757575]'>{error.likes.length}</p>
                </div>
            </button>
            <div className='flex items-center gap-1'>
                <MessageCircle size={20} color='#757575' strokeWidth={1.6} />
                <p className='text-[#757575]'>0</p>
            </div>
        </div>
    );
};
