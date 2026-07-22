"use client";

import React, { useState, useMemo } from "react";

import { SlidersHorizontal } from "lucide-react";
import { PublicProjectsHeader } from "@/components/public-projects/PublicProjectsHeader";
import { FeaturedBanner } from "@/components/public-projects/FeaturedBanner";
import { SearchBar } from "@/components/public-projects/SearchBar";
import { CategoryTabs } from "@/components/public-projects/CategoryTabs";
import { FilterSidebar } from "@/components/public-projects/FilterSidebar";
import { SortDropdown } from "@/components/public-projects/SortDropdown";
import { ViewToggle, ViewType } from "@/components/public-projects/ViewToggle";
import { ProjectGrid } from "@/components/public-projects/ProjectGrid";
import { Pagination } from "@/components/public-projects/Pagination";
import { FilterDrawer } from "@/components/public-projects/FilterDrawer";
import { ProjectQuickPreview } from "@/components/public-projects/ProjectQuickPreview";

import { countries } from "@/data/public project/countries";
import { sortOptions } from "@/data/public project/sortOptions";
import { categories } from "@/data/public project/categories";
import { publicProjects } from "@/data/public project/projects";
import { Project } from "@/types/publicProject";

export default function ExplorePage() {
    // Navigation, search, filter parameters
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedSoftwares, setSelectedSoftwares] = useState<string[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [yearRange, setYearRange] = useState(2026);
    const [sortBy, setSortBy] = useState("newest");
    const [viewType, setViewType] = useState<ViewType>("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
    
    // Modals / Overlays
    const [previewProject, setPreviewProject] = useState<Project | null>(null);
    const [savedProjectIds, setSavedProjectIds] = useState<string[]>([]);

    const suggestions = ["Revit", "Urban Grid", "Biophilic", "Thesis 2026", "Subterranean"];

    // Aggregate softwares dynamically
    const allSoftwares = useMemo(() => {
        const list = new Set<string>();
        publicProjects.forEach((proj) => proj.software.forEach((soft) => list.add(soft)));
        return Array.from(list);
    }, []);

    // Filtered dataset mapping
    const filteredProjects = useMemo(() => {
        return publicProjects.filter((project) => {
        const matchSearch = 
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.software.some((soft) => soft.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchCategory = activeCategory === "all" || project.category === activeCategory;
        const matchSoftware = selectedSoftwares.length === 0 || selectedSoftwares.every((soft) => project.software.includes(soft));
        const matchCountry = selectedCountries.length === 0 || selectedCountries.includes(project.country);
        const matchYear = project.year <= yearRange;

        return matchSearch && matchCategory && matchSoftware && matchCountry && matchYear;
        }).sort((a, b) => {
        if (sortBy === "newest") return b.year - a.year;
        if (sortBy === "views") return b.views - a.views;
        if (sortBy === "likes") return b.likes - a.likes;
        if (sortBy === "bookmarks") return b.bookmarks - a.bookmarks;
        if (sortBy === "az") return a.title.localeCompare(b.title);
        if (sortBy === "za") return b.title.localeCompare(a.title);
        return 0;
        });
    }, [searchTerm, activeCategory, selectedSoftwares, selectedCountries, yearRange, sortBy]);

    // Featured of the Week reference object
    const featuredOfTheWeek = useMemo(() => {
        return publicProjects.find((proj) => proj.isFeaturedOfTheWeek) || publicProjects[0];
    }, []);

    // Action methods
    const handleSaveToggle = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setSavedProjectIds((prev) => 
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleShareClick = (project: Project, e: React.MouseEvent) => {
        e.stopPropagation();
        if (navigator.share) {
        navigator.share({
            title: project.title,
            text: project.description,
            url: window.location.href
        }).catch(() => {});
        } else {
        navigator.clipboard.writeText(`${window.location.origin}/project/${project.id}`);
        alert("Project link copied to clipboard!");
        }
    };

    const handleClearFilters = () => {
        setSearchTerm("");
        setActiveCategory("all");
        setSelectedSoftwares([]);
        setSelectedCountries([]);
        setYearRange(2026);
    };

    return (
        <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-neutral-800 selection:text-white pb-20">
            <PublicProjectsHeader    totalCount={filteredProjects.length} />
            
            <FeaturedBanner 
                featuredProject={featuredOfTheWeek} 
                onExplore={() => setPreviewProject(featuredOfTheWeek)} 
            />

            <SearchBar 
                value={searchTerm}
                onChange={setSearchTerm}
                suggestions={suggestions}
                onSelectSuggestion={setSearchTerm}
            />

            <CategoryTabs 
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />
            {/* max-w-[1400px] */}
            <div className="max-w-[2100px] mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8">
                {/* Desktop Sidebar */}
                <div className="hidden lg:block">
                <FilterSidebar 
                    selectedSoftwares={selectedSoftwares}
                    onToggleSoftware={(soft) => setSelectedSoftwares((prev) => prev.includes(soft) ? prev.filter((s) => s !== soft) : [...prev, soft])}
                    selectedCountries={selectedCountries}
                    onToggleCountry={(country) => setSelectedCountries((prev) => prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country])}
                    yearRange={yearRange}
                    onYearRangeChange={setYearRange}
                    allSoftwares={allSoftwares}
                    countries={countries}
                />
                </div>

                {/* Dynamic workspace context */}
                <div className="flex-1 space-y-6">
                <div className="flex items-center justify-between gap-4">
                    <button
                    onClick={() => setIsMobileDrawerOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                    <SlidersHorizontal size={14} /> Filters
                    </button>

                    <div className="flex items-center gap-3 ml-auto">
                    <SortDropdown 
                        options={sortOptions}
                        selectedOption={sortBy}
                        onSelectOption={setSortBy}
                    />
                    <ViewToggle 
                        currentView={viewType}
                        onChangeView={setViewType}
                    />
                    </div>
                </div>

                <ProjectGrid 
                    projects={filteredProjects}
                    savedProjects={savedProjectIds}
                    onSaveToggle={handleSaveToggle}
                    onShareClick={handleShareClick}
                    onPreviewClick={setPreviewProject}
                    onClearFilters={handleClearFilters}
                    layoutView={viewType}
                />

                {filteredProjects.length > 0 && (
                    <Pagination 
                    currentPage={currentPage}
                    totalPages={3}
                    onPageChange={setCurrentPage}
                    />
                )}
                </div>
            </div>

            <FilterDrawer 
                isOpen={isMobileDrawerOpen}
                onClose={() => setIsMobileDrawerOpen(false)}
                selectedSoftwares={selectedSoftwares}
                onToggleSoftware={(soft) => setSelectedSoftwares((prev) => prev.includes(soft) ? prev.filter((s) => s !== soft) : [...prev, soft])}
                selectedCountries={selectedCountries}
                onToggleCountry={(country) => setSelectedCountries((prev) => prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country])}
                yearRange={yearRange}
                onYearRangeChange={setYearRange}
                allSoftwares={allSoftwares}
                countries={countries}
            />

            <ProjectQuickPreview 
                project={previewProject}
                onClose={() => setPreviewProject(null)}
            />
        </main>
    );
}