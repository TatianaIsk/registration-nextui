import type { ComponentPropsWithRef } from 'react';
import { extendVariants, Input } from '@nextui-org/react';

export interface RootInputProps extends ComponentPropsWithRef<typeof BaseInput> {
  className?: string;
  labelPlaceholder: string;
}

export const BaseInput = extendVariants(Input, {
  variants: {
    color: {
      darkPurple: {
        inputWrapper: [
          'bg-purple-800',
          'border',
          'shadow',
          'transition-colors',
          'focus-within:bg-purple-800',
          'hover:border-purple-600',
          'hover:bg-purple-800',
          'group-focus:border-purple-600',
          'dark:bg-gray-900',
          'dark:border-purple-800',
          'dark:hover:bg-gray-900',
          'dark:focus-within:bg-gray-900',
        ],
        input: ['text-white', 'placeholder:text-gray-600', 'dark:text-gray-400', 'dark:placeholder:text-gray-600'],
      },
    },
    size: {
      xs: {
        inputWrapper: 'h-8 min-h-8 px-2',
        input: 'text-xs',
      },
      md: {
        inputWrapper: 'h-10 min-h-10',
        input: 'text-sm',
      },
      xl: {
        inputWrapper: 'h-12 min-h-12',
        input: 'text-base',
      },
    },
    radius: {
      xs: {
        inputWrapper: 'rounded-sm',
      },
      sm: {
        inputWrapper: 'rounded-md',
      },
    },
    textSize: {
      base: {
        input: 'text-base',
      },
    },
    removeLabel: {
      true: {
        label: 'hidden',
      },
      false: {},
    },
  },
  defaultVariants: {
    color: 'darkPurple',
    textSize: 'base',
    removeLabel: true,
    radius: 'md',
  },
});
