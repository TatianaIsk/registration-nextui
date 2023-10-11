import clsx from 'clsx';

import s from './Image.module.scss';

interface imageProps {
  isDark?: boolean;
}

const Image: React.FC<imageProps> = ({ isDark }) => {
  return (
    <div
      className={clsx(s.image, {
        [s.imageDark]: isDark,
      })}
    />
  );
};

export default Image;
