import { motion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

// Fades and lifts its children into view once, when they scroll into the viewport.
export default function Reveal({ as = 'div', children, delay = 0, y = 36, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
