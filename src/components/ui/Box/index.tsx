import { useTheme } from 'next-themes';

import clsx from 'clsx';

import s from './Box.module.scss';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  const { theme } = useTheme();

  const isLight = theme === 'light';

  return <div className={clsx(s.box, className,  {
    [s.boxDark]: isLight || '',
  })}>{children}</div>;
};

export default Box;
