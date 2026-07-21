"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap"; 
import Navbar from './../../../../components/public-portfolio/Navbar';
import Hero from './../../../../components/public-portfolio/Hero';
import About from './../../../../components/public-portfolio/About';
import Skills from './../../../../components/public-portfolio/Skills';
import Services from './../../../../components/public-portfolio/Services';
import Projects from './../../../../components/public-portfolio/Projects';
// import Testimonials from './../../../../components/public-portfolio/Testimonials';
import Contact from './../../../../components/public-portfolio/Contact';
import Footer from './../../../../components/public-portfolio/Footer';


export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isLoading, setIsLoading] = useState(true);
    const mainScopeRef = useRef(null);


    // Initial Preloader Simulator
    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 2200);
      return () => clearTimeout(timer);
    }, []);

    // Global Page Level Scroll Spy Observer
    useEffect(() => {
      if (isLoading) return;  
    
      const sections = document.querySelectorAll("section[id]");
      const observerOptions = {
        root: null,
            rootMargin: "-30% 0px -55% 0px",
            threshold: 0,
          };  

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          }, observerOptions);  

          sections.forEach((section) => observer.observe(section));  

          return () => {
            sections.forEach((section) => observer.unobserve(section));
          };
        }, [isLoading]);

        // GSAP ScrollTrigger Global Initialization/Scoping
        useEffect(() => {
          if (isLoading) return;  

          let ctx = gsap.context(() => {
            // Automatic global text split masking for sections revealing as they arrive
            const scrollRevealElements = document.querySelectorAll("[data-scroll-reveal]");
            scrollRevealElements.forEach((el) => {
              gsap.fromTo(el,
                { opacity: 0, y: 50, filter: "blur(10px)" },
                {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  duration: 1,
                  ease: "power4.out",
                  scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  }
                }
              );
            });
          }, mainScopeRef);  

          return () => ctx.revert();
        }, [isLoading]);



    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ 
                            y: "-100%", 
                            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
                        }}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050811]"
                    >
                    {/* Change this specific block in app/page.jsx */}
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
                            className="text-2xl font-bold tracking-widest text-white uppercase"
                        >
                            Rubel Hossen
                        </motion.h1>
                    </div>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-[2px] bg-gradient-to-r from-blue-500 to-pink-500 mt-4"
                    />
                    </motion.div>
                )}
            </AnimatePresence>
          
            <div ref={mainScopeRef} className="min-h-screen text-slate-100 bg-[#0a0f1a] selection:bg-blue-500/30 overflow-x-hidden relative">
                {/* Cinematic Background Ambient Blurs */}
                <div className="absolute top-0 left-1/4 w-125 h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
            
                <Navbar 
                    activeSection={activeSection} 
                    mobileMenuOpen={mobileMenuOpen} 
                    setMobileMenuOpen={setMobileMenuOpen} 
                />  

                <main>
                    <Hero /> 
                    <div data-scroll-reveal>
                        <About />
                    </div>
                    
                    <div data-scroll-reveal>
                        <Skills />
                    </div>
                    
                    <div data-scroll-reveal>
                        <Services />
                    </div>
                    
                    <div data-scroll-reveal>
                        <Projects />
                    </div>
                    
                    {/* <div data-scroll-reveal>
                        <Testimonials />
                    </div> */}
                    
                    <div data-scroll-reveal>
                        <Contact />
                    </div>                    
                </main> 
                <Footer /> 
            </div>
        </>
    );
}