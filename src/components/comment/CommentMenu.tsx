'use client';

import { deleteCommentAction } from '@/actions/delete-comment';
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { EllipsisVertical, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface CommentMenuProps {
    id: string;
}

export const CommentMenu = ({ id }: CommentMenuProps) => {
    const [open, setIsOpen] = useState(false);
    return (
        <Drawer   open={open} onOpenChange={setIsOpen}>
            <DrawerTrigger>
                <EllipsisVertical size={16} />
            </DrawerTrigger>
            <DrawerContent  className='mx-auto flex max-w-[90%] items-start'>
                <DrawerHeader className='pb-1'>
                    <DrawerTitle className='text-base'>Comment</DrawerTitle>
                </DrawerHeader>
                <DrawerFooter className='pt-3'>
                    <button className='flex items-center gap-3'>
                        <Pencil size={16} />
                        Edit
                    </button>
                    <button
                        onClick={async () => {
                            await deleteCommentAction({ id });
                            setIsOpen(false);
                        }}
                        className='flex items-center gap-3'
                    >
                        <Trash2 size={16} />
                        Delete
                    </button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
