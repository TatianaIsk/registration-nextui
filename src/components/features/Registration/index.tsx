import { useRef, useState } from 'react';
import { useTheme } from 'next-themes';

import Box from '../../ui/Box';
import RootButton from '../../ui/RootButton';
import RootInput from '../../ui/RootInput';

import clsx from 'clsx';

import s from './Registration.module.scss';

const Registration = () => {
  const { theme } = useTheme();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [passwordError, setPasswordError] = useState('');

  const isDark = theme === 'dark' || theme === 'modern';

  const handleRegister = () => {
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className='container flex items-center justify-center'>
      <Box className={s.box}>
        <div
          className={clsx(s.image, {
            [s.imageDark]: isDark || '',
          })}
        />
        <div className={s.content}>
          <h1 className={s.heading}>Registration</h1>
          <div className={s.inputs}>
            <RootInput type='text' labelPlaceholder='Login' radius='full' ref={loginRef} />
            <RootInput type='text' labelPlaceholder='Password' radius='full' ref={passwordRef} />
            <RootInput type='text' labelPlaceholder='Confim password' radius='full' ref={confirmPasswordRef} />
            {passwordError && <p className={s.error}>{passwordError}</p>}
          </div>
          <RootButton radius='full' onClick={handleRegister}>
            Кнопка
          </RootButton>
        </div>
      </Box>
    </div>
  );
};

export default Registration;
