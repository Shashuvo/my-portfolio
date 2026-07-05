import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { hasPasswordSet, setPassword, checkPassword, isUnlocked, lockDashboard } from '../auth/auth';

export default function DashboardAuth({ children }) {
  const [ready, setReady] = useState(false);
  const [needsSetup, setNeedsSetup] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setNeedsSetup(!hasPasswordSet());
    setUnlocked(isUnlocked());
    setReady(true);
  }, []);

  if (!ready) return null;

  if (unlocked) {
    return children({
      onLock: () => {
        lockDashboard();
        setUnlocked(false);
        setPw('');
      }
    });
  }

  async function handleSetup(e) {
    e.preventDefault();
    setError('');
    if (pw.length < 4) return setError('Use at least 4 characters.');
    if (pw !== pw2) return setError("Passwords don't match.");
    await setPassword(pw);
    setUnlocked(true);
  }

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    const ok = await checkPassword(pw);
    if (!ok) return setError('Incorrect password.');
    setUnlocked(true);
  }

  return (
    <>
      <Navbar sections={false} />
      <main className="wrap auth-shell">
        <div className="auth-card">
          {needsSetup ? (
            <>
              <div className="eyebrow">First-time setup</div>
              <h2 className="sec-title" style={{ marginBottom: 10 }}>Set a dashboard password</h2>
              <p className="auth-note">
                This keeps your dashboard private so only you can edit your content. It's stored
                only in this browser — nobody else sees it.
              </p>
              <form onSubmit={handleSetup}>
                <div className="field">
                  <label>New password</label>
                  <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoFocus />
                </div>
                <div className="field">
                  <label>Confirm password</label>
                  <input type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} />
                </div>
                {error && <p className="auth-error">{error}</p>}
                <button className="btn btn-primary" type="submit">Set password &amp; continue</button>
              </form>
            </>
          ) : (
            <>
              <div className="eyebrow">Admin</div>
              <h2 className="sec-title" style={{ marginBottom: 10 }}>Enter dashboard password</h2>
              <form onSubmit={handleLogin}>
                <div className="field">
                  <label>Password</label>
                  <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoFocus />
                </div>
                {error && <p className="auth-error">{error}</p>}
                <button className="btn btn-primary" type="submit">Unlock</button>
              </form>
            </>
          )}
        </div>
      </main>
    </>
  );
}
