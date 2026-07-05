import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import { EducationTimeline, ExperienceTimeline } from '../components/Timeline';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useStore } from '../hooks/useStore';

export default function Home() {
  const [profile] = useStore('profile');
  const [skills] = useStore('skills');
  const [education] = useStore('education');
  const [experience] = useStore('experience');
  const [projects] = useStore('projects');

  useEffect(() => {
    document.title = `${profile.name} — ${profile.designation}`;
  }, [profile.name, profile.designation]);

  return (
    <>
      <Navbar resumeUrl={profile.resumeUrl} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <EducationTimeline items={education} />
        <ExperienceTimeline items={experience} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
