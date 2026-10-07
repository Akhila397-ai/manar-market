import { company, navLinks } from '../data/content.js';
import Logo from './Logo.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo variant="light" />
          </div>

          <p className="footer-statement">Everyday essentials, thoughtfully selected for your home.</p>

          <nav aria-label="Footer" className="footer-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© {year} Manar Market</span>
          <span>{company.address}</span>
          <a href={company.websiteUrl}>{company.website}</a>
        </div>
      </div>
    </footer>
  );
}
