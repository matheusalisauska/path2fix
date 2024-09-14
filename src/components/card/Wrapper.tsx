import { cn } from "@/lib/utils";

interface WrapperProps {
    children: React.ReactNode;
    className?: string;
    direction?: "row" | "col"; 
}

const Wrapper = ({ children, className, direction = "col" }: WrapperProps) => {
    return (
        <div className={cn(`flex w-fit flex-${direction} gap-2`, className)}>
            {children}
        </div>
    );
};

export default Wrapper;
