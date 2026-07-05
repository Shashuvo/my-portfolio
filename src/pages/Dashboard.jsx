import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Icons } from '../components/Icons';
import { useStore } from '../hooks/useStore';
import DashboardAuth from './DashboardAuth';
import ProfileForm from './dashboard/ProfileForm';
import SkillsManager from './dashboard/SkillsManager';
import EducationManager from './dashboard/EducationManager';
import ExperienceManager from './dashboard/ExperienceManager';
import ProjectsManager from './dashboard/ProjectsManager';
import { useToast } from './dashboard/useToast';

const TABS = [
  { id: 'profile', label: 'Profile' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' }
];

function DashboardContent({ onLock }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useStore('profile');
  const [skills, setSkills] = useStore('skills');
  const [education, setEducation] = useStore('education');
  const [experience, setExperience] = useStore('experience');
  const [projects, setProjects] = useStore('projects');
  const { toast, ToastEl } = useToast();

  return (
    <>
      <Navbar sections={false} />
      <main className="wrap dash-shell">
        <div className="dash-head">
          <div>
            <div className="eyebrow">Admin</div>
            <h2 className="sec-title" style={{ marginBottom: 4 }}>Manage your content</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
              Changes save to this browser and appear on the site immediately. This page is
              password-protected in this browser — see the note on the lock screen for its limits.
            </p>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onLock}>
            {Icons.lock} Lock dashboard
          </button>
        </div>

        <div className="dash-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`dash-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={`dash-panel${activeTab === 'profile' ? ' active' : ''}`}>
          <ProfileForm profile={profile} setProfile={setProfile} toast={toast} />
        </div>
        <div className={`dash-panel${activeTab === 'skills' ? ' active' : ''}`}>
          <SkillsManager skills={skills} setSkills={setSkills} toast={toast} />
        </div>
        <div className={`dash-panel${activeTab === 'education' ? ' active' : ''}`}>
          <EducationManager education={education} setEducation={setEducation} toast={toast} />
        </div>
        <div className={`dash-panel${activeTab === 'experience' ? ' active' : ''}`}>
          <ExperienceManager experience={experience} setExperience={setExperience} toast={toast} />
        </div>
        <div className={`dash-panel${activeTab === 'projects' ? ' active' : ''}`}>
          <ProjectsManager projects={projects} setProjects={setProjects} toast={toast} />
        </div>
      </main>
      <ToastEl />
    </>
  );
}

export default function Dashboard() {
  return <DashboardAuth>{({ onLock }) => <DashboardContent onLock={onLock} />}</DashboardAuth>;
}
