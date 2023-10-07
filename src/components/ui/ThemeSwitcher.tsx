import { useEffect, useState } from 'react';
import { useTheme, ThemeProvider } from 'next-themes';

import BaseButton from './Button';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider>
      <div className='flex gap-4'>
        <BaseButton onClick={() => setTheme('light')}></BaseButton>
        <BaseButton onClick={() => setTheme('dark')}>Dark</BaseButton>
        <BaseButton onClick={() => setTheme('modern')}>Modern</BaseButton>
      </div>
    </ThemeProvider>
  );
}
