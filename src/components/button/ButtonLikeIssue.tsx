'use client';

import { likeIssueAction } from '@/actions/like-issue';
import { cn } from '@/lib/utils';
import { ErrorType } from '@/types';
import { Heart } from 'lucide-react';
import { useOptimistic } from 'react';

interface ButtonLikeIssueProps {
    error: ErrorType;
    isLiked: boolean;
}

export const ButtonLikeIssue = ({ error, isLiked }: ButtonLikeIssueProps) => {
    const likesNumber = error.likes.length;

    const [optmisticLikeNumber, addOptmisticLikeNumber] = useOptimistic(
        likesNumber,
        (current) => {
            const newLikeNumber = current + (isLiked ? -1 : 1);
            return Math.max(0, Math.min(newLikeNumber, likesNumber + 1));
        }
    );

    const [optismiticIsLiked, setOptimisticIsLiked] = useOptimistic(
        isLiked,
        (current) => !current
    );

    return (
        <button
            onClick={async () => {
                addOptmisticLikeNumber(1);
                setOptimisticIsLiked(!isLiked);
                await likeIssueAction({
                    errorId: error.id,
                });
            }}
        >
            <div className='flex items-center gap-1'>
                <Heart
                    size={20}
                    className={cn(
                        optismiticIsLiked
                            ? 'fill-[#e74e5f] text-[#e74e5f]'
                            : 'text-[#757575]'
                    )}
                    strokeWidth={1.6}
                />
                <p className='text-[#757575]'>{optmisticLikeNumber}</p>
            </div>
        </button>
    );
};
