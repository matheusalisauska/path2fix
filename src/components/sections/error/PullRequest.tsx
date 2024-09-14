import { GitPullRequest } from 'lucide-react';

export const PullRequest = () => {
    return (
        <div className='flex w-fit items-center gap-2 rounded-lg border px-4 py-2'>
            <GitPullRequest size={18} />
            <p className='text-sm'>Pull Request</p>
        </div>
    );
};
