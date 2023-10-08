import clsx from 'clsx';
import { BaseButton, type RootButtonProps } from '../../../types/BaseButton';
import RootIcon from '../RootIcon';

import s from './RootButton.module.scss';

const RootButton: React.FC<RootButtonProps> = ({ className, iconName, children, ...props }) => {
  return (
    <BaseButton className={clsx(s.button, className)} {...props} id={s.button}>
      {iconName && <RootIcon name={iconName} />}
      {children}
    </BaseButton>
  );
};

export default RootButton;
