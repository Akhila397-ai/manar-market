import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SafeImage from './SafeImage.jsx';
import Reveal from './Reveal.jsx';
import ctaImg from '../assets/images/cta/cta.jpg';

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="cta">
      <motion.div className="cta-bg" style={{ y }}>
        <SafeImage src={ctaImg} alt="Manar Market shopping aisle" />
      </motion.div>
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
            whileHover={{ y: -2 }}
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
