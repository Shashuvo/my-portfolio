import { useState } from 'react';
import { genId } from '../../data/defaultData';

const EMPTY = { degree: '', institution: '', duration: '', details: '' };

export default function EducationManager({ education, setEducation, toast }) {
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);

  function resetForm() {
    setForm(EMPTY);
    setEditingId(null);
  }

  function handleEdit(e) {
    setEditingId(e.id);
    setForm({ degree: e.degree, institution: e.institution, duration: e.duration, details: e.details || '' });
  }

  function handleDelete(id) {
    if (!confirm('Delete this entry?')) return;
    setEducation((prev) => prev.filter((e) => e.id !== id));
    toast('Entry deleted');
  }

  function handleSave() {
    const degree = form.degree.trim();
    const institution = form.institution.trim();
    if (!degree || !institution) return toast('Degree and institution are required');
    const payload = { degree, institution, duration: form.duration.trim(), details: form.details.trim() };

    if (editingId) {
      setEducation((prev) => prev.map((e) => (e.id === editingId ? { ...e, ...payload } : e)));
    } else {
      setEducation((prev) => [...prev, { id: genId('e'), ...payload }]);
    }
    toast('Education saved');
    resetForm();
  }

  return (
    <div className="dash-layout">
      <div className="dash-card">
        <h3>{editingId ? 'Edit education' : 'Add education'}</h3>
        <div className="field"><label>Degree</label>
          <input placeholder="e.g. B.Sc. in CSE" value={form.degree} onChange={(e) => setForm({ ...form, degree: e.target.value })} />
        </div>
        <div className="field"><label>Institution</label>
          <input value={form.institution} onChange={(e) => setForm({ ...form, institution: e.target.value })} />
        </div>
        <div className="field"><label>Duration</label>
          <input placeholder="e.g. 2018 — 2022" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
        </div>
        <div className="field"><label>Details (optional)</label>
          <textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>{editingId ? 'Save changes' : 'Add education'}</button>
        {editingId && <button className="btn btn-ghost" onClick={resetForm}>Cancel edit</button>}
      </div>

      <div className="dash-card">
        <h3>Education history</h3>
        {education.length === 0 && <p style={{ color: 'var(--text-muted)', fontSize: 13.5 }}>Nothing added yet.</p>}
        {education.map((e) => (
          <div className="list-item" key={e.id}>
            <div className="li-main"><b>{e.degree}</b><span>{e.institution} · {e.duration}</span></div>
            <div className="li-actions">
              <button onClick={() => handleEdit(e)}>Edit</button>
              <button className="del" onClick={() => handleDelete(e.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
