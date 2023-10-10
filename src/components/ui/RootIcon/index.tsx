import clsx from 'clsx';

import type { RootIconProps } from '../../../types/IconType';
import { useTheme } from 'next-themes';

import s from './RootIcon.module.scss';

const RootIcon: React.FC<RootIconProps> = ({ name, className }) => {
  const { theme } = useTheme();

  const isDark = theme === 'dark' || theme === 'modern';

  return (
    <div
      className={clsx(s.icon, s[name], className, {
        [s.iconDark]: isDark || '',
      })}
    ></div>
  );
};

export default RootIcon;
