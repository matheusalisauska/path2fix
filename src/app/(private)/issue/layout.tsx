import { HeaderError } from '@/components/sections/error/HeaderError';

export default function ErrorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='w-full h-full min-h-screen'>
            <HeaderError />
            {children}
        </div>
    );
}
