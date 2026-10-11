import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { company } from '../data/content.js';
import { EASE } from './Reveal.jsx';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const email = company?.email || 'info@manarmarket.ae';
  const phone = company?.phone || '+971 067491880';
  const phoneRaw = company?.phoneRaw || '+971 067491880';

  const contactRows = [
    {
      num: '01',
      tag: 'EMAIL',
      value: email,
      label: 'Send us an email',
      href: `mailto:${email}`,
      ariaLabel: `Send us an email at ${email}`,
    },
    {
      num: '02',
      tag: 'PHONE',
      value: phone,
      label: 'Speak with our team',
      href: `tel:${phoneRaw}`,
      ariaLabel: `Speak with our team at ${phone}`,
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  const rowsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const rowItemVariants = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section id="contact" className="contact-editorial-section">
      <div className="container contact-editorial-container">
        {/* Introductory Section with Scroll Entrance Animation */}
        <motion.header
          className="contact-editorial-header"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
        >
          <span className="contact-editorial-eyebrow">
            <span className="contact-editorial-status-dot" aria-hidden="true" />
            CONTACT / MANAR MARKET
          </span>
          <h2 className="contact-editorial-title">
            Let's talk. <span className="contact-editorial-accent">We're listening.</span>
          </h2>
          <p className="contact-editorial-description">
            Questions about Manar Market? We'd be happy to hear from you.
          </p>
        </motion.header>

        {/* Contact Information with Staggered Entrance Animation */}
        <motion.div
          className="contact-editorial-rows"
          role="list"
          aria-label="Contact methods"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
          variants={rowsContainerVariants}
        >
          {contactRows.map((row) => (
            <motion.a
              key={row.num}
              href={row.href}
              className="contact-editorial-row"
              aria-label={row.ariaLabel}
              role="listitem"
              variants={rowItemVariants}
            >
              <div className="contact-row-meta">
                <span className="contact-row-num">{row.num}</span>
                <span className="contact-row-tag">{row.tag}</span>
              </div>

              <div className="contact-row-content">
                <span className="contact-row-value">{row.value}</span>
                <span className="contact-row-label">{row.label}</span>
              </div>

              <div className="contact-row-action" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
