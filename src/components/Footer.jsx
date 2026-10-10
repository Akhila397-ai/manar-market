import { company, navLinks } from '../data/content.js';
import footerLogo from '../assets/logo/madina-mart-logo-1.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="#home"
              className="brand-logo-link brand-logo-light"
              aria-label="Madina Mart - Home"
            >
              <img
                src={footerLogo}
                alt="Madina Mart"
                className="brand-logo-img"
                width="1024"
                height="151"
                loading="lazy"
                decoding="async"
              />
            </a>
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
