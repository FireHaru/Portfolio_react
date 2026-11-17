import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

function getInitialDarkTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function ThemeToggle() {
  const [dark, setDark] = useLocalStorage('dark', getInitialDarkTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      className="icon-button"
      type="button"
      aria-label={dark ? 'Bật giao diện sáng' : 'Bật giao diện tối'}
      aria-pressed={dark}
      onClick={() => setDark((value) => !value)}
    >
      {dark ? '☀' : '☾'}
    </button>
  );
}
