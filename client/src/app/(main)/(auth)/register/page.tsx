"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

import { RegisterBanner } from "@/components/auth/register/RegisterBanner";
import { RegisterHeader } from "@/components/auth/register/RegisterHeader";
import { RegisterForm } from "@/components/auth/register/RegisterForm";
import { SocialRegister } from "@/components/auth/register/SocialRegister";
import { RegisterFooter } from "@/components/auth/register/RegisterFooter";

export default function RegisterPage() {
    const [isSuccess, setIsSuccess] = useState(false);

    return (
        <section className='mx-auto bg-slate-50 dark:bg-slate-950 w-full'> 
            <main className="min-h-screen flex max-w-[1400px] mx-auto">
                <RegisterBanner />

                <div className="w-full lg:w-7/12 flex items-center justify-center p-4 md:p-12 xl:p-16 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.div
                                key="register-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl shadow-slate-100/40 dark:shadow-none"
                            >
                                <RegisterHeader />
                                <RegisterForm onSuccess={() => setIsSuccess(true)} />
                                <SocialRegister />
                                <RegisterFooter />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-w-md bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-950 p-8 rounded-2xl space-y-6 text-center shadow-2xl"
                            >
                                <div className="mx-auto w-12 h-12 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-full flex items-center justify-center text-emerald-600">
                                    <CheckCircle2 size={24} />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Account Created Successfully</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                    Your ArchiFolio spatial profile namespace is verified and structured. Log in to claim your portfolio dashboard space.
                                    </p>
                                </div>

                                <Link
                                    href="/login"
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all"
                                >
                                    <span>Proceed to Sign In</span>
                                    <ArrowRight size={13} />
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </section>
    );
}