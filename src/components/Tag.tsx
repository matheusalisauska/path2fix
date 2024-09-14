import { cn, getTagColor } from '@/lib/utils';

interface TagProps {
    title: string;
    color: string;
    className?: string;
}

const Tag = (props: TagProps) => {
    return (
        <div
            className={cn(
                getTagColor(props.color),
                'flex w-fit items-center justify-center rounded-[30px] px-3 py-1'
            )}
        >
            <p className='text-xs font-medium'>{props.title}</p>
        </div>
    );
};

export default Tag;
