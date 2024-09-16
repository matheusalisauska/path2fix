import { cn } from '@/lib/utils';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ subsets: ['latin'] });

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = (props: ContainerProps) => {
    return (
        <div
            className={cn(
                workSans.className,
                props.className,
                'flex h-44 w-fit max-w-[260px] flex-col gap-4 rounded-[20px] bg-white p-4'
            )}
        >
            {props.children}
        </div>
    );
};

export default Container;
