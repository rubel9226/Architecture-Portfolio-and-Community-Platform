"use client";

import { useEffect, useState, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, X, FileText, User, Image as ImageIcon, Code2, Mail, MapPin, Phone, Sparkles, Check, Loader2, Moon, Sun, } from "lucide-react";
import api from "@/lib/api";
import { useUser } from "@/hooks/AuthContext";
import { ImageUploadCard } from "./create/ImageUploadCard";
import { PDFUploadCard } from "./create/PDFUploadCard";
import { TagInput } from "./create/TagInputProps";


export default function PortfolioCreatorPage({userData, user}) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // Form State
    const [fullName, setFullName] = useState("");
    const [roles, setRoles] = useState<string[]>([]);
    const [heroDescription, setHeroDescription] = useState("");
    const [aboutBio, setAboutBio] = useState("");

    // Media
    const [heroImage, setHeroImg] = useState<File | null>(null);
    const [heroImagePreview, setHeroImgPreview] = useState<string | null>("");
    const [aboutImage, setAboutImg] = useState<File | null>(null);
    const [aboutImagePreview, setAboutImgPreview] = useState<string | null>("");
    const [isHeroUploading, setIsHeroUploading] = useState(false);
    const [resume, setResume] = useState<File | null>(null);
    const [resumePreview, setResumePreview] = useState<File | null>(null);

    // Tags
    const [skills, setSkills] = useState<string[]>([]); 

    // Contact
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    // Hooks
    const {token} = useUser();
    
    useEffect(() => {
        if(userData){
            setFullName(userData?.name);
            setRoles(userData?.roles);
            setHeroDescription(userData?.heroDescription);
            setAboutBio(userData?.aboutDescription);
            setHeroImgPreview(userData?.heroImage);
            setAboutImgPreview(userData?.aboutImage);
            setResumePreview(userData?.resume);
            setSkills(userData?.skills);
            setEmail(userData?.email);
            setPhone(userData?.phone);
            setAddress(userData?.address);
        } else if(user){
            setFullName(user?.name);
            setEmail(user?.email);
        }
    }, [user, userData])

    // Handlers
    const handleHeroUpload = (file: File) => {
        setIsHeroUploading(true);
        setTimeout(() => {
            setHeroImg(file);
            setHeroImgPreview(URL.createObjectURL(file));
            setIsHeroUploading(false);
        }, 1200);
    };

    const handleAboutUpload = (file: File) => {
        setAboutImg(file);
        setAboutImgPreview(URL.createObjectURL(file));
    };

    const handlePdfUpload = (file: File) => {
        setResume(file);
        setResumePreview(URL.createObjectURL(file));
    };

    const handleSave = async () => {
        console.log({ 
            fullName,
            roles,
            heroDescription,
            aboutBio,
            heroImage,
            aboutImage,
            resume,
            skills,
            email,
            phone,
            address
        });
        const formData = new FormData();
        formData.append('name', fullName);
        roles.forEach(role=>{
            formData.append("roles", role);
        });
        skills.forEach(skill=>{
            formData.append("skills", skill);
        }); 
        formData.append('heroDescription', heroDescription);
        formData.append('aboutDescription', aboutBio);
        if (heroImage) formData.append("heroImage", heroImage);
        if (aboutImage) formData.append("aboutImage", aboutImage); 
        if (resume) formData.append("resume", resume); 
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        try {
            setIsSaving(true);
            await api.post('/portfolio/create',
                formData,
                {
                    headers: {
                        "Content-Type" : "multipart/form-data",
                        Authorization: token
                    }
                }
            );
            setShowToast(true); 
        } catch (error) {
            console.log(error);
        } finally{
            setIsSaving(false);
        }
    };

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <div className="min-h-screen bg-slate-100 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 transition-colors duration-300 font-sans pb-24 selection:bg-zinc-800 selection:text-zinc-100 dark:selection:bg-zinc-200 dark:selection:text-zinc-900">
            
                {/* --- Sticky Glass Top Navigation --- */}
                <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800/80 transition-colors">
                    <div className="max-w-350 mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center shadow-sm">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold tracking-tight leading-tight">
                                    Create Portfolio
                                </h1>
                                <p className="text-xs text-slate-500 dark:text-zinc-400">
                                    Build and customize your professional developer presence.
                                </p>
                            </div>
                        </div>

                        {/* Header Right */}
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="p-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors shadow-sm"
                                aria-label="Toggle Theme"
                            >
                                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>

                            <button
                                type="button"
                                onClick={handleSave}
                                disabled={isSaving}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-medium rounded-xl shadow-sm transition-all duration-150 disabled:opacity-70 active:scale-[0.98] cursor-pointer"
                            >
                                {isSaving ? (
                                    <>
                                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                         {userData ? 'Updating...' : 'Saving...'}
                                    </>
                                    ) : (
                                    <>
                                        <Check className="w-3.5 h-3.5" />
                                        {userData ? 'Update Portfolio' : 'Save Portfolio'}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </header>

                {/* --- Main Dashboard Content --- */}
                <main className="max-w-350 mx-auto px-4 sm:px-6 pt-8 space-y-8">
                
                    {/* SECTION 1: Basic Information */}
                    <motion.section
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 sm:p-8 bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 rounded-[24px] shadow-sm backdrop-blur-sm space-y-6"
                    >
                        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-zinc-800/60 pb-4">
                            <div className="p-2 bg-slate-100 dark:bg-zinc-800 rounded-xl text-slate-700 dark:text-zinc-300">
                                <User className="w-4 h-4" />
                            </div>
                            <div>
                                <h2 className="text-base font-semibold tracking-tight">Basic Information</h2>
                                <p className="text-xs text-slate-500 dark:text-zinc-400">Personal details and headline introductory roles.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="e.g. Rubel Hossen"
                                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
                                />
                            </div>

                            {/* Roles Tag Input */}
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                                    Professional Roles
                                </label>
                                <TagInput
                                    placeholder="Type role & press enter..."
                                    tags={roles}
                                    onAddTag={(tag) => setRoles([...roles, tag])}
                                    onRemoveTag={(idx) => setRoles(roles.filter((_, i) => i !== idx))}
                                />
                            </div>
                        </div>

                        {/* Hero Description */}
                        <div className="space-y-2 pt-2">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                                    Hero Description
                                </label>
                                <span className="text-[11px] text-slate-400 dark:text-zinc-500">
                                    {heroDescription.length}/200 characters
                                </span>
                            </div>
                            <textarea
                                rows={3}
                                maxLength={200}
                                value={heroDescription}
                                onChange={(e) => setHeroDescription(e.target.value)}
                                placeholder="A concise tag line or introduction displayed in the hero section..."
                                className="w-full p-3.5 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all resize-none"
                            />
                            <p className="text-[11px] text-slate-500 dark:text-zinc-500">
                                This will appear at the very top of your public portfolio page.
                            </p>
                        </div>
                    </motion.section>

                    {/* SECTION 2: Portfolio Media */}
                    <motion.section
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="p-6 sm:p-8 bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 rounded-[24px] shadow-sm backdrop-blur-sm space-y-6"
                    >
                        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-zinc-800/60 pb-4">
                            <div className="p-2 bg-slate-100 dark:bg-zinc-800 rounded-xl text-slate-700 dark:text-zinc-300">
                                <ImageIcon className="w-4 h-4" />
                            </div>
                            <div>
                                <h2 className="text-base font-semibold tracking-tight">Portfolio Media</h2>
                                <p className="text-xs text-slate-500 dark:text-zinc-400">Upload profile shots, hero imagery, and your downloadable CV.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ImageUploadCard
                                label="Hero Profile Image"
                                imagePreview={heroImagePreview}
                                onImageChange={handleHeroUpload}
                                onRemove={() => {
                                    setHeroImg(null);
                                    setHeroImgPreview(null)
                                }}
                                isUploading={isHeroUploading}
                            />
                            <ImageUploadCard
                                label="About Section Image"
                                imagePreview={aboutImagePreview}
                                onImageChange={handleAboutUpload}
                                onRemove={() => {
                                    setAboutImg(null);
                                    setAboutImgPreview(null)
                                }}
                            />
                        </div>

                        <div className="pt-2">
                            <PDFUploadCard
                                user={userData}
                                file={resume}
                                onUpload={handlePdfUpload}
                                onRemove={() => setResume(null)}
                            />
                        </div>
                    </motion.section>

                    {/* SECTION 3: About Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="p-6 sm:p-8 bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 rounded-[24px] shadow-sm backdrop-blur-sm space-y-6"
                    >
                        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-zinc-800/60 pb-4">
                            <div className="p-2 bg-slate-100 dark:bg-zinc-800 rounded-xl text-slate-700 dark:text-zinc-300">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div>
                                <h2 className="text-base font-semibold tracking-tight">About Section</h2>
                                <p className="text-xs text-slate-500 dark:text-zinc-400">Elaborate on your story, background, and career accomplishments.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {/* Left: About image preview thumbnail */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="lg:col-span-1 space-y-2">
                                    <span className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                                        Featured About Image
                                    </span>
                                    <div className="h-52 rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900 flex items-center justify-center">
                                        {aboutImagePreview ? (
                                            <img
                                                src={aboutImagePreview}
                                                alt="About Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-center p-4">
                                                <ImageIcon className="w-8 h-8 text-slate-400 dark:text-zinc-600 mx-auto mb-2" />
                                                <p className="text-xs text-slate-500 dark:text-zinc-500">
                                                    No About image uploaded yet.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>


                                <div className="lg:col-span-1 space-y-2">
                                    <span className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                                        Resume pdf
                                    </span>
                                    <div className="h-52 rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900 flex items-center justify-center">
                                        {resumePreview ? (
                                            <iframe
                                            src={resumePreview}
                                            alt="reseume preview"
                                            className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-center p-4">
                                                <ImageIcon className="w-8 h-8 text-slate-400 dark:text-zinc-600 mx-auto mb-2" />
                                                <p className="text-xs text-slate-500 dark:text-zinc-500">
                                                    No About image uploaded yet.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>

                            {/* Right: Detailed bio textarea */}
                            <div className="lg:col-span-2 space-y-2">
                                <label className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                                    Detailed Bio
                                </label>
                                <textarea
                                    rows={8}
                                    value={aboutBio}
                                    onChange={(e) => setAboutBio(e.target.value)}
                                    placeholder="Write about yourself, your experience, journey and passion..."
                                    className="w-full p-3.5 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-2xl text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all resize-none leading-relaxed"
                                />
                            </div>
                        </div>
                    </motion.section>

                    {/* SECTION 4: Skills & Services */}
                    <motion.section
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className=" "
                    >
                        <div className="p-6 sm:p-8 bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 rounded-[24px] shadow-sm backdrop-blur-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-zinc-800/60 pb-4">
                                <div className="p-2 bg-slate-100 dark:bg-zinc-800 rounded-xl text-slate-700 dark:text-zinc-300">
                                    <Code2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-base font-semibold tracking-tight">Skills & Tech Stack</h2>
                                    <p className="text-xs text-slate-500 dark:text-zinc-400">Frameworks, languages, and tools.</p>
                                </div>
                            </div>

                            <TagInput
                                placeholder="Add skill (e.g. React)..."
                                tags={skills}
                                onAddTag={(tag) => setSkills([...skills, tag])}
                                onRemoveTag={(idx) => setSkills(skills.filter((_, i) => i !== idx))}
                            />
                        </div>

                        {/* <div className="p-6 sm:p-8 bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 rounded-[24px] shadow-sm backdrop-blur-sm space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-zinc-800/60 pb-4">
                                <div className="p-2 bg-slate-100 dark:bg-zinc-800 rounded-xl text-slate-700 dark:text-zinc-300">
                                    <Briefcase className="w-4 h-4" />
                                </div>
                                <div>
                                    <h2 className="text-base font-semibold tracking-tight">Services Offered</h2>
                                    <p className="text-xs text-slate-500 dark:text-zinc-400">Client offerings & specializations.</p>
                                </div>
                            </div>

                            <TagInput
                                placeholder="Add service (e.g. UI Design)..."
                                tags={services}
                                onAddTag={(tag) => setServices([...services, tag])}
                                onRemoveTag={(idx) => setServices(services.filter((_, i) => i !== idx))}
                            />
                        </div> */}
                    </motion.section>

                    {/* SECTION 5: Contact Information */}
                    <motion.section
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="p-6 sm:p-8 bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 rounded-[24px] shadow-sm backdrop-blur-sm space-y-6"
                    >
                        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-zinc-800/60 pb-4">
                            <div className="p-2 bg-slate-100 dark:bg-zinc-800 rounded-xl text-slate-700 dark:text-zinc-300">
                                <Mail className="w-4 h-4" />
                            </div>
                            <div>
                                <h2 className="text-base font-semibold tracking-tight">Contact Information</h2>
                                <p className="text-xs text-slate-500 dark:text-zinc-400">Where potential clients and employers can reach you.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                                    <Mail className="w-3.5 h-3.5 text-slate-400" /> Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your.email@example.com"
                                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                                    <Phone className="w-3.5 h-3.5 text-slate-400" /> Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="space-y-2 pt-2">
                            <label className="text-xs font-medium text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Location / Address
                            </label>
                            <textarea
                                rows={2}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="City, Country or Remote preference..."
                                className="w-full p-3.5 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all resize-none"
                            />
                        </div>
                    </motion.section>

                    {/* Bottom Call To Action */}
                    <div className="pt-4 flex justify-center">
                        <button
                            type="button"
                            onClick={handleSave}
                            disabled={isSaving}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-900 text-sm font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 active:scale-[0.98]"
                        >
                        {isSaving ? (
                            <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                                 {userData? 'Updating Change...' : 'Saving Changes...'}
                            </>
                        ) : (
                            <>
                            <Check className="w-4 h-4" />
                                 {userData? 'Update Portfolio' : "Save Portfolio"}
                            </>
                        )}
                        </button>
                    </div>
                </main>

                {/* --- Toast Notification --- */}
                <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl shadow-xl border border-zinc-800 dark:border-zinc-200"
                        >
                            <div className="p-1 bg-emerald-500 rounded-full text-white">
                                <Check className="w-3.5 h-3.5" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold">Portfolio Saved</p>
                                <p className="text-[11px] opacity-80">Your changes are now live on your site.</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowToast(false)}
                                className="ml-3 opacity-60 hover:opacity-100 transition-opacity"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}