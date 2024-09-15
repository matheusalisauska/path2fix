import { ButtonLikeIssue } from '@/components/button/ButtonLikeIssue';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/db';
import { ErrorType } from '@/types';
import { MessageCircle } from 'lucide-react';
import { getServerSession } from 'next-auth';

interface IssueInteractionProps {
    error: ErrorType;
    userId: string;
}

export const IssueInteraction = async ({ error }: IssueInteractionProps) => {
    const session = await getServerSession(authOptions);

    const isLiked = await prisma.like.findFirst({
        where: {
            errorId: error.id,
            userId: session?.user.id,
        },
    });

    return (
        <div className='flex items-center gap-2'>
            <ButtonLikeIssue error={error} isLiked={!!isLiked} />
            <div className='flex items-center gap-1'>
                <MessageCircle size={20} color='#757575' strokeWidth={1.6} />
                <p className='text-[#757575]'>0</p>
            </div>
        </div>
    );
};
