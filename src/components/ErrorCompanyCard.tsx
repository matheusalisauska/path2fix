

import { ErrorWithTags } from '@/types';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Card } from './card';
import Tag from './Tag';

interface ErrorCompanyCardProps {
    error: ErrorWithTags;
}

export const ErrorCompanyCard= async ({ error }: ErrorCompanyCardProps) => {
    return (
        <Link href={`/issue/${error.id}`}>
            <Card.Container className='!w-full !h-fit !max-w-none'>
                <Card.Wrapper direction='row' className='w-full'>
                    {error.tags.map((tag, index) => (
                        <Tag
                            key={index}
                            title={tag.tag.name}
                            color={tag.tag.color}
                        />
                    ))}
                </Card.Wrapper>
                <Card.Title title={error.title} className='grow' />
                <div className='flex items-center gap-2 '>
                    <MessageCircle size={20} />
                    <p className='text-xs text-[#7B7B7B]'>0 replys</p>
                </div>
            </Card.Container>
        </Link>
    );
};
