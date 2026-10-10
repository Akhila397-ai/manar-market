import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, Phone, Search, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { company, navLinks } from '../data/content.js';
import { EASE } from './Reveal.jsx';

const SECTION_IDS = ['home', 'categories', 'popular', 'about', 'stores', 'contact'];

const normalizeHash = (hash) => {
  if (!hash || hash === '#' || hash === '#home') return '#home';
  if (hash === '#about' || hash === '#about-us') return '#about';
  if (hash === '#stores' || hash === '#our-stores' || hash === '#why-us') return '#stores';
  if (hash === '#categories') return '#categories';
  if (hash === '#popular') return '#popular';
  if (hash === '#contact') return '#contact';
  return hash;
};

const getActiveSectionFromScroll = () => {
  if (typeof window === 'undefined') return '#home';
  if (window.scrollY < 80) return '#home';
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
    return '#contact';
  }

  const threshold = 140;
  let bestId = 'home';
  let bestTop = -Infinity;

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= threshold && rect.top > bestTop) {
      bestTop = rect.top;
      bestId = id;
    }
  }

  return '#' + bestId;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return normalizeHash(window.location.hash);
    }
    return '#home';
  });

  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = () => setOpen(false);

  const scrollToSection = (hash, updateHistory = true) => {
    const normalized = normalizeHash(hash);
    setActiveHash(normalized);

    const targetId = normalized.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      isClickScrollingRef.current = true;
      el.scrollIntoView({ behavior: 'smooth' });

      if (updateHistory && window.location.hash !== normalized) {
        window.history.pushState(null, '', normalized);
      }

      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
      clickTimeoutRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 750);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      if (isClickScrollingRef.current) return;

      const current = getActiveSectionFromScroll();
      setActiveHash(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleUrlChange = () => {
      const hash = normalizeHash(window.location.hash);
      setActiveHash(hash);
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        isClickScrollingRef.current = true;
        el.scrollIntoView({ behavior: 'smooth' });
        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = setTimeout(() => {
          isClickScrollingRef.current = false;
        }, 750);
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    // Initial direct URL scroll on page load
    if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#home') {
      setTimeout(handleUrlChange, 120);
    }

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'is-scrolled' : ''}`}
      initial={{ y: shouldReduceMotion ? 0 : -32, opacity: shouldReduceMotion ? 1 : 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: EASE }}
    >
      <div className="container nav-inner">
        <div
          onClick={(e) => {
            if (e.target.closest('a')) {
              e.preventDefault();
              scrollToSection('#home', true);
            }
          }}
        >
          <Logo />
        </div>

        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href, true);
                    }}
                  >
                    <span className="nav-link-text">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="nav-active-indicator"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 420, damping: 32 }
                        }
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-actions">
          <button type="button" className="icon-btn" aria-label="Search">
            <Search size={19} />
          </button>
          <a className="icon-btn" href={`tel:${company.phoneRaw}`} aria-label="Call Manar Market">
            <Phone size={19} />
          </a>
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: EASE }}
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        closeMenu();
                        scrollToSection(link.href, true);
                      }}
                    >
                      <span className="mobile-nav-text">{link.label}</span>
                      {isActive && (
                        <span className="mobile-active-badge" aria-hidden="true" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
