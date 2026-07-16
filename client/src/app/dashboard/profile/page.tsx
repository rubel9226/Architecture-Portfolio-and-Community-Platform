// app/portfolio/page.tsx
import AboutSection from '@/components/my profile/AboutSection';
import AchievementSection from '@/components/my profile/AchievementSection';
import ContactSection from '@/components/my profile/ContactSection';
import CTA from '@/components/my profile/CTA';
import EducationSection from '@/components/my profile/EducationSection';
import ExperienceSection from '@/components/my profile/ExperienceSection';
import ProfileHero from '@/components/my profile/ProfileHero';
import ProfileStats from '@/components/my profile/ProfileStats';
import ProjectGallery from '@/components/my profile/ProjectGallery';
import SimilarCreators from '@/components/my profile/SimilarCreators';
import SkillsSection from '@/components/my profile/SkillsSection';
import { profileInfo, statistics, aboutDetails, skillsList, projectData, experienceTimeline, educationHistory, achievementsList, similarCreators } from '@/data/profileData';



export default function ArchitecturePortfolioPage() {
    return (
        <main className="min-h-screen bg-slate-50/60 pb-20 selection:bg-blue-600/10 antialiased">

            <ProfileHero info={profileInfo} />


            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">

                <ProfileStats stats={statistics} />


                <AboutSection details={aboutDetails} />


                <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Architectural Decks & Artifacts</h3>
                    <ProjectGallery initialProjects={projectData} />
                </div>


                <SkillsSection list={skillsList} />


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-8">
                        <ExperienceSection timeline={experienceTimeline} />
                    </div>
                    <div className="space-y-8">
                        <EducationSection history={educationHistory} />
                        <AchievementSection list={achievementsList} />
                    </div>
                </div>


                <SimilarCreators creators={similarCreators} />


                <ContactSection />


                <CTA />
            </div>
        </main>
    );
}