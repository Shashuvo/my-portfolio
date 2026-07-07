import { motion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Wrap any element in <Reveal> to have it fade + slide
 * into view once when it enters the viewport. `delay` staggers a group of
 * children (in ms), `y` controls how far it travels, `as` picks the tag.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 24,
  once = true,
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
