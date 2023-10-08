import type { ComponentPropsWithRef } from 'react';
import { extendVariants, Button } from '@nextui-org/react';
import type { IconsVariants } from './IconType';

export interface RootButtonProps extends ComponentPropsWithRef<typeof BaseButton> {
  iconName?: IconsVariants;
}

export const BaseButton = extendVariants(Button, {
  variants: {
    color: {
      light: 'bg-[#e9f1f7] text-[#131b23]',
      dark: 'bg-[#131b23] text-[#fff]',
      violet: 'bg-[#8b5cf6] text-[#fff]',
    },
    isDisabled: {
      false: '',
    },
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
    },
  },
});
