import React, { useState } from 'react';
import SectionActions from './SectionActions';
import Link from 'next/link';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Project, User } from '@/types';

const Projects = ({ projects, user, token, id }: { projects: Project[], user: User | null | undefined; token: string | null | undefined; id:string }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const deleteProject = async (id?: string) => {
        if (!id) return;
        setLoading(true);
        try {
            await api.put(`/project/portfolio/${id}`,{}, {
                headers: {
                    Authorization: token
                }
            });
            router.refresh();
        } catch(error) { 
            console.log(error);
        }finally{
            setLoading(false)
        }
    };
    return (
        <section className="py-24 px-6" id="projects">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Here are some of the real-world projects I've built using the MERN stack and frontend frameworks.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                {
                    projects.map((project, index) => ( 
                        <div key={index} className="glass-card rounded-3xl overflow-hidden group">
                            <div className="aspect-video overflow-hidden">
                                <Image 
                                    width={200}
                                    height={200}
                                    alt={project?.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    src={project?.coverImage}
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-slate-100 font-sans">Product Craft (Assignment 10)</h3>
                                <p className="text-slate-400 mb-6 font-medium line-clamp-3 truncate">
                                    {project?.overview}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project?.softwareUsed.map((software) => (
                                        <span
                                            key={software}
                                            className="px-3 py-1 bg-slate-800/80 border border-white/5 rounded-md text-xs font-semibold text-slate-350"
                                        >
                                            {software}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <Link
                                        href="/projects/6a5b22e2c76184b87e9e8ae0"
                                        className="cursor-pointer flex-1 text-center py-3 bg-linear-to-r  from-blue-500 to-blue-500/80 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity"
                                    >
                                        View details ↗
                                    </Link>
                                    {
                                        id === user?.id &&
                                        <button
                                            onClick={() => deleteProject(project?._id)}
                                            className="flex-1 text-center py-3 bg-linear-to-r from-red-600 to-red-400 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity"
                                        >
                                            {loading ? 'Deleting...' : 'Delete Portfolio'}
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
                {
                        id === user?.id &&
                    <div className='text-center'>
                        <Link href={'/dashboard/my-projects'} className="cursor-pointer flex-1 text-center py-3 bg-blue-600 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity px-3">
                            Add More Projects
                        </Link>
                    </div>
                }
        </section>
    );
};

export default Projects;