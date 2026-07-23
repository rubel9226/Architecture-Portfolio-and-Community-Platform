"use client";

import { User } from "@/types/allType";
import { Project } from "@/types/myProject";
import { createContext, useContext, ReactNode } from "react";

interface AuthContextType {
    user: User | null | undefined;
    token: string | null | undefined;
    projects?: Project[];
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
    user: User | null | undefined;
    token?: string | null | undefined;
    projects?: Project[];
}

export function AuthProvider({ children, user, token = "", projects}: AuthProviderProps) {
    console.log({token, user})
    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                projects
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useUser() {
    const context = useContext(AuthContext); 
    if (!context) {
        throw new Error("useUser must be used within AuthProvider");
    }
    console.log(context, 'context')
    return context;
}