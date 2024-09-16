'use client';

import { createCommentAction } from '@/actions/create-comment';
import { CommentList } from '@/components/CommentList';
import { Input } from '@/components/ui/input';
import { ChevronRight, MessageSquareText } from 'lucide-react';
import { useOptimistic, useState } from 'react';

interface CommentProps {
    comments: any[];
    errorId: string;
}

export const Comment = ({ comments, errorId }: CommentProps) => {
    const [comment, setComment] = useState('');

    const [optimisticComment, addOptmisticComment] = useOptimistic(
        comments,
        (state: { content: string }[], newMessage: string) => [
            ...state,
            { content: newMessage },
        ]
    );

    return (
        <div className='flex flex-col gap-1'>
            <p className='text-sm'>Responses ({optimisticComment.length})</p>
            <div className='flex h-fit items-center gap-4'>
                <Input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='Comment anything here'
                    className='h-10 rounded-md'
                    icon={<MessageSquareText size={16} color='#575757' />}
                />
                <button
                    onClick={async () => {
                        addOptmisticComment(comment);
                        setComment('');
                        await createCommentAction({
                            content: comment,
                            errorId: errorId,
                        });
                    }}
                    className='flex size-9 items-center rounded-sm bg-[#18181b] p-1 px-2'
                >
                    <ChevronRight color='white' />
                </button>
            </div>
            <CommentList comments={optimisticComment} />
        </div>
    );
};
