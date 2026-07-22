// app/projects/[id]/page.tsx
import Comments from '@/components/ProjectDetails/Comments';
import DesignerCard from '@/components/ProjectDetails/DesignerCard';
import ImageGallery from '@/components/ProjectDetails/ImageGallery';
import ProjectHero from '@/components/ProjectDetails/ProjectHero';
import ProjectInfo from '@/components/ProjectDetails/ProjectInfo';
import ProjectOverview from '@/components/ProjectDetails/ProjectOverview';
import ProjectStats from '@/components/ProjectDetails/ProjectStats';
import RelatedProjects from '@/components/ProjectDetails/RelatedProjects';
import StickySidebar from '@/components/ProjectDetails/StickySidebar';
import Technologies from '@/components/ProjectDetails/Technologies';
import { projectData, technologies, designer, statistics, galleryImages, relatedProjects, comments } from '@/data/projectMockData';



export default function ProjectDetailsPage() {
    return (
        <main className="min-h-screen bg-slate-50/60 pb-24 antialiased selection:bg-blue-600/10">            
            <ProjectHero data={projectData} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    <div className="lg:col-span-2 space-y-12">
                        <ProjectStats stats={statistics} />
                        
                        <ProjectOverview data={projectData} />
                        
                        
                        <div className="block lg:hidden space-y-6">
                            <DesignerCard designer={designer} />
                        </div>

                        <div className="block lg:hidden">
                            <ProjectInfo data={projectData} />
                        </div>

                        <ImageGallery images={galleryImages} />
                        
                        <Technologies techs={technologies} />
                        
                        <hr className="border-slate-200" />
                        
                        <Comments list={comments} />
                    </div>

                    <StickySidebar data={projectData} author={designer} />
                </div>


                <div className="mt-20 pt-12 border-t border-slate-200">
                    <RelatedProjects items={relatedProjects} />
                </div>
            </div>
        </main>
    );
}