// context/ProjectsContext.tsx
'use client';
import React, { createContext, useContext, useState, useMemo } from 'react';
import { DashboardViewMode, ProjectVisibility, Project } from '@/types/myProject'; 
import { mockProjects } from '@/data/my project/projects';

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
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
    const [projects, setProjects] = useState<Project[]>(mockProjects);
    const [viewMode, setViewMode] = useState<DashboardViewMode>('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [visibilityFilter, setVisibilityFilter] = useState('ALL');
    const [categoryFilter, setCategoryFilter] = useState('ALL_CAT');
    const [sortBy, setSortBy] = useState('newest');
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

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
        setSelectedIds(filteredProjects.map(p => p.id));
        }
    };

    const clearSelection = () => setSelectedIds([]);

    const pinProject = (id: string) => {
        setProjects(prev => prev.map(p => p.id === id ? { ...p, isPinned: !p.isPinned } : p));
        triggerToast('Project architectural pinning state modified.', 'success');
    };

    const duplicateProject = (id: string) => {
        const target = projects.find(p => p.id === id);
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
        setProjects(prev => prev.map(p => p.id === id ? { ...p, isArchived: !p.isArchived } : p));
        triggerToast('Project moved to archival registry index.', 'success');
    };

    const executeDelete = () => {
        if (deleteId) {
        setProjects(prev => prev.filter(p => p.id !== deleteId));
        setSelectedIds(prev => prev.filter(x => x !== deleteId));
        setDeleteId(null);
        triggerToast('Architectural project deleted permanently.', 'success');
        }
    };

    const bulkDelete = () => {
        setProjects(prev => prev.filter(p => !selectedIds.includes(p.id)));
        setSelectedIds([]);
        triggerToast('Selected project collection cleared from index.', 'success');
    };

    const bulkChangeVisibility = (visibility: ProjectVisibility) => {
        setProjects(prev => prev.map(p => selectedIds.includes(p.id) ? { ...p, visibility } : p));
        setSelectedIds([]);
        triggerToast(`Bulk items modified to target access tier: ${visibility}`, 'success');
    };

    return (
        <ProjectsContext.Provider value={{
        projects: filteredProjects, viewMode, setViewMode, searchQuery, setSearchQuery,
        visibilityFilter, setVisibilityFilter, categoryFilter, setCategoryFilter, sortBy, setSortBy,
        selectedIds, toggleSelectProject, toggleSelectAll, clearSelection, pinProject, duplicateProject,
        archiveProject, bulkDelete, bulkChangeVisibility, deleteId, setDeleteId, executeDelete,
        toast, triggerToast, dismissToast
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