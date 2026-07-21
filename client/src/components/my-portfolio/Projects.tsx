import React from 'react';
import SectionActions from './SectionActions';

const Projects = () => {
    return (
        <section className="py-24 px-6" id="projects">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Here are some of the real-world projects I've built using the MERN stack and frontend frameworks.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <div className="glass-card rounded-3xl overflow-hidden group">
                    <div className="aspect-video overflow-hidden">
                        <img
                            alt="Product Craft (Assignment 10)"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            src="/image/life-lessons.png"
                        />
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3 text-slate-100 font-sans">Product Craft (Assignment 10)</h3>
                        <p className="text-slate-400 mb-6 font-medium">
                            A full-stack interactive project hub featuring secure user authentication, responsive design layouts, dynamic list views, and streamlined data mutations.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Better Auth"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-slate-800/80 border border-white/5 rounded-md text-xs font-semibold text-slate-350"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a
                                className="flex-1 text-center py-3 bg-gradient-to-r from-red-600 to-red-400 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity"
                                href="#"
                            >
                                GitHub ↗
                            </a>
                            <a
                                className="flex-1 text-center py-3 bg-gradient-to-r from-accent-blue to-accent-blue/80 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity"
                                href="https://assignment-10-woad.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="glass-card rounded-3xl overflow-hidden group">
                    <div className="aspect-video overflow-hidden">
                        <img
                            alt="Thrivon Fashion Storefront"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            src="/image/thrivon-fashion.png"
                        />
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3 text-slate-100 font-sans">Thrivon Fashion (E-commerce)</h3>
                        <p className="text-slate-400 mb-6 font-medium">
                            A premium, high-performance fashion web application featuring curated seasonal catalogs, filterable categories, shopping cart states, and seamless user flows.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JavaScript"].map((tech) => (
                                <span
                                key={tech}
                                className="px-3 py-1 bg-slate-800/80 border border-white/5 rounded-md text-xs font-semibold text-slate-350"
                                >
                                {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a
                                className="flex-1 text-center py-3 bg-gradient-to-r from-red-600 to-red-400 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity"
                                href="#"
                            >
                                GitHub ↗
                            </a>
                            <a
                                className="flex-1 text-center py-3 bg-gradient-to-r from-accent-blue to-accent-blue/80 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity"
                                href="https://thrivon-fashion.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <SectionActions
                section="projects"
            />
        </section>
    );
};

export default Projects;