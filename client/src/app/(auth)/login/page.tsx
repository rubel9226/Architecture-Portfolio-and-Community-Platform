"use client";

import React from "react";
import { motion } from "framer-motion"; 
import { LoginBanner } from "@/components/auth/login/LoginBanner";
import { LoginHeader } from "@/components/auth/login/LoginHeader";
import { LoginForm } from "@/components/auth/login/LoginForm";
import { AuthDivider } from "@/components/auth/login/AuthDivider";
import { SocialLogin } from "@/components/auth/login/SocialLogin";
import { LoginFooter } from "@/components/auth/login/LoginFooter";


export default function LoginPage() {
    return (
        <main className="min-h-screen flex bg-slate-50 mx-auto">
            <LoginBanner />

            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-xs relative"
                >
                    <LoginHeader />
                    <LoginForm />
                    <AuthDivider />
                    <SocialLogin />
                    <LoginFooter />
                </motion.div>
            </div>
        </main>
    );
}