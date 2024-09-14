import Image from 'next/image';
import ProfilePic from '@public/assets/ProfilePic.png';
import { Bell, Search } from 'lucide-react';

export const Header = () => {
    return (
        <header className='flex flex-row items-center justify-between p-5 pt-8'>
            <div className='flex items-center gap-2'>
                <Image
                    src={ProfilePic}
                    alt='User Picture'
                    className='rounded-full'
                    width={45}
                    height={45}
                />
                <div className='flex flex-col'>
                    <p className='text-xs text-[#7B7B7B]'>Good Evening</p>
                    <p className='text-xl font-semibold text-primary'>
                        Matheus{' '}
                    </p>
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <Search color='#000B23' strokeWidth={1.4} />
                <Bell color='#000B23' strokeWidth={1.4} />
            </div>
        </header>
    );
};
