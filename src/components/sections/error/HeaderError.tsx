import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export const HeaderError = () => {
    return (
        <header className='grid grid-cols-3 w-full p-5 pt-8'>
            <Link href='/'>
                <ChevronLeft strokeWidth={1.8} />
            </Link>
            <p className='font-semibold text-lg text-center'>Error Page</p>
        </header>
    );
};
