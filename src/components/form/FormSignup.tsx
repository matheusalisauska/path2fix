'use client';

import { signupAction } from '@/actions/sign-up';
import { Signup, signupSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAction } from 'next-safe-action/hooks';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { InputWithLabel } from '../InputWithLabel';
import { Form } from '../ui/form';
import { Button } from '../ui/button';

export const FormSignup = () => {
    const { executeAsync } = useAction(signupAction, {
        onSuccess: ({ data }) => {
            toast.success(data?.message);
        },
        onError: (e) => {
            toast.error('Failed to sign up');
        },
    });

    const form = useForm<Signup>({
        resolver: zodResolver(signupSchema),
        mode: 'onChange',
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    async function onSubmit() {
        executeAsync(form.getValues());
        form.reset({ username: '', email: '', password: '' });
    }

    return (
        <section className='flex w-full'>
            <Form {...form}>
                <form
                    className='flex w-full flex-col gap-4'
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.handleSubmit(onSubmit)();
                    }}
                >
                    <InputWithLabel
                        placeholder=''
                        fieldTitle='Username'
                        nameInSchema='username'
                    />
                    <InputWithLabel fieldTitle='Email' nameInSchema='email' />
                    <InputWithLabel
                        fieldTitle='Password'
                        nameInSchema='password'
                    />
                    <Button className='bg-[#0098ff]'>Sign up</Button>
                </form>
            </Form>
        </section>
    );
};
