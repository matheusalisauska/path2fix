import { z } from 'zod';

export const signupSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters'),
});

export type Signup = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters'),
});

export type Signin = z.infer<typeof signinSchema>;


export const likeIssueSchema = z.object({
    errorId: z.string().min(1, 'Error ID is required').max(100),
});

export type LikeIssue = z.infer<typeof likeIssueSchema>;
