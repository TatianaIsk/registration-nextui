import Box from '../../ui/Box';
import RootButton from '../../ui/RootButton';
import RootInput from '../../ui/RootInput';

import s from './Registration.module.scss';

const Registration = () => {
  return (
    <Box>
      <div className={s.image} />
      <div className={s.content}>
        <h1 className={s.heading}>Registration</h1>
        <div className={s.inputs}>
          <RootInput type='text' labelPlaceholder='Login' />
          <RootInput type='text' labelPlaceholder='Password' />
          <RootInput type='text' labelPlaceholder='Confim password' />
        </div>
        <RootButton>Кнопка</RootButton>
      </div>
    </Box>
  );
};

export default Registration;
