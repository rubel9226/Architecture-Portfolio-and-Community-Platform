"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { ProjectCard } from "./ProjectCard";
import { EmptyState } from "./EmptyState";
import { ViewType } from "./ViewToggle";
import { Project } from "@/types/publicProject";

interface ProjectGridProps {
    projects: Project[];
    savedProjects: string[];
    onSaveToggle: (id: string, e: React.MouseEvent) => void;
    onShareClick: (project: Project, e: React.MouseEvent) => void;
    onPreviewClick: (project: Project) => void;
    onClearFilters: () => void;
    layoutView: ViewType;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
    projects,
    savedProjects,
    onSaveToggle,
    onShareClick,
    onPreviewClick,
    onClearFilters,
    layoutView
}) => {
    if (projects.length === 0) {
        return <EmptyState onClear={onClearFilters} />;
    }

    const gridClasses = {
        grid: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
        compact: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4",
        masonry: "grid grid-cols-1 md:grid-cols-2 gap-6"
    };

    return (
        <motion.div 
            layout
            className={gridClasses[layoutView]}
        >
            <AnimatePresence mode="popLayout">
                {projects.map((project, idx) => (
                <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                >
                    <ProjectCard 
                    project={project}
                    onPreviewClick={onPreviewClick}
                    isSaved={savedProjects.includes(project.id)}
                    onSaveToggle={onSaveToggle}
                    onShareClick={onShareClick}
                    layoutView={layoutView}
                    />
                </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};