'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/store/themeSlice';
import { RootState, AppDispatch } from '@/store/store';

import { Moon, Sun } from 'lucide-react'; // Lucide icons
import styles from './ThemeToggleButton.module.scss';

export default function ThemeToggleButton() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button className={styles.toggleButton} onClick={handleToggle} aria-label="Toggle theme">
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}