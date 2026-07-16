// app/projects/create/page.tsx
'use client';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';
import CreateProjectHeader from '@/components/add projects/CreateProjectHeader';
import ProjectInformation from '@/components/add projects/ProjectInformation';
import ProjectMediaUpload from '@/components/add projects/ProjectMediaUpload';
import ProjectDetails from '@/components/add projects/ProjectDetails';
import SoftwareSelector from '@/components/add projects/SoftwareSelector';
import TagSelector from '@/components/add projects/TagSelector';
import VisibilitySelector from '@/components/add projects/VisibilitySelector';
import ProjectPreview from '@/components/add projects/ProjectPreview';
import PublishActions from '@/components/add projects/PublishActions';
import UploadProgress from '@/components/add projects/UploadProgress';
import { ProjectFormData, projectSchema } from '@/types/addProject';


export default function CreateProjectPage() {
    const [uploadState, setUploadState] = useState({ active: false, progress: 0, finished: false });
    const [showConfirmation, setShowConfirmation] = useState(false);

    const methods = useForm<ProjectFormData>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
        title: '',
        category: '',
        projectType: '',
        year: '2026',
        location: '',
        university: '',
        overview: '',
        softwareUsed: [],
        tags: [],
        visibility: 'PUBLIC'
        },
        mode: 'onTouched'
    });

    const runAssetUploadSimulation = () => {
        setUploadState({ active: true, progress: 0, finished: false });
        const interval = setInterval(() => {
        setUploadState((prev) => {
            if (prev.progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                setUploadState({ active: false, progress: 100, finished: true });
            }, 800);
            return { ...prev, progress: 100, finished: true };
            }
            return { ...prev, progress: prev.progress + 20 };
        });
        }, 150);
    };

    const handlePublishExecution = async (data: ProjectFormData) => {
        setShowConfirmation(false);
        runAssetUploadSimulation();
    };

    const attemptTriggerValidation = async () => {
        const isFormClean = await methods.trigger();
        if (isFormClean) {
        setShowConfirmation(true);
        }
    };

    return (
        <main className="min-h-screen bg-slate-900 pb-28 selection:bg-blue-600/10 antialiased">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handlePublishExecution)} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">

                    <CreateProjectHeader />

                    {Object.keys(methods.formState.errors).length > 0 && (
                        <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-700 flex items-center gap-2 text-xs font-semibold">
                            <AlertCircle size={14} className="shrink-0" />
                            <span>Form matrix validation failed. Verify required structural fields before committing changes.</span>
                        </div>
                    )}

                    {/* Two-Column Responsive Workspace Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        
                        {/* Left Hand Core Form Engine Column */}
                        <div className="lg:col-span-7 space-y-6">
                            <ProjectInformation />
                            <ProjectMediaUpload />
                            <ProjectDetails />
                            <SoftwareSelector />
                            <TagSelector />
                            <VisibilitySelector />
                        </div>


                        <div className="lg:col-span-5">
                            <ProjectPreview />
                        </div>
                    </div>

                    {/* Bottom Execution Bar Control Node */}
                    <PublishActions 
                        isSubmitting={uploadState.active} 
                        onOpenConfirmation={attemptTriggerValidation} 
                    />

                    {/* Publication Confirmation Modal Block */}
                    {showConfirmation && (
                        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                            <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 p-5 shadow-md space-y-4">
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-slate-900">Confirm System Publication</h4>
                                    <p className="text-xs text-slate-400 font-light leading-relaxed">This action deploys your project assets to the index registry. Ensure all calculations and vector assets are accurate.</p>
                                </div>
                                <div className="flex justify-end gap-2 text-xs font-semibold">
                                    <button type="button" onClick={() => setShowConfirmation(false)} className="px-3 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-3xs transition-colors">Confirm Deploy</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Asset Transfer Stream Monitor Component */}
                    {uploadState.active && (
                        <UploadProgress progress={uploadState.progress} isComplete={uploadState.finished} />
                    )}

                </form>
            </FormProvider>
        </main>
    );
}