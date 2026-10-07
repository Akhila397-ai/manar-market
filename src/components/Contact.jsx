import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { company } from '../data/content.js';
import Reveal from './Reveal.jsx';

const cards = [
  { icon: MapPin, label: 'Address', value: company.address, href: null },
  { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phoneRaw}` },
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal as="header" className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Visit or Get in Touch</h2>
          <p className="section-lead">Reach out to Manar Market using the details below.</p>
        </Reveal>

        <div className="contact-grid">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <>
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <small>{card.label}</small>
                <strong>{card.value}</strong>
              </>
            );
            return (
              <Reveal key={card.label} as="div" className="contact-card" delay={i * 0.1} y={30}>
                {card.href ? <a href={card.href} className="contact-link">{inner}</a> : inner}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="contact-cta" delay={0.2}>
          <motion.a
            href={`mailto:${company.email}`}
            className="btn btn-primary"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            Get in Touch
            <ArrowRight size={18} />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
