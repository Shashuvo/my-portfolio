import { useState } from 'react';
import { genId } from '../../data/defaultData';

const EMPTY = {
  name: '', shortDesc: '', description: '', techStack: '',
  liveLink: '', githubLink: '', image: '', challenges: '', improvements: ''
};
const COLORS = ['#0F96D4', '#4BB2D3', '#2E7DA6', '#1C6FA0', '#63C2E0'];

export default function ProjectsManager({ projects, setProjects, toast }) {
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);

  function resetForm() {
    setForm(EMPTY);
    setEditingId(null);
  }

  function handleEdit(p) {
    setEditingId(p.id);
    setForm({
      name: p.name,
      shortDesc: p.shortDesc,
      description: p.description,
      techStack: (p.techStack || []).join(', '),
      liveLink: p.liveLink,
      githubLink: p.githubLink,
      image: p.image || '',
      challenges: p.challenges,
      improvements: p.improvements
    });
  }

  function handleDelete(id) {
    if (!confirm('Delete this project?')) return;
    setProjects((prev) => prev.filter((p) => p.id !== id));
    toast('Project deleted');
  }

  function handleSave() {
    const name = form.name.trim();
    if (!name) return toast('Project name is required');
    const payload = {
      name,
      shortDesc: form.shortDesc.trim(),
      description: form.description.trim(),
      techStack: form.techStack.split(',').map((s) => s.trim()).filter(Boolean),
      liveLink: form.liveLink.trim(),
      githubLink: form.githubLink.trim(),
      image: form.image.trim(),
      challenges: form.challenges.trim(),
      improvements: form.improvements.trim()
    };

    if (editingId) {
      setProjects((prev) => prev.map((p) => (p.id === editingId ? { ...p, ...payload } : p)));
    } else {
      setProjects((prev) => [...prev, { id: genId('p'), color: COLORS[prev.length % COLORS.length], ...payload }]);
    }
    toast('Project saved');
    resetForm();
  }

  return (
    <div className="dash-layout">
      <div className="dash-card">
        <h3>{editingId ? 'Edit project' : 'Add project'}</h3>
        <div className="field"><label>Project name</label>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="field"><label>Short description (for the card)</label>
          <textarea value={form.shortDesc} onChange={(e) => setForm({ ...form, shortDesc: e.target.value })} />
        </div>
        <div className="field"><label>Full description (for detail page)</label>
          <textarea style={{ minHeight: 90 }} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>
        <div className="field"><label>Tech stack (comma separated)</label>
          <input placeholder="React, Node.js, MongoDB" value={form.techStack} onChange={(e) => setForm({ ...form, techStack: e.target.value })} />
        </div>
        <div className="field-row">
          <div className="field"><label>Live link</label><input value={form.liveLink} onChange={(e) => setForm({ ...form, liveLink: e.target.value })} /></div>
          <div className="field"><label>GitHub link</label><input value={form.githubLink} onChange={(e) => setForm({ ...form, githubLink: e.target.value })} /></div>
        </div>
        <div className="field"><label>Image URL (optional — leave blank for auto placeholder)</label>
          <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        </div>
        <div className="field"><label>Challenges faced</label>
          <textarea value={form.challenges} onChange={(e) => setForm({ ...form, challenges: e.target.value })} />
        </div>
        <div className="field"><label>Future improvements</label>
          <textarea value={form.improvements} onChange={(e) => setForm({ ...form, improvements: e.target.value })} />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>{editingId ? 'Save changes' : 'Add project'}</button>
        {editingId && <button className="btn btn-ghost" onClick={resetForm}>Cancel edit</button>}
      </div>

      <div className="dash-card">
        <h3>Current projects</h3>
        {projects.length === 0 && <p style={{ color: 'var(--text-muted)', fontSize: 13.5 }}>Nothing added yet.</p>}
        {projects.map((p) => (
          <div className="list-item" key={p.id}>
            <div className="li-main"><b>{p.name}</b><span>{(p.techStack || []).join(', ')}</span></div>
            <div className="li-actions">
              <button onClick={() => handleEdit(p)}>Edit</button>
              <button className="del" onClick={() => handleDelete(p.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
