import React, { useState } from 'react';
import SectionActions from './SectionActions';
import Link from 'next/link';
import { Pen, Plus, Trash2 } from 'lucide-react';

const About = ({userData}) => {
    const [open, setOpen] = useState(false);
    return ( 
        <section 
            className="py-24 px-6 bg-slate-900/30" 
            id="about"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        alt="Professional Portrait"
                        className="w-full h-[500px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                        src={userData?.aboutImage}
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                        {userData?.aboutDescription}
                    </div>
                    <div className="mt-10">
                        <Link 
                            target='_blank' 
                            href={userData?.resume}
                            className="px-8 py-3 bg-linear-to-r bg-blue-500 to-pink-500 rounded-lg font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity text-white"
                            // className="px-8 py-3 bg-linear-to-r from-accent-blue to-accent-pink rounded-lg font-bold inline-flex items-center gap-2 hover:opacity-90 text-white transition-opacity"
                        >
                            View Resume <span className="text-lg">📥</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;