import { HeaderError } from '@/components/sections/error/HeaderError';

export default function ErrorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <HeaderError />
            {children}
        </>
    );
}
