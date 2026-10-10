import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/content.js';
import SafeImage from './SafeImage.jsx';
import { EASE } from './Reveal.jsx';

const SLIDE_MS = 6000;
const pad = (n) => String(n).padStart(2, '0');

export default function Hero() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;
  const slide = heroSlides[index];
  const shouldReduceMotion = useReducedMotion();

  // Auto-advance. Restarts whenever the index changes (including manual navigation).
  useEffect(() => {
    const timer = setTimeout(() => setIndex((i) => (i + 1) % total), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, total]);

  const go = (dir) => setIndex((i) => (i + dir + total) % total);

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
      transition: { duration: shouldReduceMotion ? 0 : 0.35 },
    },
  };

  const textItem = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.9, ease: EASE },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              variants={textContainer}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.span className="eyebrow" variants={textItem}>{slide.eyebrow}</motion.span>
              <motion.h1 variants={textItem}>{slide.title}</motion.h1>
              <motion.p variants={textItem}>{slide.description}</motion.p>
              <motion.div className="hero-actions" variants={textItem}>
                <motion.a
                  href="#categories"
                  className="btn btn-primary"
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {slide.primaryAction}
                  <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn btn-ghost"
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {slide.secondaryAction}
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="hero-controls">
            <button type="button" onClick={() => go(-1)} aria-label="Previous slide">
              <ChevronLeft size={20} />
            </button>
            <div className="counter" aria-live="polite">
              <span>{pad(index + 1)}</span> / {pad(total)}
            </div>
            <button type="button" onClick={() => go(1)} aria-label="Next slide">
              <ChevronRight size={20} />
            </button>
            <div className="progress" aria-hidden="true">
              <motion.span
                key={index}
                className="progress-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : SLIDE_MS / 1000, ease: 'linear' }}
              />
            </div>
          </div>
        </div>

        <div className="hero-media">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide.id}
              className="hero-image"
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.4, ease: EASE }}
            >
              <SafeImage src={slide.image} alt={slide.imageAlt} loading="eager" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
