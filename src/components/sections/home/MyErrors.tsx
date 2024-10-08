import { CarouselError } from '@/components/carousel/CarouselError';
import { Section } from '@/components/section/index';
import { Separator } from '@/components/ui/separator';
import prisma from '@/lib/db';
import { Plus, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

export const MyErrors = async () => {
    const errors = await prisma.error.findMany({
        include: {
            tags: {
                include: {
                    tag: true,
                },
            },
        },
    });

    return (
        <Section.Container className='flex flex-col gap-6'>
            <Section.Wrapper className='flex-row justify-between'>
                <div className='flex flex-col'>
                    <Section.Title title='My Issues' className='leading-6' />
                    <Section.Description
                        description={`${errors.length} error${errors.length > 1 ? 's' : ''}`}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <SlidersHorizontal size={20} />
                    <Separator orientation='vertical' />
                    <Link href='/issue/create'>
                        <Plus size={20} />
                    </Link>
                </div>
            </Section.Wrapper>
            <CarouselError errors={errors} />
        </Section.Container>
    );
};
