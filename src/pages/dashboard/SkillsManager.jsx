import { useState } from 'react';
import { genId } from '../../data/defaultData';
import { getTechIconUrl } from '../../data/techIcons';

const EMPTY = { category: 'Frontend', name: '', level: 70 };

export default function SkillsManager({ skills, setSkills, toast }) {
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);

  function resetForm() {
    setForm(EMPTY);
    setEditingId(null);
  }

  function handleEdit(s) {
    setEditingId(s.id);
    setForm({ category: s.category, name: s.name, level: s.level });
  }

  function handleDelete(id) {
    if (!confirm('Delete this skill?')) return;
    setSkills((prev) => prev.filter((s) => s.id !== id));
    toast('Skill deleted');
  }

  function handleSave() {
    const name = form.name.trim();
    if (!name) return toast('Enter a skill name');
    const level = Math.max(0, Math.min(100, parseInt(form.level, 10) || 0));

    if (editingId) {
      setSkills((prev) => prev.map((s) => (s.id === editingId ? { ...s, name, category: form.category, level } : s)));
    } else {
      setSkills((prev) => [...prev, { id: genId('s'), name, category: form.category, level }]);
    }
    toast('Skill saved');
    resetForm();
  }

  return (
    <div className="dash-layout">
      <div className="dash-card">
        <h3>{editingId ? 'Edit skill' : 'Add a skill'}</h3>
        <div className="field">
          <label>Category</label>
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Tools</option>
          </select>
        </div>
        <div className="field"><label>Skill name</label>
          <input placeholder="e.g. React" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {form.name.trim() && (
            <div className="logo-preview">
              {getTechIconUrl(form.name) ? (
                <>
                  <img src={getTechIconUrl(form.name)} alt="" onError={(e) => (e.target.style.display = 'none')} />
                  <span>Logo found</span>
                </>
              ) : (
                <span>No matching logo — a generic icon will show instead</span>
              )}
            </div>
          )}
        </div>
        <div className="field"><label>Proficiency (%)</label>
          <input type="number" min="0" max="100" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>{editingId ? 'Save changes' : 'Add skill'}</button>
        {editingId && <button className="btn btn-ghost" onClick={resetForm}>Cancel edit</button>}
      </div>

      <div className="dash-card">
        <h3>Current skills</h3>
        {skills.length === 0 && <p style={{ color: 'var(--text-muted)', fontSize: 13.5 }}>Nothing added yet.</p>}
        {skills.map((s) => (
          <div className="list-item" key={s.id}>
            <div className="li-main"><b>{s.name}</b><span>{s.category} · {s.level}%</span></div>
            <div className="li-actions">
              <button onClick={() => handleEdit(s)}>Edit</button>
              <button className="del" onClick={() => handleDelete(s.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
