import { cn } from '@/lib/utils';

interface TitleProps {
    title: string;
    className?: string;
    children?: React.ReactNode;
}

const Title = (props: TitleProps) => {
    return (
        <div className='flex items-center gap-2'>
            {props.children}
            <p className={cn(' text-primary font-semibold text-lg', props.className)}>
                {props.title}
            </p>
        </div>
    );
};

export default Title;
