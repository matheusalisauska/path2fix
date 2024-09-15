interface CommentListProps {
    comments: any[];
}

export const CommentList = async ({ comments }: CommentListProps) => {
    return (
        <div className='flex flex-col gap-4'>
            {comments.map((comment, index) => (
                <p key={index}>{comment.content}</p>
            ))}
        </div>
    );
};
