// components/projects/ProjectCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Eye,
    Heart,
    Bookmark,
    Trash2,
    Copy,
    Pin,
    Archive,
    MoreVertical,
    Globe,
    Lock,
    EyeOff
} from 'lucide-react';

import { fadeUpMyProject } from '@/utils/animations';
import { DashboardViewMode, Project } from '@/types/myProject';
import { useProjects } from '@/hooks/MyProjectsContext';
import Link from 'next/link';
import api from '@/lib/api';
import { useUser } from '@/hooks/AuthContext';
import { useRouter } from 'next/navigation';


export default function ProjectCard({ project, layoutMode }: { project: Project; layoutMode: DashboardViewMode; }) {
    const { selectedIds, toggleSelectProject, pinProject, duplicateProject, archiveProject, setDeleteId, togglePortfolioProject } = useProjects();
    const {token} = useUser();
    const router = useRouter();
    console.log(project?.isPortfolio, 'project');

    const [menuOpen, setMenuOpen] = useState(false);

    const isChecked = selectedIds.includes(project._id);

    const visibilityStyles = {
        PUBLIC:
            'bg-blue-500/10 text-blue-400 border-blue-500/20',

        PRIVATE:
            'bg-slate-700/40 text-slate-300 border-slate-600',

        DRAFT:
            'bg-orange-500/10 text-orange-400 border-orange-500/20'
    };
    const visibilityIcons = {
        PUBLIC: Globe,
        PRIVATE: Lock,
        DRAFT: EyeOff
    };
    const VIcon = visibilityIcons[project.visibility];

    const handlePortfolioProject = async (id) => {
        try{
            const res = await api.put(`/project/portfolio/${id}`,{}, {
                headers: {
                    Authorization: token
                }
            });
            togglePortfolioProject(id)
        }catch(error){
            console.log(error);
        }
    }
    
    const handlePortfolioProjectDelete = async (id) => {
        try{
            const res = await api.put(`/project/portfolio-delete/${id}`,{}, {
                headers: {
                    Authorization: token
                }
            });
            togglePortfolioProject(id)
        }catch(error){
            console.log(error);
        }
    }

    return (
        <motion.div
            variants={fadeUpMyProject}
            layout
            whileHover={
                layoutMode === 'grid'
                    ? { y: -4 }
                    : {}
            }
            className={` bg-slate-900  border  rounded-2xl  relative  group  overflow-hidden  shadow-lg  transition-all
                ${ isChecked
                    ? 'border-blue-500 ring-1 ring-blue-500/30'
                    : 'border-slate-700 hover:border-slate-500' }
                ${ layoutMode === 'list'
                    ? 'flex flex-col sm:flex-row gap-4 p-4'
                    : '' }
            `}
        >
            {/* Checkbox + Pin
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                        toggleSelectProject(project.id)
                    } 
                    className=" w-3.5 h-3.5 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500 cursor-pointer "
                />

                {
                    project.isPinned && (
                        <span className=" p-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-md " >
                            <Pin
                                size={10}
                                className="fill-amber-400"
                            />
                        </span>
                    )
                }
            </div> */}

            {/* Image */}
            <div className={` relative  bg-slate-800  overflow-hidden
                ${
                    layoutMode === 'grid'
                    ? 'aspect-video w-full'
                    : 'w-full sm:w-48 aspect-video sm:aspect-square rounded-xl'
                }
                `}
            >
                <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill 
                    className=" object-cover group-hover:scale-105 transition-transform duration-500 "
                />
                <div className=" absolute  inset-0  bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity " />

            </div>

            {/* Content */}
            <div
                className={` p-4 flex-1 flex flex-col justify-between space-y-3
                ${
                    layoutMode === 'list'
                    ? 'p-0'
                    : ''
                }
                `}
            >
                <div className="space-y-2">
                    <div className=" flex  items-center  justify-between  gap-2 ">
                        <span className=" text-[10px] font-bold text-slate-400 uppercase tracking-wider " >
                            {project.category}
                        </span>
                        <span className={` inline-flex items-center gap-1 px-2 py-0.5 border text-[9px] font-bold rounded
                            ${visibilityStyles[project.visibility]}
                            `}
                        >
                            <VIcon size={9}/>
                            {project.visibility}
                        </span>
                    </div>

                    <h3 className=" text-sm font-bold text-white tracking-tight line-clamp-1 group-hover:text-blue-400 transition-colors " >
                        {project.title}
                    </h3> 
                    <p className=" text-xs text-slate-400 leading-relaxed line-clamp-2 " >
                        {project.description}
                    </p>
                </div>

                {/* Software */}
                <div className=" flex flex-wrap gap-1 ">
                    {
                        project?.softwareUsed.map(
                            (sw,idx)=>(
                                <span
                                    key={idx}
                                    className=" text-[9px] font-medium bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded "
                                >
                                    {sw}
                                </span>
                            )
                        )
                    }
                </div>

                {/* Action Buttons */}
                <div className=" flex  gap-2 pt-2 ">
                    <Link
                        href={`/projects/${project._id}`}
                        className=" flex-1 text-center text-[11px] font-semibold px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all "
                    >
                        View Details
                    </Link>
                    <Link
                        href={`/dashboard/edit/${project._id}`}
                        className=" flex-1 text-center text-[11px] font-semibold px-3 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all "
                    >
                        Edit Project
                    </Link>
                </div>

                {/* Metrics */}
                {/* <div className=" flex items-center justify-between border-t border-slate-800 pt-3 text-[10px] text-slate-400 " >
                    <div className=" flex items-center gap-3 ">

                        <span className="flex items-center gap-1">
                            <Eye size={11}/>
                            {project.views}
                        </span>

                        <span className="flex items-center gap-1">
                            <Heart size={11}/>
                            {project.likes}
                        </span>

                        <span className="flex items-center gap-1">
                            <Bookmark size={11}/>
                            {project.bookmarks}
                        </span>

                    </div>
                    <span className="text-[9px]">
                        {project.createdAt}
                    </span>
                </div> */}
            </div>

            {/* Dropdown */}
            <div className="absolute top-2 right-2 z-20">
                <button
                    onClick={() => setMenuOpen(!menuOpen) }
                    className=" cursor-pointer p-1.5 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-lg text-slate-300 hover:text-white "
                >
                    <MoreVertical size={13}/>
                </button> 
                {menuOpen && ( 
                    <> 
                        <div className="fixed inset-0 z-10 cursor-pointer" onClick={() => setMenuOpen(false) } />

                        <div className=" absolute right-0 mt-2 w-40 bg-slate-900 border border-slate-700 rounded-xl shadow-xl p-1 z-20 text-xs text-slate-300 " >
                            <button
                                onClick={()=>{
                                    handlePortfolioProject(project._id);
                                    setMenuOpen(false);
                                }} 
                                className=" w-full flex items-center gap-2 px-3 py-2 hover:bg-slate-800 rounded-lg "
                            >
                                <Archive size={12}/>
                                {
                                    project?.isPortfolio ? 'Remove Portfolio' : 'Add Portfolio'
                                }
                                
                            </button>

                            <div className=" border-t border-slate-800 my-1 "/>

                            <button
                                onClick={()=>{
                                    handlePortfolioProjectDelete(project._id);
                                    setMenuOpen(false);
                                }} className=" w-full flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg "
                            >
                                <Trash2 size={12}/>
                                Delete
                            </button>
                        </div>
                    </>
                )}
            </div>

        </motion.div>
    );
}