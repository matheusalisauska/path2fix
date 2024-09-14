import { cn } from "@/lib/utils";

interface WrapperProps {
    children: React.ReactNode;
    className?: string;
}

const Wrapper = (props: WrapperProps) => {
    return (
        <div className={cn('flex w-full flex-col', props.className)}>
            {props.children}
        </div>
    );
};

export default Wrapper;