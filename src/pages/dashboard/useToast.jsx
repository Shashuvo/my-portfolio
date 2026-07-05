import { useCallback, useState } from 'react';

export function useToast() {
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);

  const toast = useCallback((text) => {
    setMsg(text);
    setShow(true);
    setTimeout(() => setShow(false), 1800);
  }, []);

  const ToastEl = () => (
    <div className={`toast${show ? ' show' : ''}`}>{msg}</div>
  );

  return { toast, ToastEl };
}
