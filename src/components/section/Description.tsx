import { cn } from '@/lib/utils';

interface DescriptionProps {
    description: string;
    className?: string;
}

const Description = (props: DescriptionProps) => {
    return (
        <p className={cn(props.className, 'text-xs text-[#7B7B7B]')}>
            {props.description}
        </p>
    );
};

export default Description;
