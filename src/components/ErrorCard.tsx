import { ErrorType } from '@/types';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Card } from './card';
import Tag from './Tag';

interface ErrorCardProps {
    error: ErrorType;
}

export const ErrorCard = async ({ error }: ErrorCardProps) => {
    return (
        <Link href={`/issue/${error.id}`}>
            <Card.Container>
                <Card.Wrapper direction='row'>
                    {error.tags.map((tag, index) => (
                        <Tag
                            key={index}
                            title={tag.tag.name}
                            color={tag.tag.color}
                        />
                    ))}
                </Card.Wrapper>
                <Card.Title title={error.title} />
                <div className='flex items-center gap-2'>
                    <MessageCircle size={20} />
                    <p className='text-xs text-[#7B7B7B]'>0 replys</p>
                </div>
            </Card.Container>
        </Link>
    );
};
