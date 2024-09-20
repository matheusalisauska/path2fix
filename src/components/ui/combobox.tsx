'use client';

import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

interface ComboboxProps {
    options: { label: string; value: string }[];
    placeholder: string;
    icon: any;
    buttonClassName?: string;
    setSelected: (value: string) => void;
}

export function Combobox({
    options,
    placeholder,
    icon,
    buttonClassName,
    setSelected,
}: ComboboxProps) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        setSelected(value);
    }, [value, setSelected]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className={cn(
                        buttonClassName,
                        'flex w-[230px] justify-between border-[#e2e8f0] bg-[#f5f7fa]'
                    )}
                >
                    <div className='flex gap-2'>
                        {icon}
                        {value
                            ? options.find((option) => option.value === value)
                                  ?.label
                            : placeholder}
                    </div>
                    <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] bg-[#f5f7fa] p-0'>
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        <CommandEmpty>Sem resultados.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ''
                                                : currentValue
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            value === option.value
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
