import { motion } from 'framer-motion';
import SafeImage from './SafeImage.jsx';
import Reveal, { EASE } from './Reveal.jsx';
import aboutImg from '../assets/images/about/about.jpg';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container split">
        <motion.div
          className="about-media"
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <SafeImage src={aboutImg} alt="Inside Manar Market, with shelves of everyday essentials" />
        </motion.div>

        <Reveal className="about-copy">
          <span className="eyebrow">About Manar Market</span>
          <h2 className="section-title">
            Your Everyday Market,
            <br />
            Made Simple.
          </h2>
          <p>
            Manar Market brings together groceries, fresh food, beverages and household essentials in one
            convenient place. We focus on what matters most in daily life: quality products, a pleasant
            shopping experience and a selection that makes everyday shopping simpler.
          </p>
          <p>
            Whether you are planning the week ahead or picking up a few essentials on the way home, we
            aim to make every visit easy and welcoming.
          </p>
          <div className="tagline">
            <span>Quality</span>
            <span>Convenience</span>
            <span>Everyday Essentials</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
