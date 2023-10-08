import clsx from 'clsx';

import type { RootIconProps } from '../../../types/IconType';

import s from './RootIcon.module.scss';

const RootIcon: React.FC<RootIconProps> = ({ name, className }) => {
  return <div className={clsx(s.icon, s[name], className)}>{name}</div>;
};

export default RootIcon;
