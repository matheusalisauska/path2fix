import { FormCreateIssue } from '@/components/form/FormCreateIssue';

export default function CreateIssuePage() {
    return (
        <main className='flex flex-col gap-4 p-5'>
            <h1 className='text-lg font-semibold'>Create Your Issue</h1>
            <FormCreateIssue />
        </main>
    );
}
