"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

import { editProjectSchema } from "@/validation/editProjectSchema";
import { EditProjectFormData, ProjectData } from "@/types/editProject";
import api from "@/lib/api";
import { toast } from "sonner";
import EditProjectInformation from "@/components/edit project/EditProjectInformation";
import EditCategorySelector from "@/components/edit project/EditCategorySelector";
import EditProjectMediaUpload from "@/components/edit project/EditProjectMediaUpload";
import EditProjectGallery from "@/components/edit project/EditProjectGallery";
import EditProjectDetails from "@/components/edit project/EditProjectDetails";
import EditSoftwareSelector from "@/components/edit project/EditSoftwareSelector";
import EditTagSelector from "@/components/edit project/EditTagSelector";
import EditVisibilitySelector from "@/components/edit project/EditVisibilitySelector";
import EditPublishActions from "@/components/edit project/EditPublishActions";
import EditProjectLivePreview from "@/components/edit project/EditProjectLivePreview";
import ComingSoonPage from "@/components/ui/ComingSoon";


export default function EditProjectPage() {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [errorStatus, setErrorStatus] = useState<string | null>(null);
    const [initialAssetData, setInitialAssetData] = useState<{ cover: string; gallery: string[] } | null>(null);

    const methods = useForm<EditProjectFormData>({
        resolver: zodResolver(editProjectSchema),
        defaultValues: {
            title: "",
            category: "",
            projectType: "",
            year: new Date().getFullYear(),
            location: "",
            university: "",
            teamMembers: [],
            clientName: "",
            overview: "",
            designConcept: "",
            materialsUsed: [],
            coverImage: null,
            galleryImages: [],
            softwareUsed: [],
            tags: [],
            visibility: "public"
        }
    });

    useEffect(() => {
        async function getProjectDetails() {
            try {
                setLoading(true);
                setErrorStatus(null);
                const response = await api.get<ProjectData>(`/project/single-project/${id}`);
                const data = response?.data?.payload;
                console.log(data, 'project details')

                setInitialAssetData({
                    cover: data.coverImage,
                    gallery: data.galleryImages
                });

                methods.reset({
                    title: data.title,
                    category: data.category,
                    projectType: data.projectType,
                    year: data.year,
                    location: data.location,
                    university: data.university || "",
                    teamMembers: data.teamMembers || [],
                    clientName: data.clientName || "",
                    overview: data.overview,
                    designConcept: data.designConcept || "",
                    materialsUsed: data.materialsUsed || [],
                    coverImage: data.coverImage, 
                    galleryImages: data.galleryImages, 
                    softwareUsed: data.softwareUsed || [],
                    tags: data.tags || [],
                    visibility: data.visibility
                });
            } catch (err: unknown) {
                console.error(err);
                setErrorStatus("Could not resolve architectural portfolio entry. Resource missing or invalid schema metadata.");
                toast.error("Failed to fetch project specifications");
            } finally {
                setLoading(false);
            }
        }

        if (id) getProjectDetails();
    }, [id, methods]);

    const onSubmitForm = async (values: EditProjectFormData) => {
        try {
        setSubmitting(true);
        setUploadProgress(0);
        const formData = new FormData();

        // Append general structural primitives
        formData.append("title", values.title);
        formData.append("category", values.category);
        formData.append("projectType", values.projectType);
        formData.append("year", String(values.year));
        formData.append("location", values.location);
        formData.append("university", values.university);
        formData.append("clientName", values.clientName);
        formData.append("overview", values.overview);
        formData.append("designConcept", values.designConcept);
        formData.append("visibility", values.visibility);

        // Arrays handled as structural stringified updates
        formData.append("teamMembers", JSON.stringify(values.teamMembers));
        formData.append("materialsUsed", JSON.stringify(values.materialsUsed));
        formData.append("softwareUsed", JSON.stringify(values.softwareUsed));
        formData.append("tags", JSON.stringify(values.tags));

        // Append cover only if it's a new file instance
        if (values.coverImage instanceof File) {
            formData.append("coverImage", values.coverImage);
        }

        // Filter and separate gallery image instances
        const preservationGalleryUrls: string[] = [];
        values.galleryImages.forEach((item) => {
            if (item instanceof File) {
                formData.append("galleryImages", item);
            } else if (typeof item === "string") {
                preservationGalleryUrls.push(item);
            }
        });
        formData.append("preservedGalleryImages", JSON.stringify(preservationGalleryUrls));

        await api.put(`/project/update-project/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (progressEvent) => {
                if (progressEvent.total) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                }
            }
        });

        toast.success("Architectural master blueprint modified successfully.");
        router.push("/dashboard/my-projects");
        } catch (err: unknown) {
            console.error(err);
            toast.error("Pipeline failure while pushing mutations to target project node.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-zinc-100">
            <div className="w-full max-w-5xl space-y-6 animate-pulse">
            <div className="h-6 w-48 rounded bg-zinc-900" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                <div className="h-44 rounded-xl bg-zinc-900" />
                <div className="h-64 rounded-xl bg-zinc-900" />
                <div className="h-32 rounded-xl bg-zinc-900" />
                </div>
                <div className="space-y-6 lg:col-span-1">
                <div className="h-40 rounded-xl bg-zinc-900" />
                <div className="h-80 rounded-xl bg-zinc-900" />
                </div>
            </div>
            </div>
        </div>
        );
    }

    if (errorStatus) {
        return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-zinc-100">
            <div className="flex max-w-md flex-col items-center text-center space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <h3 className="text-lg font-bold">Hydration Exception</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{errorStatus}</p>
            <Link href="/dashboard/my-projects" className="flex items-center gap-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 px-4 py-2 text-xs font-semibold transition-colors">
                <ArrowLeft className="h-3.5 w-3.5" /> Return to Assets
            </Link>
            </div>
        </div>
        );
    }

//     return (
//         <div className="min-h-screen bg-zinc-950 px-4 py-8 text-zinc-100 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-7xl space-y-8">
                
//                 <div className="flex items-center justify-between border-b border-zinc-900 pb-5">
//                 <div>
//                     <Link href="/dashboard/my-projects" className="group flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-2">
//                     <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" /> Back to Workspace
//                     </Link>
//                     <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">Revision Module</h1>
//                     <p className="text-xs text-zinc-500 mt-1">Alter blueprints, specification arrays, and production metrics.</p>
//                 </div>
//                 </div>

//                 <FormProvider {...methods}>
//                 <form onSubmit={methods.handleSubmit(onSubmitForm)} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    
//                     <div className="space-y-8 lg:col-span-2">
//                     <motion.div 
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4 }}
//                         className="space-y-8"
//                     >
//                         <EditProjectInformation />
//                         <EditCategorySelector />
//                         <EditProjectMediaUpload existingCover={initialAssetData?.cover} />
//                         <EditProjectGallery />
//                         <EditProjectDetails />
//                         <EditSoftwareSelector />
//                         <EditTagSelector />
//                     </motion.div>
//                     </div>

//                     <div className="space-y-8 lg:col-span-1">
//                     <div className="sticky top-8 space-y-6">
//                         <EditVisibilitySelector />
//                         <EditPublishActions isSubmitting={submitting} uploadProgress={uploadProgress} />
//                         <EditProjectLivePreview />
//                     </div>
//                     </div>

//                 </form>
//                 </FormProvider>

//             </div>
//         </div>
//   );

    return(
        <ComingSoonPage />
    )
}