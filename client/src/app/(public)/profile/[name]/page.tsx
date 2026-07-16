// app/portfolio/page.tsx
import { profileInfo, statistics, aboutDetails, skillsList, projectData, experienceTimeline, educationHistory, achievementsList, similarCreators } from '@/data/profileData';

import ProfileHero from '@/components/profile/ProfileHero';
import ProfileStats from '@/components/profile/ProfileStats';
import AboutSection from '@/components/profile/AboutSection';
import SkillsSection from '@/components/profile/SkillsSection';
import ProjectGallery from '@/components/profile/ProjectGallery';
import ExperienceSection from '@/components/profile/ExperienceSection';
import EducationSection from '@/components/profile/EducationSection';
import AchievementSection from '@/components/profile/AchievementSection';
import ContactSection from '@/components/profile/ContactSection';
import SimilarCreators from '@/components/profile/SimilarCreators';
import CTA from '@/components/profile/CTA';

export default function ArchitecturePortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50/60 pb-20 selection:bg-blue-600/10 antialiased">
      {/* Immersive Profile Hero Branding Matrix */}
      <ProfileHero info={profileInfo} />

      {/* Structured Multi-Column Content Frame */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Core Profile Metrics Dashboard */}
        <ProfileStats stats={statistics} />

        {/* Narrative Framework Section Block */}
        <AboutSection details={aboutDetails} />

        {/* Dynamic Multi-Category Operational Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Architectural Decks & Artifacts</h3>
          <ProjectGallery initialProjects={projectData} />
        </div>

        {/* Technical Ecosystem Competency List */}
        <SkillsSection list={skillsList} />

        {/* Dual Split Context Rail (Experience Timeline + Education Node) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <ExperienceSection timeline={experienceTimeline} />
          </div>
          <div className="space-y-8">
            <EducationSection history={educationHistory} />
            <AchievementSection list={achievementsList} />
          </div>
        </div>

        {/* Recommended Creators System Track */}
        <SimilarCreators creators={similarCreators} />

        {/* Secure Transaction Inbound Touchpoint */}
        <ContactSection />

        {/* Platform Ecosystem Invitation Anchor */}
        <CTA />
      </div>
    </main>
  );
}