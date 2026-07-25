"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useUser } from "@/hooks/AuthContext";
import { DashboardViewMode, Project, ProjectVisibility, } from "@/types";

interface ToastState {
    show: boolean;
    message: string;
    type: "success" | "error";
}

interface ProjectsContextType {
    projects: Project[];
    allProjects: Project[];

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

    executeDelete: () => void;

    bulkDelete: () => void;

    bulkChangeVisibility: (
        visibility: ProjectVisibility
    ) => void;

    deleteId: string | null;
    setDeleteId: React.Dispatch<React.SetStateAction<string | null>>;

    toast: ToastState;

    triggerToast: (
        message: string,
        type: "success" | "error"
    ) => void;

    dismissToast: () => void;
}

const ProjectsContext = createContext<ProjectsContextType | null>(null);

export function ProjectsProvider({ children, }: { children: React.ReactNode; }) {
    const { projects: userProjects = [] } = useUser();

    const [projects, setProjects] =
        useState<Project[]>(userProjects);

    useEffect(() => {
        setProjects(userProjects);
    }, [userProjects]);

    const [viewMode, setViewMode] =
        useState<DashboardViewMode>("grid");

    const [searchQuery, setSearchQuery] =
        useState("");

    const [visibilityFilter, setVisibilityFilter] =
        useState("ALL");

    const [categoryFilter, setCategoryFilter] =
        useState("ALL");

    const [sortBy, setSortBy] =
        useState("newest");

    const [selectedIds, setSelectedIds] =
        useState<string[]>([]);

    const [deleteId, setDeleteId] =
        useState<string | null>(null);

    const [toast, setToast] =
        useState<ToastState>({ show: false, message: "", type: "success", });

        const triggerToast = ( message: string, type: "success" | "error" ) => {
            setToast({ show: true, message, type, });
        };

    const dismissToast = () => {
        setToast((prev) => ({
        ...prev,
        show: false,
        }));
    };

    const filteredProjects = useMemo(() => {
        let data = [...projects];

        if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();

        data = data.filter(
            (project) =>
            project.title
                .toLowerCase()
                .includes(q) ||
            project.overview
                .toLowerCase()
                .includes(q)
        );
        }

        if (visibilityFilter !== "ALL") {
        data = data.filter(
            (project) =>
            project.visibility ===
            visibilityFilter.toLowerCase()
        );
        }

        if (categoryFilter !== "ALL") {
        data = data.filter(
            (project) =>
            project.category ===
            categoryFilter.toLowerCase()
        );
        }

        switch (sortBy) {
        case "oldest":
            data.sort(
            (a, b) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
            );
            break;

        case "title":
            data.sort((a, b) =>
            a.title.localeCompare(b.title)
            );
            break;

        default:
            data.sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            );
        }

        return data;
    }, [
        projects,
        searchQuery,
        visibilityFilter,
        categoryFilter,
        sortBy,
    ]);

    const toggleSelectProject = ( id: string ) => {
        setSelectedIds((prev) =>
        prev.includes(id)
            ? prev.filter((item) => item !== id)
            : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if ( selectedIds.length === filteredProjects.length ) {
        setSelectedIds([]);
        return;
        }

        setSelectedIds( filteredProjects.map( (project) => project._id ) );
    };

  const clearSelection = () => { setSelectedIds([]); };

    const executeDelete = () => {
    if (!deleteId) return;

    setProjects((prev) =>
      prev.filter(
        (project) => project._id !== deleteId
      )
    );

    setSelectedIds((prev) =>
      prev.filter(
        (id) => id !== deleteId
      )
    );

    setDeleteId(null);

    triggerToast(
      "Project deleted successfully.",
      "success"
    );
  };

  const bulkDelete = () => {
    if (!selectedIds.length) {
      triggerToast(
        "No project selected.",
        "error"
      );
      return;
    }

    setProjects((prev) =>
      prev.filter(
        (project) =>
          !selectedIds.includes(project._id)
      )
    );

    setSelectedIds([]);

    triggerToast(
      "Selected projects deleted successfully.",
      "success"
    );
  };


  const bulkChangeVisibility = (
    visibility: ProjectVisibility
  ) => {

    if (!selectedIds.length) {
      triggerToast(
        "No project selected.",
        "error"
      );
      return;
    }

    setProjects((prev) =>
        prev.map((project) => selectedIds.includes(project._id) ? { ...project, visibility, } : project )
    );

    setSelectedIds([]);

    triggerToast( `Projects changed to ${visibility}.`, "success" );
};



  return (
    <ProjectsContext.Provider
      value={{
        projects: filteredProjects,
        allProjects: projects,

        viewMode,
        setViewMode,

        searchQuery,
        setSearchQuery,

        visibilityFilter,
        setVisibilityFilter,

        categoryFilter,
        setCategoryFilter,

        sortBy,
        setSortBy,

        selectedIds,

        toggleSelectProject,
        toggleSelectAll,
        clearSelection,

        deleteId,
        setDeleteId,

        toast,

        triggerToast,
        dismissToast,

        // Part-2
        executeDelete,
        bulkDelete,
        bulkChangeVisibility,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}



export function useProjects() {
    const context = useContext(ProjectsContext);

    if (!context) {
        throw new Error(
        "useProjects must be used inside ProjectsProvider"
        );
    }

  return context;
}   