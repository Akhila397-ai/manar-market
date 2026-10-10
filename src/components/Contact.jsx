import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { company } from '../data/content.js';

export default function Contact() {
  const email = company?.email || 'info@manarmarket.ae';
  const phone = company?.phone || '067491880';
  const phoneRaw = company?.phoneRaw || '067491880';
  const address = company?.address || 'Industrial 2, Ajman, UAE';
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        {/* Existing heading section preserved exactly */}
        <header className="contact-header">
          <span className="contact-eyebrow">We're Here to Help</span>
          <h2 className="contact-title">Let's Talk.</h2>
          <p className="contact-description">
            Good service starts with a conversation. We'd love to hear from you.
          </p>
        </header>

        {/* Thin light-grey divider */}
        <div className="contact-divider" aria-hidden="true" />

        {/* Three evenly spaced columns directly below introduction */}
        <div className="contact-grid">
          {/* 1. Email Us */}
          <article className="contact-item">
            <div className="contact-item-header">
              <div className="contact-icon" aria-hidden="true">
                <Mail size={22} />
              </div>
              <h3 className="contact-item-title">Email Us</h3>
            </div>
            <p className="contact-item-value">{email}</p>
            <div className="contact-item-footer">
              <a
                href={`mailto:${email}`}
                className="contact-link"
                aria-label={`Send an email to ${email}`}
              >
                <span>Send an email</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* 2. Call Us */}
          <article className="contact-item">
            <div className="contact-item-header">
              <div className="contact-icon" aria-hidden="true">
                <Phone size={22} />
              </div>
              <h3 className="contact-item-title">Call Us</h3>
            </div>
            <p className="contact-item-value">{phone}</p>
            <div className="contact-item-footer">
              <a
                href={`tel:${phoneRaw}`}
                className="contact-link"
                aria-label={`Call us at ${phone}`}
              >
                <span>Call us</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* 3. Visit Us */}
          <article className="contact-item">
            <div className="contact-item-header">
              <div className="contact-icon" aria-hidden="true">
                <MapPin size={22} />
              </div>
              <h3 className="contact-item-title">Visit Us</h3>
            </div>
            <p className="contact-item-value">{address}</p>
            <div className="contact-item-footer">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label={`Get directions to ${address}`}
              >
                <span>Get directions</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
