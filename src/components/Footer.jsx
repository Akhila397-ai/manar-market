import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';
import { company } from '../data/content.js';
import footerLogo from '../assets/logo/manar-market-footer-logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Categories', href: '#categories' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
      ariaLabel: 'Follow Madina Mart on Instagram',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com',
      ariaLabel: 'Follow Madina Mart on Facebook',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com',
      ariaLabel: 'Follow Madina Mart on Twitter',
    },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        {/* Compact 3-Column Footer Grid */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-col footer-col-brand">
            <a
              href="#home"
              className="footer-logo-link"
              aria-label="Manar Market - Home"
            >
              <img
                src={footerLogo}
                alt="Manar Market"
                className="footer-logo-img"
                width="959"
                height="105"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="footer-brand-desc">
              Everyday essentials & fresh groceries, thoughtfully selected for your home.
            </p>
            <div className="footer-socials" aria-label="Social media channels">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={item.ariaLabel}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">
              <span className="footer-title-dot" aria-hidden="true" />
              Navigation
            </h3>
            <ul className="footer-links-list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-col-title">
              <span className="footer-title-dot" aria-hidden="true" />
              Contact
            </h3>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin size={15} className="footer-contact-icon" aria-hidden="true" />
                <span className="footer-contact-text">
                  {company?.address || 'Industrial 2, Ajman, UAE'}
                </span>
              </div>
              <a
                href={`tel:${company?.phoneRaw || '+971 067491880'}`}
                className="footer-contact-item footer-contact-link"
                aria-label={`Call us at ${company?.phone || '+971 067491880'}`}
              >
                <Phone size={15} className="footer-contact-icon" aria-hidden="true" />
                <span className="footer-contact-text">
                  {company?.phone || '+971 067491880'}
                </span>
              </a>
              <a
                href={`mailto:${company?.email || 'info@manarmarket.ae'}`}
                className="footer-contact-item footer-contact-link"
                aria-label={`Send email to ${company?.email || 'info@manarmarket.ae'}`}
              >
                <Mail size={15} className="footer-contact-icon" aria-hidden="true" />
                <span className="footer-contact-text">
                  {company?.email || 'info@manarmarket.ae'}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-bottom-copy">
            © {year} Madina Mart. All rights reserved.
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={13} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
