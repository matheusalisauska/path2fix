import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { CommentMenu } from './CommentMenu';

interface CommentListProps {
    comments: any[];
}

export const CommentList = ({ comments }: CommentListProps) => {
    const { data: session } = useSession();

    return (
        <div className='mt-4 flex flex-col gap-4'>
            {comments.map((comment, index) => (
                <div key={index} className='flex flex-row items-start gap-2'>
                    <div className='size-7 flex-shrink-0 rounded-full bg-red-500'></div>
                    <div className='flex grow flex-col items-start'>
                        <p className='text-sm font-semibold'>
                            {comment.user.username}
                        </p>
                        <p className='text-sm'>{comment.content}</p>
                        <div className='mt-1 flex items-center gap-2 text-sm text-[#7b7b7b]'>
                            <ThumbsUp size={16} />
                            <ThumbsDown size={16} />
                        </div>
                    </div>
                    {session?.user.id === comment.user.id && <CommentMenu id={comment.id} />}
                </div>
            ))}
        </div>
    );
};
