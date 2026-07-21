"use client";

import { createContext, useContext, ReactNode } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    image?: string | null;

    username?: string;
    country?: string;
    university?: string;
    department?: string;
    role?: string;
    experience?: string;
}

interface AuthContextType {
    user: User | null;
    token: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
    user: User | null;
    token?: string;
    projects?: any[];
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