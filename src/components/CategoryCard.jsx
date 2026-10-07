import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SafeImage from './SafeImage.jsx';
import { EASE } from './Reveal.jsx';

// Hover (desktop) or tap (touch) triggers the "hover" state on the whole card.
export default function CategoryCard({ category }) {
  return (
    <motion.a
      href="#popular"
      className="cat-card"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="hover"
    >
      <motion.div
        className="cat-media"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        <SafeImage src={category.image} alt="" />
      </motion.div>

      <motion.div
        className="cat-overlay"
        variants={{ rest: { opacity: 0.8 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.6 }}
      />

      <div className="cat-body">
        <div>
          <motion.h3
            className="cat-title"
            variants={{ rest: { y: 0 }, hover: { y: -8 } }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {category.title}
          </motion.h3>
          <motion.p
            className="cat-desc"
            variants={{ rest: { opacity: 0, y: 10 }, hover: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {category.description}
          </motion.p>
        </div>
        <motion.span
          className="cat-arrow"
          variants={{ rest: { x: 0 }, hover: { x: 6 } }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <ArrowRight size={18} />
        </motion.span>
      </div>
    </motion.a>
  );
}
