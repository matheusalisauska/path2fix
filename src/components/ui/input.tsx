'use client';

import * as React from 'react';
import {
  cn,
  handlePhoneChange,
} from '@/lib/utils';

import { cva, type VariantProps } from 'class-variance-authority';
import { InputMasks, MaskHandler } from '@/types';

export const inputVariants = cva(
'flex h-10 w-full lg:max-w-full items-center focus-within:border-black/40 px-2 pl-4',
  {
    variants: {
      variant: {
        default: 'border-[1px] border-[#CCCCCC] rounded-md',
        underline: 'border-b border-[#CCCCCC]',
        ghost: 'border-none p-0',
      },
      iconPosition: {
        left: 'flex-row',
        right: 'flex-row-reverse',
      },
    },

    defaultVariants: {
      variant: 'default',
      iconPosition: 'left',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  error?: boolean;
  datatestid?: string;
  mask?: InputMasks;
  symbol?: string;
}

const maskHandlers: Record<InputMasks, MaskHandler> = {
  phone: handlePhoneChange,
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, icon, iconPosition, variant, error, mask, ...props },
    ref
  ) => {
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (mask && maskHandlers[mask]) {
          maskHandlers[mask](event);
        }
        if (props.onChange) {
          props.onChange(event);
        }
      },
      [mask, props]
    );

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (props.onKeyDown) {
          props.onKeyDown(event);
        }
      },
      [mask, props]
    );

    return (
      <section
        className={cn(
          inputVariants({ variant, iconPosition, className }),
          error && 'border-[#E03F5C] '
        )}
      >
        {icon}
        <input
          type={type}
          className={cn(
            'flex w-full px-2 text-sm outline-none ring-offset-background bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#575757] disabled:cursor-not-allowed disabled:opacity-50',
            variant === 'ghost' && 'p-0'
          )}
          {...props}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </section>
    );
  }
);

Input.displayName = 'Input';

export { Input };