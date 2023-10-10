import clsx from 'clsx';
import { BaseInput, type RootInputProps } from '../../../types/BaseInput';

import s from './RootInput.module.scss';

const RootInput: React.FC<RootInputProps> = ({ className, labelPlaceholder, ...props }) => {
  return <BaseInput  className={(clsx(s.input), className)} {...props} placeholder={labelPlaceholder} />;
};

export default RootInput;
