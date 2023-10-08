import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import RootButton from './RootButton';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex gap-4'>
      <RootButton size='sm' onClick={() => setTheme('light')}>
        Light
      </RootButton>
      <RootButton size='sm' onClick={() => setTheme('dark')}>
        Dark
      </RootButton>
      <RootButton size='sm' onClick={() => setTheme('modern')}>
        Modern
      </RootButton>
    </div>
  );
}
