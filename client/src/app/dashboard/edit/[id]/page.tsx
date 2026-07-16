"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"; 
import { ProjectData } from "@/types/editProject";
import { existingProjectMock } from "@/data/edit project/project";
import { EditProjectHeader } from "@/components/edit project/EditProjectHeader";
import { ProjectForm } from "@/components/edit project/ProjectForm";
import { categoryOptions } from "@/data/edit project/categories";
import { softwareOptions } from "@/data/edit project/software";
import { ProjectPreview } from "@/components/edit project/ProjectPreview";
import { PublishActions } from "@/components/edit project/PublishActions";
import { DeleteProjectModal } from "@/components/edit project/DeleteProjectModal";
import { UnsavedChangesModal } from "@/components/edit project/UnsavedChangesModal";

export default function EditProjectPage({ params }: { params: { id: string } }) {
    const [project, setProject] = useState<ProjectData | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAborting, setIsAborting] = useState(false);
    const [syncing, setSyncing] = useState(false);

    const formMethods = useForm({
        defaultValues: {
        title: "",
        shortDescription: "",
        category: "",
        projectType: "",
        year: 2026,
        location: "",
        university: "",
        clientName: "",
        teamMembers: "",
        status: "concept",
        coverImage: "",
        gallery: [],
        description: {
            overview: "",
            designConcept: "",
            materials: "",
            constructionProcess: "",
            challenges: "",
            solutions: ""
        },
        software: [],
        tags: [],
        visibility: "draft"
        }
    });

    const { reset, watch, handleSubmit, formState: { isDirty } } = formMethods;
    const currentFormValues = watch();

    // Load baseline architectural data into tracking schemas
    useEffect(() => {
        if (existingProjectMock) {
            setProject(existingProjectMock);
            reset(existingProjectMock as any);
        }
    }, [reset]);

    const onSubmitForm = async (data: any) => {
        setSyncing(true);
        // Simulate API transactional pipelines delay
        await new Promise((resolve) => setTimeout(resolve, 1400));
        console.log("Committed state payload:", data);
        setSyncing(false);
        alert("Architectural workspace successfully synced.");
    };

    const handleConfirmDelete = () => {
        setIsDeleting(false);
        alert("Project structure wiped from core environment grids.");
    };

    const handleAbortVerification = () => {
        if (isDirty) {
        setIsAborting(true);
        } else {
        window.location.href = "/dashboard/projects";
        }
    };

    if (!project) {
        return (
        <div className="min-h-screen bg-neutral-950 text-neutral-500 flex flex-col items-center justify-center gap-4">
            <div className="h-6 w-6 border-2 border-t-white border-neutral-800 rounded-full animate-spin" />
            <span className="text-xs font-mono tracking-widest uppercase">Fetching Workspace Variables...</span>
        </div>
        );
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-neutral-800 pb-32">
        <EditProjectHeader projectId={project.id} />

        <form onSubmit={handleSubmit(onSubmitForm)} className="max-w-[2100px] mx-auto px-4 md:px-8 py-10">
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col xl:flex-row gap-8 items-start"
            >
                {/* Central Architectural Registry Form (DRY compliant shared mapping input core) */}
                <div className="flex-1 w-full">
                    <ProjectForm 
                    formMethods={formMethods}
                    categoryOptions={categoryOptions}
                    softwareOptions={softwareOptions}
                    />
                </div>

                {/* Realtime Virtual Canvas Rendering Stack */}
                <ProjectPreview formData={currentFormValues} />
            </motion.div>

            {/* Action controls execution layout matrix */}
            <PublishActions 
            isSubmitting={syncing}
            onDeleteTrigger={() => setIsDeleting(true)}
            onCancelTrigger={handleAbortVerification}
            />
        </form>

        <DeleteProjectModal 
            isOpen={isDeleting}
            onClose={() => setIsDeleting(false)}
            onConfirm={handleConfirmDelete}
        />

        <UnsavedChangesModal 
            isOpen={isAborting}
            onClose={() => setIsAborting(false)}
            onLeave={() => { window.location.href = "/dashboard/projects"; }}
        />
        </main>
    );
}