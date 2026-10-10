import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SafeImage from './SafeImage.jsx';
import { Reveal } from './Reveal.jsx';
import { ParallaxLayer } from './Parallax.jsx';
import ctaImg from '../assets/images/cta/cta.webp';

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="cta">
      <ParallaxLayer className="cta-bg">
        <SafeImage src={ctaImg} alt="Manar Market shopping aisle" />
      </ParallaxLayer>
      <div className="cta-overlay" aria-hidden="true" />

      <div className="container">
        <Reveal className="cta-content">
          <span className="eyebrow eyebrow-light">Shop With Us</span>
          <h2>
            Everything You Need,
            <br />
            Close to Home.
          </h2>
          <p>Discover everyday essentials at Manar Market.</p>
          <motion.a
            href="#categories"
            className="btn btn-light"
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
            transition={{ duration: 0.3 }}
          >
            Explore Categories
            <ArrowRight size={18} />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
