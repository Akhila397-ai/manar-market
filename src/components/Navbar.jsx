import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { Menu, Phone, Search, X } from 'lucide-react';

import Logo from './Logo.jsx';
import { company, navLinks } from '../data/content.js';
import { EASE } from './Reveal.jsx';

const SECTION_IDS = [
  'home',
  'categories',
  'popular',
  'about',
  'stores',
  'contact',
];

const normalizeHash = (hash) => {
  if (!hash || hash === '#' || hash === '#home') {
    return '#home';
  }

  const aliases = {
    '#about-us': '#about',
    '#our-stores': '#stores',
    '#why-us': '#stores',
  };

  const normalized = aliases[hash] || hash;

  return SECTION_IDS.includes(normalized.slice(1))
    ? normalized
    : '#home';
};

const getActiveSectionFromScroll = () => {
  if (typeof window === 'undefined') return '#home';

  if (window.scrollY < 80) return '#home';

  const nearBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 60;

  if (nearBottom) return '#contact';

  const threshold = 150;
  let activeId = 'home';

  for (const id of SECTION_IDS) {
    const section = document.getElementById(id);

    if (!section) continue;

    const { top } = section.getBoundingClientRect();

    if (top <= threshold) {
      activeId = id;
    }
  }

  return `#${activeId}`;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() => {
    if (typeof window === 'undefined') return '#home';

    return normalizeHash(window.location.hash);
  });

  const headerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const isClickScrollingRef = useRef(false);

  const shouldReduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const scrollToSection = useCallback(
    (hash, updateHistory = true) => {
      const normalized = normalizeHash(hash);
      const targetId = normalized.slice(1);
      const section = document.getElementById(targetId);

      setActiveHash(normalized);
      closeMenu();

      if (!section) {
        if (normalized === '#home') {
          window.scrollTo({
            top: 0,
            behavior: shouldReduceMotion ? 'auto' : 'smooth',
          });
        }

        return;
      }

      isClickScrollingRef.current = true;

      section.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      if (
        updateHistory &&
        window.location.hash !== normalized
      ) {
        window.history.pushState(null, '', normalized);
      }

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      // Keep the clicked link active while smooth scrolling finishes.
      scrollTimeoutRef.current = window.setTimeout(() => {
        isClickScrollingRef.current = false;
        setActiveHash(getActiveSectionFromScroll());
      }, shouldReduceMotion ? 0 : 900);
    },
    [closeMenu, shouldReduceMotion],
  );

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 32);

        if (!isClickScrollingRef.current) {
          setActiveHash(getActiveSectionFromScroll());
        }

        ticking = false;
      });
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleUrlChange = () => {
      const hash = normalizeHash(window.location.hash);

      setActiveHash(hash);

      const target = document.getElementById(hash.slice(1));

      if (!target) return;

      target.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    if (
      window.location.hash &&
      window.location.hash !== '#home'
    ) {
      const timeout = window.setTimeout(handleUrlChange, 120);

      return () => {
        window.removeEventListener('popstate', handleUrlChange);
        window.removeEventListener('hashchange', handleUrlChange);
        window.clearTimeout(timeout);
      };
    }

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, closeMenu]);

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);

    return () => {
      document.removeEventListener(
        'pointerdown',
        handleOutsideClick,
      );
    };
  }, [open, closeMenu]);

  const handleSearch = () => {
    // Connect this to a search overlay when search functionality
    // is implemented. For now, move to the product section.
    scrollToSection('#popular');
  };

  return (
    <motion.header
      ref={headerRef}
      className={`navbar ${scrolled ? 'is-scrolled' : ''} ${
        open ? 'menu-is-open' : ''
      }`}
      initial={
        shouldReduceMotion
          ? false
          : { y: -24, opacity: 0 }
      }
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: EASE,
      }}
    >
      <div className="container nav-inner">
        <div className="nav-brand">
          <Logo />
        </div>

        <nav className="desktop-navigation" aria-label="Main navigation">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;

              return (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${
                      isActive ? 'is-active' : ''
                    }`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    <span className="nav-link-text">
                      {link.label}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="nav-active-indicator"
                        aria-hidden="true"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : {
                                type: 'spring',
                                stiffness: 450,
                                damping: 34,
                              }
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
          <button
            type="button"
            className="icon-btn search-btn"
            aria-label="Explore popular products"
            onClick={handleSearch}
          >
            <Search size={19} strokeWidth={1.8} />
          </button>

          <a
            className="icon-btn phone-btn"
            href={`tel:${company.phoneRaw}`}
            aria-label="Call Manar Market"
          >
            <Phone size={18} strokeWidth={1.8} />
          </a>

          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'menu'}
                initial={
                  shouldReduceMotion
                    ? false
                    : { rotate: -45, opacity: 0, scale: 0.8 }
                }
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { rotate: 45, opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.18,
                }}
                className="menu-icon-wrapper"
              >
                {open ? (
                  <X size={21} />
                ) : (
                  <Menu size={21} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={
              shouldReduceMotion
                ? false
                : { height: 0, opacity: 0, y: -8 }
            }
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={
              shouldReduceMotion
                ? undefined
                : { height: 0, opacity: 0, y: -8 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.28,
              ease: EASE,
            }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="mobile-nav-list">
                {navLinks.map((link, index) => {
                  const isActive = activeHash === link.href;

                  return (
                    <motion.li
                      key={link.href}
                      initial={
                        shouldReduceMotion
                          ? false
                          : { opacity: 0, x: -10 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.2,
                        delay: shouldReduceMotion ? 0 : index * 0.035,
                      }}
                    >
                      <a
                        href={link.href}
                        className={`mobile-nav-link ${
                          isActive ? 'is-active' : ''
                        }`}
                        aria-current={
                          isActive ? 'location' : undefined
                        }
                        onClick={(event) => {
                          event.preventDefault();
                          scrollToSection(link.href);
                        }}
                      >
                        <span className="mobile-nav-text">
                          {link.label}
                        </span>

                        {isActive && (
                          <span
                            className="mobile-active-badge"
                            aria-hidden="true"
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <a
                className="mobile-call-link"
                href={`tel:${company.phoneRaw}`}
                onClick={closeMenu}
              >
                <Phone size={17} />
                <span>Call Manar Market</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}