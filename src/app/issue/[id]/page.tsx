import { Section } from '@/components/section';
import { Comment } from '@/components/sections/error/Comment';
import { ErrorInteraction } from '@/components/sections/error/ErrorInteractions';
import { PullRequest } from '@/components/sections/error/PullRequest';
import Tag from '@/components/Tag';
import { Separator } from '@/components/ui/separator';
import prisma from '@/lib/db';

export default async function Page({ params }: { params: { id: string } }) {

    const error = await prisma.error.findUnique({
        where: {
            id: params.id,
        },
        include: {
            tags: {
                include: {
                    tag: true,
                },
            },
            likes: true,
        },
    });
    if (!error) {
        return <div>error</div>;
    }
    return (
        <main className='flex flex-col gap-4 p-5'>
            <Section.Container className='flex flex-col gap-6'>
                <Section.Wrapper className='flex-row justify-between'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            {error.tags.map((tag, index) => (
                                <Tag
                                    key={index}
                                    title={tag.tag.name}
                                    color={tag.tag.color}
                                />
                            ))}
                        </div>
                        <Section.Title
                            title={error?.title}
                            className='text-2xl leading-6'
                        />
                        <p className='text-[#7B7B7B]'>{error.description}</p>
                        <ErrorInteraction error={error} userId={'4324'}/>
                        <PullRequest />
                    </div>
                </Section.Wrapper>
                <Separator />
                <Comment />
            </Section.Container>
        </main>
    );
}
