import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export const HeaderError = () => {
    return (
        <header className='grid grid-cols-3 w-full p-5 pt-6 pb-4 sticky top-0 bg-[#f5f5f5]'>
            <Link href='/home'>
                <ChevronLeft strokeWidth={1.8} />
            </Link>
            <p className='font-semibold text-lg text-center'>Error Page</p>
        </header>
    );
};
