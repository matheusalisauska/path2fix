interface CommentListProps {
    comments: any[];
}

export const CommentList = ({ comments }: CommentListProps) => {
    return (
        <div className='flex flex-col gap-4 mt-2'>
            {comments.map((comment, index) => (
                <div key={index} className='flex flex-row gap-2'>
                    <div className='size-7 rounded-full bg-red-500'></div>
                    <div className='flex flex-col'>
                        <p className='text-sm font-semibold'>
                            {comment.user.username}
                        </p>
                        <p className='text-sm'>{comment.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
