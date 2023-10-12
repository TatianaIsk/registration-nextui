import { useRef, useState } from 'react';
import { useTheme } from 'next-themes';

import Box from '../../components/ui/Box';
import RootButton from '../../components/ui/RootButton';
import RootInput from '../../components/ui/RootInput';
import Image from '../../components/ui/Image/Image';

import s from './Registration.module.scss';
import ParticlesAnimation from '../../components/ui/ParticlesAnimation/ParticlesAnimation';

const Registration = () => {
  const { theme } = useTheme();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [passwordError, setPasswordError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const isDark = theme === 'dark' || theme === 'modern';

  const handleRegister = () => {
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      setDisabled(true);
    } else {
      setDisabled(false);
      setPasswordError('');
    }
  };

  return (
    <div className='container flex items-center justify-center'>
      <ParticlesAnimation />
      <Box className={s.box}>
        <Image isDark={isDark} />
        <div className={s.content}>
          <h1 className={s.heading}>Registration</h1>
          <div className={s.inputs}>
            <RootInput type='text' labelPlaceholder='Login' radius='full' inputRef={loginRef} />
            <RootInput type='text' labelPlaceholder='Password' radius='full' inputRef={passwordRef} />
            <RootInput type='text' labelPlaceholder='Confim password' radius='full' inputRef={confirmPasswordRef} />
            {passwordError && <p className={s.error}>{passwordError}</p>}
          </div>
          <RootButton radius='full' onClick={handleRegister} disabled={disabled}>
            Sing up
          </RootButton>
        </div>
      </Box>
    </div>
  );
};

export default Registration;
