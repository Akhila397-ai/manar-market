import { motion, useReducedMotion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

// Fades and lifts its children into view once, when they scroll into the viewport.
export function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 36,
  duration = 0.8,
  className = '',
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = typeof as === 'string' && motion[as] ? motion[as] : motion.div;

  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Parent container that staggers its children by gap seconds (default 0.1s)
export function Stagger({
  as = 'div',
  gap = 0.1,
  children,
  className = '',
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = typeof as === 'string' && motion[as] ? motion[as] : motion.div;

  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }

  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: gap,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Child used inside Stagger, fading up 32px
export function StaggerItem({
  as = 'div',
  y = 32,
  duration = 0.8,
  children,
  className = '',
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = typeof as === 'string' && motion[as] ? motion[as] : motion.div;

  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }

  return (
    <Tag
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: EASE,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
