'use client';

import { Signin, signinSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { InputWithLabel } from '../InputWithLabel';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const FormSignIn = () => {
    const router = useRouter();
    const form = useForm<Signin>({
        resolver: zodResolver(signinSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof signinSchema>) => {
        const signInData = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
        });

        if (signInData?.error) {
            console.error(signInData.error);
        } else {
            router.push('/home')
        }
    };

    return (
        <section className='flex w-full'>
            <Form {...form}>
                <form
                    className='flex w-full flex-col gap-4'
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <InputWithLabel fieldTitle='Email' nameInSchema='email' />
                    <InputWithLabel
                        fieldTitle='Password'
                        nameInSchema='password'
                    />
                    <Button className='bg-[#0098ff]'>Sign in</Button>
                </form>
            </Form>
        </section>
    );
};
