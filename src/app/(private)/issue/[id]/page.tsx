import { Section } from '@/components/section';
import { Comment } from '@/components/sections/error/Comment';
import { IssueInteraction } from '@/components/sections/error/IssueInteraction';
import { PullRequest } from '@/components/sections/error/PullRequest';
import Tag from '@/components/Tag';
import { Separator } from '@/components/ui/separator';
import prisma from '@/lib/db';

async function getData(id: string) {
    const data = await prisma.error.findUnique({
        where: {
            id: id,
        },
        include: {
            tags: {
                include: {
                    tag: true,
                },
            },
            likes: true,
            comments: {
                include: {
                    user: true,
                },
            },
        },
    });

    return data;
}

export default async function Page({ params }: { params: { id: string } }) {
    const data = await getData(params.id);

    if (!data) {
        return <div>error</div>;
    }

    return (
        <main className='flex  w-full flex-col gap-4 bg-[#f5f5f5] p-5'>
            <Section.Container className='flex flex-col gap-6'>
                <Section.Wrapper className='flex-row justify-between'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            {data.tags.map((tag, index) => (
                                <Tag
                                    key={index}
                                    title={tag.tag.name}
                                    color={tag.tag.color}
                                />
                            ))}
                        </div>
                        <Section.Title
                            title={data?.title}
                            className='text-2xl leading-6'
                        />
                        <p className='text-[#7B7B7B]'>{data.description}</p>
                        <IssueInteraction error={data} userId={'4324'} />
                        <PullRequest />
                    </div>
                </Section.Wrapper>
                <Separator />
                <Comment comments={data.comments} errorId={params.id} />
            </Section.Container>
        </main>
    );
}
