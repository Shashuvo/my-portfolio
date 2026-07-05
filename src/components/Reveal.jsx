import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return <div ref={ref} className={`reveal${inView ? ' in' : ''}${className ? ' ' + className : ''}`}>{children}</div>;
}
