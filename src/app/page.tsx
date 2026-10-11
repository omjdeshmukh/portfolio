'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoHighlights from './components/BentoHighlights';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { experienceData, educationData } from '../data/experience';
import { ProjectItem } from '../types';

export default function HomePage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('om_theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('om_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleCopyText = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`Copied ${label} to clipboard!`);
    } catch {
      showToast(`Copied ${label}!`);
    }
  };

  return (
    <>
      <Header onThemeToggle={toggleTheme} theme={theme} />

      <main id="main-content">
        <Hero onCopyEmail={() => handleCopyText('omjdeshmukh@gmail.com', 'Email Address')} />
        <BentoHighlights />
        <ProjectsSection projects={projectsData} onSelectProject={setActiveProject} />
        <SkillsSection initialCategories={skillsData} />
        <ExperienceTimeline experience={experienceData} />
        <EducationSection education={educationData} />
        <ContactSection onCopyText={handleCopyText} onShowToast={showToast} />
      </main>

      <Footer />

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      <Toast message={toastMessage} />
    </>
  );
}
