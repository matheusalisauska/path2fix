import { cn } from '@/lib/utils';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = (props: ContainerProps) => {
    return (
        <div
            className={cn(
                'flex h-fit flex-col gap-1 rounded-xl',
                props.className
            )}
        >
            {props.children}
        </div>
    );
};

export default Container;
