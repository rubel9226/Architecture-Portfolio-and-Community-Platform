"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, LogIn } from "lucide-react";
import { loginSchema, LoginFormData } from "@/validation/loginSchema";
import { PasswordInput } from "./PasswordInput";
import { RememberMe } from "./RememberMe";

import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const LoginForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
            resolver: zodResolver(loginSchema),
            defaultValues: {
            identifier: "",
            password: "",
            rememberMe: false,
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            setLoading(true);

            const result = await signIn.email({
                email: data.identifier,
                password: data.password,
                rememberMe: data.rememberMe,
            });

            if (result.error) {
                alert(result.error.message);
                return;
            }

            router.push("/"); 

        } catch (error) {
            console.error(error);
            alert("Login failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
                Email
            </label>
            <div className="relative">
            <span className="absolute left-3.5 top-3.5 text-slate-400">
                <Mail size={14} />
            </span>
            <input
                type="text"
                {...register("identifier")}
                placeholder="Enter your email"
                className="w-full bg-white border border-slate-200 text-slate-900 pl-10 pr-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-light"
            />
            </div>
            {errors.identifier && (
            <p className="text-[10px] text-rose-500 font-medium">{errors.identifier.message}</p>
            )}
        </div>

        <PasswordInput register={register} error={errors.password} />

        <RememberMe register={register} />

        <button
            type="submit"
            disabled={loading}
            className="relative w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white disabled:text-slate-400 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
        >
            {loading ? (
            <div className="h-4 w-4 border-2 border-t-white border-blue-600/30 rounded-full animate-spin" />
            ) : (
            <>
                <LogIn size={14} />
                <span>Sign In to ArchiFolio</span>
            </>
            )}
        </button>
        </form>
    );
};