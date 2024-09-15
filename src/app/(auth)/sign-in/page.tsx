import { FormSignIn } from '@/components/form/FormSignin';

export default function SigninPage() {
    return (
        <main className='mt-4 flex flex-col gap-6 p-5'>
            <div className='space-y-1'>
                <h1 className='text-2xl font-bold'>Hey, Hello👋</h1>
                <p>Enter your credentials to access your account</p>
            </div>
            <FormSignIn />
        </main>
    );
}
