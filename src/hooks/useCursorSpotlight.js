import { useEffect } from "react";

/**
 * Tracks the pointer and writes its position into two CSS custom
 * properties (--spot-x / --spot-y) on the document root. index.css uses
 * these to render a soft aurora glow that follows the cursor — the
 * site's one recurring signature motif (also echoed in card borders).
 * No-op on touch devices.
 */
export default function useCursorSpotlight() {
  useEffect(() => {
    const root = document.documentElement;
    const handle = (e) => {
      root.style.setProperty("--spot-x", `${e.clientX}px`);
      root.style.setProperty("--spot-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);
}
