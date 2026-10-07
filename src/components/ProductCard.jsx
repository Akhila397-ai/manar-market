import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SafeImage from './SafeImage.jsx';
import { EASE } from './Reveal.jsx';

export default function ProductCard({ product }) {
  return (
    <motion.article
      className="product-card"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{ rest: { y: 0 }, hover: { y: -6 } }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="product-media">
        <motion.div
          className="product-img"
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <SafeImage src={product.image} alt={product.name} />
        </motion.div>
      </div>

      <div className="product-info">
        <div>
          <span className="product-cat">{product.category}</span>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-detail">{product.detail}</p>
        </div>
        <motion.span
          className="product-arrow"
          variants={{ rest: { opacity: 0.4, x: 0 }, hover: { opacity: 1, x: 3 } }}
          transition={{ duration: 0.4, ease: EASE }}
          aria-hidden="true"
        >
          <ArrowUpRight size={18} />
        </motion.span>
      </div>
    </motion.article>
  );
}
