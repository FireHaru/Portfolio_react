import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Portfolio from './components/Portfolio.jsx';
import ContactForm from './components/ContactForm.jsx';
import { Achievements, Community, Skills } from './components/Experience.jsx';
import Repositories from './components/Repositories.jsx';
import BackToTop from './components/BackToTop.jsx';

import './index.css';


export default function App() {
  return(
    <>
      <Header />
      <main className="container">
        <Hero />
        <Skills />
        <Portfolio />
        <Community />
        <Achievements />
        <Repositories />
        <ContactForm />
      </main>
      <footer className="site-footer">
        <p>© 2026 Nguyễn Nhật Đăng</p>
        <a href="https://github.com/FireHaru" target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
      <BackToTop />
    </>
  );
}

