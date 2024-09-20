'use client';

import { signupAction } from '@/actions/sign-up';
import { Signup, signupSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAction } from 'next-safe-action/hooks';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { InputWithLabel } from '../InputWithLabel';
import { Form } from '../ui/form';
import { TextAreaWithLabel } from '../ui/TextAreaWithLabel';
import { Button } from '../ui/button';
import { ComboboxWithLabel } from '../ComboboxWithLabel';

export const FormCreateIssue = () => {
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
    
    const languages = [
        { label: "English", value: "en" },
        { label: "French", value: "fr" },
        { label: "German", value: "de" },
        { label: "Spanish", value: "es" },
        { label: "Portuguese", value: "pt" },
        { label: "Russian", value: "ru" },
        { label: "Japanese", value: "ja" },
        { label: "Korean", value: "ko" },
        { label: "Chinese", value: "zh" },
      ] as const

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
                        placeholder='Enter title'
                        fieldTitle='Title'
                        nameInSchema='username'
                    />
                    <TextAreaWithLabel
                        fieldTitle='Description'
                        placeholder='Enter description'
                        nameInSchema='username'
                    />
                    <ComboboxWithLabel fieldTitle='Tags' nameInSchema='username' options={languages} />
                    <Button>Create Issue</Button>
                </form>
            </Form>
        </section>
    );
};
