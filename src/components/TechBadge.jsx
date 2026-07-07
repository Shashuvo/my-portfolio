import { motion } from "framer-motion";
import { getTech } from "./techIcons";

/**
 * A single technology badge. Bump `size` for a bigger badge anywhere
 * it's used (Skills section uses a larger size than project cards).
 */
export default function TechBadge({ tech, size = 44, showLabel = false }) {
  const meta = getTech(tech);
  const { Icon } = meta;

  return (
    <motion.div
      className="group inline-flex items-center"
      title={meta.label}
      whileHover={{ y: -4, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div
        className="rounded-xl flex items-center justify-center shrink-0 transition-shadow group-hover:shadow-[0_8px_22px_-6px_currentColor]"
        style={{
          width: size,
          height: size,
          background: `${meta.color}1A`,
          color: meta.color,
          border: `1px solid ${meta.color}55`,
        }}
      >
        {Icon ? (
          <Icon size={size * 0.52} />
        ) : (
          <span className="font-extrabold tracking-tight" style={{ fontSize: size * 0.32 }}>
            {meta.label.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      {showLabel && <span className="ml-2 font-semibold">{meta.label}</span>}
    </motion.div>
  );
}
