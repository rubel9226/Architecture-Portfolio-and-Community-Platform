"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock3, Construction } from "lucide-react";

export default function ComingSoonPage() {
    return (
        <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-6">

            <div className="max-w-2xl w-full text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
                >
                    <Construction className="w-12 h-12 text-blue-400" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                    Coming Soon
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto"
                >
                    This feature is currently under development. We're working
                    hard to deliver an amazing experience. Please check back
                    soon.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300"
                >
                    <Clock3 className="w-5 h-5 text-blue-400" />
                    Launching Soon...
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-10"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-lg shadow-blue-600/20"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </motion.div>

            </div>

        </main>
    );
}