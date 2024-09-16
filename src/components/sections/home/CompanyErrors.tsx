import { ErrorCompanyCard } from '@/components/ErrorCompanyCard';
import { Section } from '@/components/section';
import prisma from '@/lib/db';
import { Separator } from '@radix-ui/react-separator';
import { Plus, SlidersHorizontal } from 'lucide-react';

async function getData() {
    const errors = await prisma.error.findMany({
        include: {
            tags: {
                include: {
                    tag: true,
                },
            },
        },
    });
    return errors;
}

export const CompanyErrors = async () => {
    const errors = await getData();
    return (
        <Section.Container className='flex flex-col gap-6'>
            <Section.Wrapper className='flex-row justify-between'>
                <div className='flex flex-col'>
                    <Section.Title title='Company Issues' className='leading-6' />
                    <Section.Description
                        description={`${errors.length} error${errors.length > 1 ? 's' : ''}`}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <SlidersHorizontal size={20} />
                    <Separator orientation='vertical' />
                    <Plus size={20} />
                </div>
            </Section.Wrapper>
            {errors.map((error, index) => (
                <ErrorCompanyCard key={index} error={error} />
            ))}
        </Section.Container>
    );
};
