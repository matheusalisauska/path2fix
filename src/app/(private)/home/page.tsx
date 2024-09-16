import { CompanyErrors } from '@/components/sections/home/CompanyErrors';
import { MyErrors } from '@/components/sections/home/MyErrors';

export default async function HomePage() {
    return (
        <main className='flex flex-col gap-12 p-5'>
            <MyErrors />
            <CompanyErrors />
        </main>
    );
}
