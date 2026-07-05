// Lightweight client-side "gate" for the dashboard route.
//
// Important honesty note (also surfaced in the UI): this is a deterrent for a
// static, no-backend site, not real server-side security. The password is
// hashed (SHA-256) rather than stored in plain text, but anyone with enough
// technical know-how could clear localStorage and set a new password, since
// everything lives in the visitor's own browser. If you need real access
// control (e.g. multiple people should NOT be able to just reset it), that
// requires a backend with real authentication.

const HASH_KEY = 'pf_dash_pwhash';
const UNLOCK_KEY = 'pf_dash_unlocked';

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function hasPasswordSet() {
  return !!localStorage.getItem(HASH_KEY);
}

export async function setPassword(pw) {
  const hash = await sha256(pw);
  localStorage.setItem(HASH_KEY, hash);
  sessionStorage.setItem(UNLOCK_KEY, '1');
}

export async function checkPassword(pw) {
  const hash = await sha256(pw);
  const stored = localStorage.getItem(HASH_KEY);
  const ok = !!stored && stored === hash;
  if (ok) sessionStorage.setItem(UNLOCK_KEY, '1');
  return ok;
}

export function isUnlocked() {
  return sessionStorage.getItem(UNLOCK_KEY) === '1';
}

export function lockDashboard() {
  sessionStorage.removeItem(UNLOCK_KEY);
}
