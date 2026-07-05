import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEYS, DEFAULTS } from '../data/defaultData';

function read(key) {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS[key]);
    if (!raw) return structuredClone(DEFAULTS[key]);
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read', key, e);
    return structuredClone(DEFAULTS[key]);
  }
}

/**
 * useStore('projects') -> [projects, setProjects]
 * Persists to localStorage and stays in sync across components/tabs.
 */
export function useStore(key) {
  const [value, setValue] = useState(() => read(key));

  useEffect(() => {
    function onStorage(e) {
      if (e.key === STORAGE_KEYS[key]) setValue(read(key));
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [key]);

  const update = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === 'function' ? next(prev) : next;
        try {
          localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(resolved));
        } catch (e) {
          console.error('Failed to save', key, e);
        }
        return resolved;
      });
    },
    [key]
  );

  return [value, update];
}
