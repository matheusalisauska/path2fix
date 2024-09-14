import { cn } from "@/lib/utils";

interface TitleProps {
    title: string;
    className?: string;
}

const Title = (props: TitleProps) => {
    return (
        <h2 className={cn(props.className, "text-primary font-semibold text-lg leading-6")}>{props.title}</h2>
    )
}

export default Title;