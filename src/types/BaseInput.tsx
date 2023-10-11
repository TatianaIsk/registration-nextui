import type { ComponentPropsWithRef } from 'react';
import { extendVariants, Input } from '@nextui-org/react';

export interface RootInputProps extends ComponentPropsWithRef<typeof BaseInput> {
  className?: string;
  labelPlaceholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
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
      light: {
        inputWrapper: ['bg-white', 'border', 'shadow', 'transition-colors', 'focus-within:bg-white', 'hover:border-black', 'hover:bg-white', 'group-focus:border-black'],
        input: ['text-black', 'placeholder:text-gray-400'],
      },
    },
  },
  defaultVariants: {
    color: 'darkPurple',
    textSize: 'base',
    removeLabel: true,
    radius: 'md',
  },
});
