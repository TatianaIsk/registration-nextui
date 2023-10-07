import { PropsWithChildren, ComponentPropsWithRef } from 'react';

import clsx from 'clsx';
import { Button } from '@nextui-org/react';

interface ButtonProps extends PropsWithChildren<ComponentPropsWithRef<'button'>> {
  className?: string;
  icon?: React.ReactNode;
}

const BaseButton: React.FC<ButtonProps> = ({ className, children, icon, ...props }) => (
  <Button className={clsx(className)} {...props} radius='full'>
    {children}
    {icon}
  </Button>
);

export default BaseButton;
