import { useState } from 'react';

export default function ProfileForm({ profile, setProfile, toast }) {
  const [form, setForm] = useState(profile);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  function handleSave() {
    setProfile({
      ...form,
      name: form.name.trim() || 'Your Name',
      hobbies: typeof form.hobbies === 'string'
        ? form.hobbies.split(',').map((s) => s.trim()).filter(Boolean)
        : form.hobbies,
      resumeUrl: form.resumeUrl.trim() || '#',
      github: form.github.trim() || '#',
      linkedin: form.linkedin.trim() || '#',
      twitter: form.twitter.trim() || '#',
      facebook: form.facebook.trim() || '#'
    });
    toast('Profile saved');
  }

  return (
    <div className="dash-card" style={{ maxWidth: 640 }}>
      <h3>Profile &amp; hero content</h3>

      <div className="field"><label>Full name</label><input value={form.name} onChange={set('name')} /></div>
      <div className="field"><label>Designation</label><input value={form.designation} onChange={set('designation')} /></div>
      <div className="field"><label>Tagline (shown under your name)</label><textarea value={form.tagline} onChange={set('tagline')} /></div>
      <div className="field"><label>About text (use a blank line between paragraphs)</label>
        <textarea style={{ minHeight: 140 }} value={form.about} onChange={set('about')} />
      </div>
      <div className="field"><label>Hobbies (comma separated)</label>
        <input
          value={Array.isArray(form.hobbies) ? form.hobbies.join(', ') : form.hobbies}
          onChange={set('hobbies')}
        />
      </div>

      <div className="field-row">
        <div className="field"><label>Email</label><input value={form.email} onChange={set('email')} /></div>
        <div className="field"><label>Phone</label><input value={form.phone} onChange={set('phone')} /></div>
      </div>
      <div className="field-row">
        <div className="field"><label>WhatsApp number (digits, with country code)</label><input value={form.whatsapp} onChange={set('whatsapp')} /></div>
        <div className="field"><label>Photo URL (optional)</label><input value={form.photo} onChange={set('photo')} /></div>
      </div>
      <div className="field"><label>Resume file URL (e.g. assets/resume.pdf)</label><input value={form.resumeUrl} onChange={set('resumeUrl')} /></div>
      <div className="field-row">
        <div className="field"><label>GitHub URL</label><input value={form.github} onChange={set('github')} /></div>
        <div className="field"><label>LinkedIn URL</label><input value={form.linkedin} onChange={set('linkedin')} /></div>
      </div>
      <div className="field-row">
        <div className="field"><label>Twitter/X URL</label><input value={form.twitter} onChange={set('twitter')} /></div>
        <div className="field"><label>Facebook URL</label><input value={form.facebook} onChange={set('facebook')} /></div>
      </div>

      <button className="btn btn-primary" onClick={handleSave}>Save profile</button>
    </div>
  );
}
