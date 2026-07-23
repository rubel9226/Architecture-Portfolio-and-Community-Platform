// context/ProjectsContext.tsx
'use client';
import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { DashboardViewMode, Project } from '@/types/myProject'; 
import { useUser } from "@/hooks/AuthContext";
import api from '@/lib/api';
import { ProjectVisibility } from '@/types';


interface ToastState {
    show: boolean;
    message: string;
    type: 'success' | 'error';
}

interface ProjectsContextType {
    projects: Project[];
    viewMode: DashboardViewMode;
    setViewMode: (mode: DashboardViewMode) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    visibilityFilter: string;
    setVisibilityFilter: (filter: string) => void;
    categoryFilter: string;
    setCategoryFilter: (filter: string) => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
    selectedIds: string[];
    toggleSelectProject: (id: string) => void;
    toggleSelectAll: () => void;
    clearSelection: () => void;
    pinProject: (id: string) => void;
    duplicateProject: (id: string) => void;
    archiveProject: (id: string) => void;
    bulkDelete: () => void;
    bulkChangeVisibility: (visibility: ProjectVisibility) => void;
    deleteId: string | null;
    setDeleteId: (id: string | null) => void;
    executeDelete: () => void;
    toast: ToastState;
    triggerToast: (message: string, type: 'success' | 'error') => void;
    dismissToast: () => void;
    togglePortfolioProject: (id: string) => void;
    deleteProject: (id: string) => void;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
    const data = useUser();
    const mockProjects = data?.projects;

    const token = data?.token;

    console.log(mockProjects, 'mok data');


    const [projects, setProjects] = useState<Project[]>([]);
    const [viewMode, setViewMode] = useState<DashboardViewMode>('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [visibilityFilter, setVisibilityFilter] = useState('ALL');
    const [categoryFilter, setCategoryFilter] = useState('ALL_CAT');
    const [sortBy, setSortBy] = useState('newest');
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

    useEffect(() => {
    if(mockProjects){
        setProjects(mockProjects);
    }
}, [mockProjects]);

    const triggerToast = (message: string, type: 'success' | 'error') => {
        setToast({ show: true, message, type });
    };

    const dismissToast = () => setToast(prev => ({ ...prev, show: false }));

    const toggleSelectProject = (id: string) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const filteredProjects = useMemo(() => {
        return projects.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                p.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesVisibility = visibilityFilter === 'ALL' || 
                                    (visibilityFilter === 'ARCHIVED' ? p.isArchived : p.visibility === visibilityFilter && !p.isArchived);
        const matchesCategory = categoryFilter === 'ALL_CAT' || p.category === categoryFilter;
        return matchesSearch && matchesVisibility && matchesCategory;
        });
    }, [projects, searchQuery, visibilityFilter, categoryFilter]);

    const toggleSelectAll = () => {
        if (selectedIds.length === filteredProjects.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredProjects.map(p => p._id));
        }
    };

    const clearSelection = () => setSelectedIds([]);

    const pinProject = (id: string) => {
        setProjects(prev => prev.map(p => p._id === id ? { ...p, isPinned: !p.isPinned } : p));
        triggerToast('Project architectural pinning state modified.', 'success');
    };

    const duplicateProject = (id: string) => {
        const target = projects.find(p => p._id === id);
        if (target) {
        const duplicate: Project = {
            ...target,
            id: `arch-dup-${Date.now()}`,
            title: `${target.title} (Copy)`,
            createdAt: new Date().toISOString().split('T')[0],
            isPinned: false
        };
        setProjects(prev => [duplicate, ...prev]);
        triggerToast('Project topology tree duplicated successfully.', 'success');
        }
    };

    const archiveProject = (id: string) => {
        setProjects(prev => prev.map(p => p._id === id ? { ...p, isArchived: !p.isArchived } : p));
        triggerToast('Project moved to archival registry index.', 'success');
    };

    const executeDelete = () => {
        if (deleteId) {
        setProjects(prev => prev.filter(p => p._id !== deleteId));
        setSelectedIds(prev => prev.filter(x => x !== deleteId));
        setDeleteId(null);
        triggerToast('Architectural project deleted permanently.', 'success');
        }
    };

    const bulkDelete = () => {
        setProjects(prev => prev.filter(p => !selectedIds.includes(p._id)));
        setSelectedIds([]);
        triggerToast('Selected project collection cleared from index.', 'success');
    };

    const bulkChangeVisibility = (visibility: ProjectVisibility) => {
        setProjects(prev => prev.map(p => selectedIds.includes(p._id) ? { ...p, visibility } : p));
        setSelectedIds([]);
        triggerToast(`Bulk items modified to target access tier: ${visibility}`, 'success');
    };

    const togglePortfolioProject = (id?:string) => {
        setProjects(prev =>
            prev.map(project =>
                project._id === id
                ? {
                    ...project,
                    isPortfolio: !project.isPortfolio
                }
                : project
            )
        );

        triggerToast(
            'Portfolio status updated successfully.',
            'success'
        );
    };

    const deleteProject = async (id?: string) => {
        if (!id) return;
        try {
            await api.delete(`/project/delete/${id}`, {
                headers: {
                    Authorization: token
                }
            });

            setProjects(prev => prev.filter(project => project._id !== id));

            setSelectedIds(prev => prev.filter(projectId => projectId !== id));

            triggerToast( 'Project deleted successfully.', 'success');
        } catch(error: any) { 
            console.log(error); 
            triggerToast( error?.response?.data?.message, 'error' );
        }
    };

    return (
        <ProjectsContext.Provider value={{
            projects: filteredProjects, viewMode, setViewMode, searchQuery, setSearchQuery,
            visibilityFilter, setVisibilityFilter, categoryFilter, setCategoryFilter, sortBy, setSortBy,
            selectedIds, toggleSelectProject, toggleSelectAll, clearSelection, pinProject, duplicateProject,
            archiveProject, bulkDelete, bulkChangeVisibility, deleteId, setDeleteId, executeDelete,
            toast, triggerToast, dismissToast, togglePortfolioProject, deleteProject
        }}>
            {children}
        </ProjectsContext.Provider>
    );
}

export function useProjects() {
    const context = useContext(ProjectsContext);
    if (!context) throw new Error('useProjects must be inside ProjectsProvider');
    return context;
}