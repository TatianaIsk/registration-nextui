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
      <RootButton size='sm' iconName='light' onClick={() => setTheme('light')}/>
      <RootButton size='sm' iconName='dark' onClick={() => setTheme('dark')}/>
      <RootButton size='sm' iconName='modern' onClick={() => setTheme('modern')}/>
    </div>
  );
}
