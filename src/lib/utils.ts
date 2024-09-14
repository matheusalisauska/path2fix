import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';
import { maskPhone } from './masks';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const handlePhoneChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    const formattedValue = maskPhone(value);
    event.target.value = formattedValue;
};


export function getTagColor(tag: string) {
    switch (tag) {
        case 'BLUE':
            return 'bg-[#eae2fb] text-[#7B7B7B]';
        case 'RED':
            return 'bg-[#fdf0f0] text-[#E96161]';
        case 'omg':
            return 'bg-green-500';
        case 'bruh':
            return 'bg-yellow-500';
        case 'huh':
            return 'bg-purple-500';
        default:
            return 'bg-gray-500';
    }
}
