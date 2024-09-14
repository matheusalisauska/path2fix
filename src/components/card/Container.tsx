import { cn } from "@/lib/utils";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({subsets: ['latin']});


interface ContainerProps {
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
    return (
        <div className={cn(workSans.className,"flex flex-col gap-4 h-fit  p-4 w-fit rounded-[20px] bg-white max-w-[230px]")}>
            {props.children}
        </div>
    )
}

export default Container;