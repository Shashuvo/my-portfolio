import { useState } from 'react';
import { genId } from '../../data/defaultData';

const EMPTY = { role: '', company: '', duration: '', points: '' };

export default function ExperienceManager({ experience, setExperience, toast }) {
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);

  function resetForm() {
    setForm(EMPTY);
    setEditingId(null);
  }

  function handleEdit(x) {
    setEditingId(x.id);
    setForm({ role: x.role, company: x.company, duration: x.duration, points: (x.points || []).join('\n') });
  }

  function handleDelete(id) {
    if (!confirm('Delete this entry?')) return;
    setExperience((prev) => prev.filter((x) => x.id !== id));
    toast('Entry deleted');
  }

  function handleSave() {
    const role = form.role.trim();
    const company = form.company.trim();
    if (!role || !company) return toast('Role and company are required');
    const points = form.points.split('\n').map((s) => s.trim()).filter(Boolean);
    const payload = { role, company, duration: form.duration.trim(), points };

    if (editingId) {
      setExperience((prev) => prev.map((x) => (x.id === editingId ? { ...x, ...payload } : x)));
    } else {
      setExperience((prev) => [...prev, { id: genId('x'), ...payload }]);
    }
    toast('Experience saved');
    resetForm();
  }

  return (
    <div className="dash-layout">
      <div className="dash-card">
        <h3>{editingId ? 'Edit experience' : 'Add experience'}</h3>
        <div className="field"><label>Role / title</label>
          <input placeholder="e.g. Frontend Developer" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
        </div>
        <div className="field"><label>Company</label>
          <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        </div>
        <div className="field"><label>Duration</label>
          <input placeholder="e.g. 2023 — Present" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
        </div>
        <div className="field"><label>Highlights (one per line)</label>
          <textarea style={{ minHeight: 100 }} value={form.points} onChange={(e) => setForm({ ...form, points: e.target.value })} />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>{editingId ? 'Save changes' : 'Add experience'}</button>
        {editingId && <button className="btn btn-ghost" onClick={resetForm}>Cancel edit</button>}
      </div>

      <div className="dash-card">
        <h3>Experience history</h3>
        {experience.length === 0 && <p style={{ color: 'var(--text-muted)', fontSize: 13.5 }}>Nothing added yet.</p>}
        {experience.map((x) => (
          <div className="list-item" key={x.id}>
            <div className="li-main"><b>{x.role}</b><span>{x.company} · {x.duration}</span></div>
            <div className="li-actions">
              <button onClick={() => handleEdit(x)}>Edit</button>
              <button className="del" onClick={() => handleDelete(x.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
