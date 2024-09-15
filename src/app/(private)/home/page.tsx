import { MyErrors } from '@/components/sections/home/MyErrors';


export default async function HomePage() {
    return (
        <main className='flex flex-col gap-4 p-5'>
            <MyErrors />
        </main>
    );
}
