import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { EASE } from './Reveal.jsx';

// ParallaxLayer: moves child between -8% and +8% vertically using useScroll and useTransform
export function ParallaxLayer({
  children,
  className = '',
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  if (shouldReduceMotion) {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          ...style,
        }}
        {...rest}
      >
        <div style={{ width: '100%', height: '100%' }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <motion.div
        style={{
          width: '100%',
          height: '116%',
          top: '-8%',
          position: 'relative',
          y,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ImageReveal: scales an image from 1.06 to 1 while fading in
export function ImageReveal({
  children,
  className = '',
  duration = 1.1,
  delay = 0,
  style = {},
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.06 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: EASE,
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
