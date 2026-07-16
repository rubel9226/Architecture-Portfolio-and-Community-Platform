"use client";

import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Building2, GraduationCap, Globe, 
  CheckCircle2, AlertCircle, ArrowRight, UserPlus 
} from "lucide-react";

import { registerSchema, RegisterFormData } from "@/validation/registerSchema";
import { PasswordInput } from "./PasswordInput";
import { ConfirmPasswordInput } from "./ConfirmPasswordInput";
import { PasswordStrength } from "./PasswordStrength";
import { TermsCheckbox } from "./TermsCheckbox";
import { signUp } from "@/lib/auth-client";


interface RegisterFormProps {
  onSuccess: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [checkingUsername, setCheckingUsername] = useState(false);
    const [checkingEmail, setCheckingEmail] = useState(false);
    const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);
    const [isEmailAvailable, setIsEmailAvailable] = useState<boolean | null>(null);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RegisterFormData>({
            resolver: zodResolver(registerSchema),
            defaultValues: {
            fullName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "", 
            agreeTerms: undefined,
        },
    });

    const watchedUsername = useWatch({ control, name: "username" });
    const watchedEmail = useWatch({ control, name: "email" });
    const watchedPassword = useWatch({ control, name: "password" }) || "";


    useEffect(() => {
        if (!watchedUsername || watchedUsername.length < 3) {
            setIsUsernameAvailable(null);
            return;
        }
        setCheckingUsername(true);
        const delay = setTimeout(() => {
            setCheckingUsername(false);
            setIsUsernameAvailable(watchedUsername !== "admin" && watchedUsername !== "tahmid");
        }, 550);
        return () => clearTimeout(delay);
    }, [watchedUsername]);

    // Mock Email availability checks
    useEffect(() => {
        if (!watchedEmail || !watchedEmail.includes("@")) {
            setIsEmailAvailable(null);
            return;
        }
        setCheckingEmail(true);
        const delay = setTimeout(() => {
            setCheckingEmail(false);
            setIsEmailAvailable(!watchedEmail.includes("taken"));
        }, 600);
        return () => clearTimeout(delay);
    }, [watchedEmail]);

    const onSubmitForm = async (data: RegisterFormData) => {
        try {
            console.log(data);
            setLoading(true);

            const result = await signUp.email({
                name: data.fullName,
                email: data.email,
                password: data.password,

                username: data.username, 
            });

            console.log(result)

            if (result.error) {
                alert(result.error.message);
                return;
            }

            onSuccess();
        } catch (error) {
            console.error(error);
            alert("Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm,
    (errors) => {
      console.log("Validation Errors:", errors);
    })} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 capitalize tracking-wide">
                        Full Name
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-3 text-slate-400 dark:text-slate-500">
                            <User size={13} />
                        </span>
                        <input
                            type="text"
                            {...register("fullName")}
                            placeholder="Rubel Hossen"
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pl-9 pr-4 py-2 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-light"
                        />
                    </div>
                    {errors.fullName && <p className="text-[10px] text-rose-500 font-medium">{errors.fullName.message}</p>}
                </div>

                {/* Username */}
                <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 capitalize tracking-wide">
                        Username
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-3 text-[11px] font-mono text-slate-400 dark:text-slate-550">@</span>
                        <input
                            type="text"
                            {...register("username")}
                            placeholder="rubel12"
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pl-7 pr-16 py-2 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-mono font-light"
                        />
                        <div className="absolute right-2.5 top-2.5 flex items-center">
                        {checkingUsername ? (
                            <div className="h-3 w-3 border-2 border-t-blue-500 border-slate-200 rounded-full animate-spin" />
                        ) : isUsernameAvailable !== null ? (
                            isUsernameAvailable ? (
                                <span className="text-[9px] text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 px-1 py-0.5 rounded font-mono font-medium border border-emerald-250">Free</span>
                            ) : (
                                <span className="text-[9px] text-rose-600 bg-rose-50 dark:bg-rose-950/20 px-1 py-0.5 rounded font-mono font-medium border border-rose-250">Taken</span>
                            )
                        ) : null}
                        </div>
                    </div>
                    {errors.username && <p className="text-[10px] text-rose-500 font-medium">{errors.username.message}</p>}
                </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 capitalize tracking-wide">
                    Email Address
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-3 text-slate-400 dark:text-slate-500">
                        <Mail size={13} />
                    </span>
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="rubel...@gmail.com"
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pl-9 pr-16 py-2 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-light"
                    />
                    <div className="absolute right-2.5 top-2.5 flex items-center">
                        {checkingEmail ? (
                        <div className="h-3 w-3 border-2 border-t-blue-500 border-slate-200 rounded-full animate-spin" />
                        ) : isEmailAvailable !== null ? (
                        isEmailAvailable ? (
                            <span className="text-[9px] text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 px-1 py-0.5 rounded font-mono font-medium border border-emerald-250">Valid</span>
                        ) : (
                            <span className="text-[9px] text-rose-600 bg-rose-50 dark:bg-rose-950/20 px-1 py-0.5 rounded font-mono font-medium border border-rose-250">Linked</span>
                        )
                        ) : null}
                    </div>
                </div>
                {errors.email && <p className="text-[10px] text-rose-500 font-medium">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <PasswordInput register={register} error={errors.password} />
                <ConfirmPasswordInput register={register} error={errors.confirmPassword} />
            </div>

            {/* Password Strength Display */}
            <PasswordStrength value={watchedPassword} />

            {/* Terms & Newsletters */}
            <TermsCheckbox register={register} error={errors.agreeTerms} />


            <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white disabled:text-slate-400 dark:disabled:text-slate-600 rounded-xl text-xs font-extrabold transition-all shadow-md shadow-blue-500/10 cursor-pointer"
            >
                {loading ? (
                <div className="h-4 w-4 border-2 border-t-white border-blue-600/30 rounded-full animate-spin" />
                ) : (
                <>
                    <UserPlus size={14} />
                    <span>Submit</span>
                    <ArrowRight size={13} className="ml-1" />
                </>
                )}
            </button>
        </form>
    );
};