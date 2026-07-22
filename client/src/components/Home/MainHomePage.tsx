'use client';


import CategoryCard from '@/components/Home/CategoryCard';
import ContributorCard from '@/components/Home/ContributorCard';
import FeatureCard from '@/components/Home/FeatureCard';
import FloatBadge from '@/components/Home/FloatBadge';
import MasonryCard from '@/components/Home/MasonryCard';
import ProjectCard from '@/components/Home/ProjectCard';
import StatCard from '@/components/Home/StatCard';
import Step from '@/components/Home/Step';
import TestimonialCard from '@/components/Home/TextimonialCard';
import { motion } from 'framer-motion';
import { Building2, Award, Compass, Layers, Sparkles, Shield, Users, Landmark, ChevronRight, Mail, HardDrive, DraftingCompass } from 'lucide-react';
import Image from 'next/image';



const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as const
      } 
    }
};

const MainHomePage = ({}) => {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
            
            {/* 2. HERO SECTION */}
            <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Hero Block */}
                    <motion.div 
                    className="lg:col-span-7 space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
                        <Sparkles className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
                        Trusted by Architecture Students Worldwide
                    </motion.div>
                    
                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                        Build Your Architecture Portfolio. <br />
                        <span className="bg-linear-to-r from-blue-600 via-teal-700 to-orange-500 bg-clip-text text-transparent">
                        Showcase Creativity.
                        </span><br />
                        Get Discovered.
                    </motion.h1>
                    
                    <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Create your professional architectural portfolio, upload your best system projects, toggle public or private visibility settings, and inspire students worldwide.
                    </motion.p>
                    
                    <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
                        <button className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-300 shadow-md shadow-blue-600/10 hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
                        Create Portfolio
                        </button>
                        <button className="h-12 px-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
                        Explore Projects
                        </button>
                    </motion.div>
                    </motion.div>

                    {/* Right Hero Frame (Visual Canvas) */}
                    <motion.div 
                    className="lg:col-span-5 relative flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    >
                    <div className="relative w-full max-w-110 aspect-4/5 rounded-2xl overflow-hidden shadow-2xl group border border-white/40">
                        <Image
                        width={440} 
                        height={500}                
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                        alt="Modern Architecture" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
                    </div>

                    {/* Micro-floating badges */}
                    <FloatBadge delay={0} className="top-12 -left-10 bg-white shadow-md rounded-xl p-3 flex items-center gap-2 border border-slate-100">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                        <span className="text-xs font-bold text-slate-800">Residential Design</span>
                    </FloatBadge>

                    <FloatBadge delay={1.5} className="bottom-24 -left-6 bg-white shadow-md rounded-xl p-3 flex items-center gap-2 border border-slate-100">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                        <span className="text-xs font-bold text-slate-800">Landscape Blueprint</span>
                    </FloatBadge>

                    <FloatBadge delay={0.8} className="top-32 -right-8 bg-slate-900 text-white shadow-xl rounded-xl p-3 flex flex-col gap-1">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Stack Tech</span>
                        <span className="text-xs font-bold">Lumion + SketchUp</span>
                    </FloatBadge>

                    <FloatBadge delay={2.2} className="bottom-12 -right-4 bg-white shadow-md rounded-xl p-2.5 px-3 flex items-center gap-2 border border-slate-100">
                        <Building2 className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-slate-800">Commercial Pro</span>
                    </FloatBadge>
                    </motion.div>
                </div>
            </section>

            {/* 3. STATISTICS SECTION */}
            <section className="bg-white border-y border-slate-200/60 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                    >
                    <StatCard number="15,000+" icon={Layers} title="Total Projects Shared" desc="Comprehensive academic and thesis concepts." />
                    <StatCard number="5,200+" icon={Users} title="Active Architects" desc="Students and professionals collaborating daily." />
                    <StatCard number="120+" icon={Landmark} title="Universities" desc="Representing elite global design institutions." />
                    <StatCard number="40+" icon={Compass} title="Countries" desc="An interconnected global design footprint." />
                    </motion.div>
                </div>
            </section>

            {/* 4. FEATURED PROJECTS */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900">Featured Projects</h2>
                <p className="text-slate-500 mt-2 text-sm sm:text-base">Discover outstanding architecture projects curated by our worldwide community.</p>
                </div>
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 mt-4 md:mt-0 group transition-colors">
                See all feature layouts <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
            </div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={staggerContainer}
            >
                <ProjectCard image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" category="Residential" title="The Brutalist Oasis Residence" author="Alexandre M." university="MIT Architecture" likes="1.2k" views="14.5k" />
                <ProjectCard image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" category="Commercial" title="Velo Tower Highrise Concept" author="Sarah Jenkins" university="Harvard GSD" likes="942" views="11.2k" />
                <ProjectCard image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" category="Interior" title="Minimalist Atrium Workspace" author="Chen Wei" university="ETH Zurich" likes="2.1k" views="28.4k" />
                <ProjectCard image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80" category="Landscape" title="Biophilic Urban River Plaza" author="Elena Rostova" university="Delft University" likes="830" views="9.1k" />
                <ProjectCard image="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80" category="Urban Design" title="Ecotone Residential Grid" author="Marcus Thorne" university="AA School" likes="1.5k" views="16.7k" />
                <ProjectCard image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" category="Thesis" title="Subterranean Thermal Pavilion" author="Liam O'Connor" university="Univ. of Melbourne" likes="3.4k" views="42.1k" />
            </motion.div>
            </section>

            {/* 5. BROWSE BY CATEGORIES */}
            <section className="py-20 bg-white border-y border-slate-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-xl mx-auto mb-16">
                <h2 className="text-3xl font-black tracking-tight text-slate-900">Browse by Categories</h2>
                <p className="text-slate-500 mt-2 text-sm">Target individual specializations and conceptual frameworks directly.</p>
                </div>

                <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                >
                <CategoryCard icon={Building2} title="Residential" count="4,210 Projects" />
                <CategoryCard icon={Landmark} title="Commercial" count="2,840 Projects" />
                <CategoryCard icon={Layers} title="Interior" count="3,115 Projects" />
                <CategoryCard icon={Compass} title="Landscape" count="1,490 Projects" />
                <CategoryCard icon={DraftingCompass} title="Urban Design" count="920 Projects" />
                <CategoryCard icon={Award} title="Thesis" count="1,850 Projects" />
                <CategoryCard icon={Sparkles} title="Competition" count="730 Projects" />
                <CategoryCard icon={HardDrive} title="3D Visualization" count="2,960 Projects" />
                </motion.div>
            </div>
            </section>

            {/* 6. WHY CHOOSE ARCHIFOLIO */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-20">
                <h2 className="text-3xl font-black tracking-tight text-slate-900">Why Choose ArchiFolio</h2>
                <p className="text-slate-500 mt-2 text-sm">Engineered with high-fidelity components to fulfill absolute design demands.</p>
            </div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <FeatureCard icon={DraftingCompass} title="Portfolio Builder" desc="Deploy architectural templates ready for publication in minutes." gradient="from-blue-600/10 to-transparent" />
                <FeatureCard icon={Shield} title="Public & Private" desc="Retain full control over visibility permissions for academic reviews." gradient="from-teal-700/10 to-transparent" />
                <FeatureCard icon={Award} title="Professional Profile" desc="Aggregate skills, education indices, and credentials seamlessly." gradient="from-orange-500/10 to-transparent" />
                <FeatureCard icon={Users} title="Global Networking" desc="Build deep structural connections with prospective universal firms." gradient="from-indigo-600/10 to-transparent" />
            </motion.div>
            </section>

            {/* 7. TOP CONTRIBUTORS */}
            <section className="py-20 bg-slate-900 text-white rounded-3xl max-w-7xl mx-auto px-6 lg:px-12 my-12">
            <div className="mb-12">
                <h2 className="text-3xl font-black tracking-tight">Top Contributors</h2>
                <p className="text-slate-400 mt-2 text-sm">Elite designers whose projects are making waves in the community tier.</p>
            </div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <ContributorCard image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" name="Amélie Laurent" university="ETH Zurich" country="Switzerland" projects={24} followers="14.8k" />
                <ContributorCard image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" name="Nikolas Brooten" university="Harvard GSD" country="United States" projects={18} followers="9.2k" />
                <ContributorCard image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" name="Siddharth Nair" university="IIT Roorkee" country="India" projects={31} followers="11.4k" />
                <ContributorCard image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" name="Yuki Tanaka" university="University of Tokyo" country="Japan" projects={15} followers="8.7k" />
            </motion.div>
            </section>

            {/* 8. LATEST PUBLIC PROJECTS */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h2 className="text-3xl font-black tracking-tight text-slate-900">Latest Public Projects</h2>
                <p className="text-slate-500 mt-2 text-sm">Real-time uploads streaming straight from international design boards.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MasonryCard image="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=500&q=80" category="Interior" author="Sofia G." location="Milan, IT" />
                <MasonryCard image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80" category="Commercial" author="David K." location="Berlin, DE" />
                <MasonryCard image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80" category="Residential" author="Lucas P." location="São Paulo, BR" />
                <MasonryCard image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=500&q=80" category="Landscape" author="Mina L." location="Seoul, KR" />
                <MasonryCard image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80" category="Urban" author="Hassan M." location="Cairo, EG" />
                <MasonryCard image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=80" category="Thesis" author="Emma B." location="London, UK" />
                <MasonryCard image="https://images.unsplash.com/photo-1506974210756-8e1b8985d348?auto=format&fit=crop&w=500&q=80" category="Competition" author="Ryan T." location="Sydney, AU" />
                <MasonryCard image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80" category="Residential" author="Chloe W." location="Toronto, CA" />
            </div>
            </section>

            {/* 9. HOW IT WORKS */}
            <section className="py-24 bg-white border-y border-slate-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-xl mx-auto mb-20">
                <h2 className="text-3xl font-black tracking-tight text-slate-900">How It Works</h2>
                <p className="text-slate-500 mt-2 text-sm">Four swift operational layers to establish global architectural authority.</p>
                </div>

                <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block z-0" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    <Step stepNum="01" title="Create Account" desc="Register your profile and choose your design core track." />
                    <Step stepNum="02" title="Build Portfolio" desc="Input work, context layers, structural metadata, and blueprints." />
                    <Step stepNum="03" title="Publish Projects" desc="Broadcast configurations securely to public or targeted ecosystems." />
                    <Step stepNum="04" title="Get Discovered" desc="Expose parameters to elite global talent scouts and partner studios." />
                </div>
                </div>
            </div>
            </section>

            {/* 10. TESTIMONIALS */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
                <h2 className="text-3xl font-black tracking-tight text-slate-900">Endorsed by Pioneers</h2>
                <p className="text-slate-500 mt-2 text-sm">Discover how elite architecture students accelerate their design status.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TestimonialCard avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" name="Clara Mende" role="M.Arch Student" university="TU Delft" rating={5} comment="ArchiFolio changed how I present my thesis completely. The layout structure perfectly preserves raw architectural resolution." />
                <TestimonialCard avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80" name="Jonathan Wu" role="B.Arch Graduate" university="Cornell AAP" rating={5} comment="Two days after deploying my public urban portfolio framework, I received an invite from a Tier-1 firm in London." />
                <TestimonialCard avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" name="Zoe Katsaros" role="Design Researcher" university="AA School" rating={5} comment="The absolute best SaaS tool for architectural project lifecycle hosting. Recommending it across all our academic groups." />
            </div>
            </section>

            {/* 11. TRUSTED UNIVERSITIES */}
            <section className="py-16 bg-slate-50 border-t border-slate-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Empowering Students Across Leading Academic Systems</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale contrast-200">
                <span className="text-lg font-black tracking-tighter text-slate-800">MIT ARCH</span>
                <span className="text-lg font-black tracking-tighter text-slate-800">HARVARD GSD</span>
                <span className="text-lg font-black tracking-tighter text-slate-800">ETH ZURICH</span>
                <span className="text-lg font-black tracking-tighter text-slate-800">AA SCHOOL</span>
                <span className="text-lg font-black tracking-tighter text-slate-800">TU DELFT</span>
                <span className="text-lg font-black tracking-tighter text-slate-800">UNI MELBOURNE</span>
                </div>
            </div>
            </section>

            {/* 12. CALL TO ACTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative bg-linear-to-br from-blue-600 via-blue-700 to-teal-800 rounded-3xl p-12 lg:p-20 overflow-hidden shadow-xl text-center text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.15),transparent)]" />
                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">Ready to Showcase Your Designs?</h2>
                <p className="text-blue-100 text-sm sm:text-base max-w-md mx-auto">
                    Join thousands of architecture students worldwide sharing conceptual blueprints and tracking projects.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <button className="h-12 px-8 rounded-full bg-white text-blue-600 hover:bg-slate-50 font-semibold text-sm transition-all shadow-md hover:scale-105 active:scale-95">
                    Create Portfolio
                    </button>
                    <button className="h-12 px-8 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all hover:scale-105 active:scale-95">
                    Explore Community
                    </button>
                </div>
                </div>
            </div>
            </section>

            {/* 13. NEWSLETTER */}
            <section className="py-20 max-w-md mx-auto px-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mb-4">
                <Mail className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900">Stay Inspired</h3>
            <p className="text-slate-500 text-sm mt-1.5 max-w-xs mx-auto">
                Receive structural inspiration, competition updates, and design reports directly.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex gap-2">
                <input 
                type="email" 
                placeholder="Enter your academic email" 
                required 
                className="flex-1 h-11 px-4 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                />
                <button type="submit" className="h-11 px-6 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-sm font-medium transition-colors">
                Subscribe
                </button>
            </form>
            </section>

        </div>
    );
};

export default MainHomePage;