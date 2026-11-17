import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const navigation = [
  ['about', 'Giới thiệu'],
  ['skills', 'Kỹ năng'],
  ['projects', 'Dự án'],
  ['measurements', 'Số liệu'],
  ['activities', 'Hoạt động'],
  ['achievements', 'Thành tích'],
  ['repositories', 'Repo'],
  ['contact', 'Liên hệ'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#about" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">Đ.</span>
        <span>Nhật Đăng<small>/ portfolio</small></span>
      </a>

      <nav
        id="primary-navigation"
        className={menuOpen ? 'site-nav is-open' : 'site-nav'}
        aria-label="Điều hướng chính"
      >
        {navigation.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
}
