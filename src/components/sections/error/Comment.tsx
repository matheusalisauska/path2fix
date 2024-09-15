'use client';

import { CommentList } from '@/components/CommentList';
import { Input } from '@/components/ui/input';
import { ChevronRight, MessageSquareText } from 'lucide-react';

interface CommentProps {
    comments: any[];
}

export const Comment = ({ comments }: CommentProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <p className='text-sm'>Responses (40)</p>
            <div className='flex h-fit items-center gap-4'>
                <Input
                    placeholder='Comment anything here'
                    className='h-10 rounded-md'
                    icon={<MessageSquareText size={16} color='#575757' />}
                />
                <button className='flex size-9 items-center rounded-sm bg-[#18181b] p-1 px-2'>
                    <ChevronRight color='white' />
                </button>
            </div>
            <CommentList comments={comments} />
        </div>
    );
};
