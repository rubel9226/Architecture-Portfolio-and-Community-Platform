"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { projectSchema } from "@/validation/addSchema";
import api from "@/lib/api";
import ProjectInformation from "@/components/add project/ProjectInformation";
import CategorySelector from "@/components/add project/CategorySelector";
import ProjectMediaUpload from "@/components/add project/ProjectMediaUpload";
import ProjectGallery from "@/components/add project/ProjectGallery";
import ProjectDetails from "@/components/add project/ProjectDetails";
import SoftwareSelector from "@/components/add project/SoftwareSelector";
import VisibilitySelector from "@/components/add project/VisibilitySelector";
import PublishActions from "@/components/add project/PublishActions";
import ProjectLivePreview from "@/components/add project/ProjectLivePreview";
import { useUser } from "@/hooks/AuthContext";
import { ProjectFormData, UploadProgress } from "@/types";


export default function CreateProjectPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState<UploadProgress>({ percentage: 0, isUploading: false });
    const {token} = useUser();

    const methods = useForm<ProjectFormData>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
        title: "",
        category: "",
        projectType: "",
        year: new Date().getFullYear().toString(),
        location: "",
        university: "",
        teamMembers: "",
        clientName: "",
        overview: "",
        designConcept: "",
        materialsUsed: "",
        coverImage: null,
        galleryImages: [],
        softwareUsed: [],
        visibility: "PUBLIC",
        },
    });

    const onSubmit = async (data: ProjectFormData) => {  
        
        setError(null);
        setProgress({ percentage: 0, isUploading: true });

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (key === "coverImage" && value instanceof File) {
                formData.append("coverImage", value);
            } else if (key === "galleryImages" && Array.isArray(value)) {
                value.forEach((file) => formData.append("galleryImages", file));
            } else if (Array.isArray(value)) {
                value.forEach((item) => formData.append(`${key}[]`, item));
            } else if (value !== undefined && value !== null) {
                formData.append(key, value as string);
            }
        });

        try {
            await api.post("/project/add-project", formData, {
                headers: { 
                    "Content-Type": "multipart/form-data", 
                    Authorization: token 
                },
                onUploadProgress: (event) => {
                    if (event.total) {
                        const percentage = Math.round((event.loaded * 100) / event.total);
                        setProgress((prev) => ({ ...prev, percentage }));
                    }
                },
            });
            methods.reset();
            router.push("/dashboard/my-projects"); 
        } catch (err: any) { 
            setError(err.response?.data?.message || err.message || "An unexpected network error occurred.");
            setProgress({ percentage: 0, isUploading: false });
        } finally{
            setProgress({ percentage: 0, isUploading: false });
        }
    };

    return (
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 text-neutral-900 dark:text-white">
            <div className="max-w-7xl mx-auto">
                <header className="mb-10 border-b border-neutral-200 pb-6">
                    <h1 className="text-3xl font-light tracking-tight">Add New Project</h1>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300 mt-1">Publish a project architectural case study to your profile.</p>
                </header>

                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                        <div className="lg:col-span-2 space-y-8">
                            {error && (
                                <div className="p-4 bg-red-50 border-l-2 border-red-500 text-sm text-red-700 rounded-r-md">
                                    {error}
                                </div>
                            )}
                            <ProjectInformation />
                            <CategorySelector />
                            <ProjectMediaUpload />
                            <ProjectGallery />
                            <ProjectDetails />
                            <SoftwareSelector /> 
                            <VisibilitySelector />
                            <PublishActions progress={progress} />
                        </div>
                        
                        <div className="lg:col-span-1 lg:sticky lg:top-20">
                            <ProjectLivePreview />
                        </div>
                    </form>
                </FormProvider>
            </div>
        </main>
    );
}