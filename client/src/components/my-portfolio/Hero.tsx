"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";
import { PortfolioData } from "@/types";


const Hero = ({ userData }: { userData: PortfolioData | null | undefined }) => {
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    // Intro entry animations
    useEffect(() => { 
        const tl = gsap.timeline(); 
        tl.from(contentRef.current, {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: "power4.out"
        })
        .from(imageRef.current, {
            opacity: 0,
            scale: 0.7,
            rotate: 15,
            duration: 1,
            ease: "back.out(1.8)"
        }, "<");
    }, []);

    // Mousemove interactive parallax effect
    useEffect(() => { 
        const image = imageRef.current; 
        const move = (e: MouseEvent) => { 
            const x = (window.innerWidth / 2 - e.clientX) / 40;
            const y = (window.innerHeight / 2 - e.clientY) / 40; 
            gsap.to(image, {
                x: -x,
                y: -y,
                duration: 0.8,
                ease: "power3.out"
            });
        }; 
        window.addEventListener("mousemove", move); 
        return () => window.removeEventListener("mousemove", move); 
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex items-center" id="home">
            <div className="hero-glow top-1/4 left-1/4"></div>
            <div className="hero-glow bottom-1/4 right-1/4"></div>
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                <div ref={contentRef} data-purpose="hero-content">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Hi, I'm
                        <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-red-500 capitalize">
                            {
                                userData?.roles.length === 0 ?
                                userData?.name
                                : 
                                <Typewriter
                                    words={[
                                        userData?.name ?? "",
                                        ...(userData?.roles?? [])
                                        
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={120}
                                    deleteSpeed={70}
                                    delaySpeed={1800}
                                />

                            }
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
                        {userData?.heroDescription}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            className="px-8 py-3 bg-linear-to-r from-blue-500 to-pink-500 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all text-white text-center"
                            href="#projects"
                        >
                            View Projects
                        </a>
                        <a
                            className="px-8 py-3 border border-slate-700 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center gap-2 text-slate-300 hover:text-white"
                            href="#contact"
                        >
                            Let's Collaborate <span>↗</span>
                        </a>
                    </div>
                </div>

                {/* Profile Image & Floating Icons */}
                <div 
                    ref={imageRef}
                    className="relative flex justify-center items-center"
                    data-purpose="hero-image-container"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#01050D] shadow-2xl">
                        <img
                            alt="Rubel Hossen"
                            className="w-full h-full object-cover rounded-full"
                            src={userData?.heroImage}
                        />
                    </div>

                    <div className="absolute inset-0 pointer-events-none">
                        {/* AutoCAD */}
                        <div
                            className="absolute top-8 left-8 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 bg-slate-800/80 backdrop-blur-sm shadow-xl animate-float"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <span className="text-red-400 text-xs font-bold">AutoCAD</span>
                        </div>

                        {/* Revit */}
                        <div
                            className="absolute top-6 right-12 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 bg-slate-800/80 backdrop-blur-sm shadow-xl animate-float"
                            style={{ animationDelay: "1.2s" }}
                        >
                            <span className="text-blue-400 text-xs font-bold">Revit</span>
                        </div>

                        {/* SketchUp */}
                        <div
                            className="absolute bottom-8 left-6 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 bg-slate-800/80 backdrop-blur-sm shadow-xl animate-float"
                            style={{ animationDelay: "0.8s" }}
                        >
                            <span className="text-amber-400 text-xs font-bold">SketchUp</span>
                        </div>

                        {/* Lumion */}
                        <div
                            className="absolute bottom-8 right-8 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 bg-slate-800/80 backdrop-blur-sm shadow-xl animate-float"
                            style={{ animationDelay: "1.5s" }}
                        >
                            <span className="text-green-400 text-xs font-bold">Lumion</span>
                        </div>

                        {/* Rhino */}
                        <div
                            className="absolute top-1/2 left-[-40px] -translate-y-1/2 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 bg-slate-800/80 backdrop-blur-sm shadow-xl animate-float"
                            style={{ animationDelay: "2s" }}
                        >
                            <span className="text-purple-400 text-xs font-bold">Rhino</span>
                        </div>

                        {/* V-Ray */}
                        <div
                            className="absolute top-1/2 right-[-40px] -translate-y-1/2 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 bg-slate-800/80 backdrop-blur-sm shadow-xl animate-float"
                            style={{ animationDelay: "2.5s" }}
                        >
                            <span className="text-orange-400 text-xs font-bold">V-Ray</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;