
import { motion } from "framer-motion";
import { useState } from "react";
import SectionActions from './SectionActions';
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { PortfolioData } from "@/types";


const Contact = ({ userData }: { userData: PortfolioData | null | undefined }) => {
    const [copied, setCopied] = useState("");
    console.log(userData, 'contact')
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState("idle");

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async(e: React.FormEvent)=>{
        e.preventDefault();
        
        if(
            !formData.name ||
            !formData.email ||
            !formData.message
        ){
        setFormStatus("error");
            return;
        }
        try{
            setFormStatus("submitting");

            const res = await fetch("/api/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            });

            const data = await res.json();

            if(data.success){
            setFormStatus("success");

            setFormData({
            name:"",
            email:"",
            phone:"",
            company:"",
            message:""
        });

        }else{
            setFormStatus("error");
        }
        }catch(error){
            console.log(error);
            setFormStatus("error");
        }
    };


    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(text);

            setTimeout(() => {
                setCopied("");
            }, 2000);

        } catch (error) {
            console.log("Copy failed", error);
        }
    };



    return (
        <section className="py-24 px-6 relative" id="contact">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">Contact Us</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind? Let's connect and discuss how I can help bring your ideas to life.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div data-purpose="contact-info">
                        <h3 className="text-3xl font-bold mb-8">Get in touch today</h3>
                        <p className="text-slate-400 mb-10">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="space-y-6">
                            <div onDoubleClick={() => handleCopy("mdrubelhossen9226@gmail.com")} className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 group-hover:bg-blue-900/30 transition-all duration-300">📧</div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <p className="font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                                        {userData?.email}
                                    </p>
                                    {
                                        copied === "mdrubelhossen9226@gmail.com" && (
                                            <p className="text-xs text-green-400 mt-1">
                                                ✓ Copied!
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                            <div onDoubleClick={() => handleCopy("+8801307743888")} className="flex items-start gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 group-hover:bg-blue-900/30 transition-all duration-300">📞</div>
                                <div>
                                    <p className="text-sm text-slate-500">Phone</p>
                                    <p className="font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                                        {userData?.phone}
                                    </p>
                                    {
                                        copied === "+8801307743888" && (
                                            <p className="text-xs text-green-400 mt-1">
                                                ✓ Copied!
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 group-hover:bg-blue-900/30 transition-all duration-300">📍</div>
                                <div>
                                    <p className="text-sm text-slate-500">Address</p>
                                    <p className="font-medium text-slate-200 group-hover:text-blue-400 transition-colors capitalize">
                                        {userData?.address}
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div className="backdrop-blur-md bg-white/2 border border-white/10 p-8 rounded-3xl relative overflow-hidden group shadow-2xl" data-purpose="contact-form-container">
                        {formStatus === "success" ? (
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12 flex flex-col items-center justify-center h-full"
                            >
                                <span className="text-5xl mb-4 text-green-400">✓</span>
                                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                                <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setFormStatus("idle")}
                                    className="mt-6 px-6 py-2 border border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all cursor-pointer"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Name *</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            disabled={formStatus === "submitting"}
                                            className="w-full bg-slate-900/60 border border-slate-700/80 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                                            placeholder="John Carter"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            disabled={formStatus === "submitting"}
                                            className="w-full bg-slate-900/60 border border-slate-700/80 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                                            placeholder="example@gmail.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleFormChange}
                                            disabled={formStatus === "submitting"}
                                            className="w-full bg-slate-900/60 border border-slate-700/80 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                                            placeholder="+88 01307743888"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleFormChange}
                                            disabled={formStatus === "submitting"}
                                            className="w-full bg-slate-900/60 border border-slate-700/80 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                                            placeholder="Acme Inc."
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Message *</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        disabled={formStatus === "submitting"}
                                        className="w-full bg-slate-900/60 border border-slate-700/80 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                                        placeholder="Please type your message here..."
                                        rows={4}
                                    ></textarea>
                                </div>

                                {formStatus === "error" && (
                                    <p className="text-red-500 text-sm">Please fill out all required fields.</p>
                                )}

                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    type="submit"
                                    disabled={formStatus === "submitting"}
                                    className="w-full py-4 bg-linear-to-r from-blue-600 to-pink-600 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all text-white disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {formStatus === "submitting" ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </>
                                    ) : (
                                    "Send message"
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;