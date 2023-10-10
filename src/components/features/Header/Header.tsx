import ThemeSwitcher from '../../ui/ThemeSwitcher';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.content}>
      <nav className='container flex items-center justify-between'>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
