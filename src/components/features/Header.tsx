import ThemeSwitcher from '../ui/ThemeSwitcher';

const Header = () => {
  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
