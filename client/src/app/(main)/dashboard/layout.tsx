import { Footer } from '@/components/layout/Footer';
import NavbarMain from '@/components/layout/NavbarMain';
import { AuthProvider } from '@/hooks/AuthContext';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DashboardLayout = async ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    let user = null;
    let token = null
    try{
        const session = await auth?.api?.getSession({
            headers: await headers(),
        });
        
        user = session?.user;
        
        const tokenData = await auth?.api?.getToken({
            headers: await headers(),
        });
        token = tokenData?.token;
    }catch (error){
        console.log(error);
    }
    return (
        <body className="min-h-full flex flex-col">
            <AuthProvider user={user} token={token}>
                {children}
            </AuthProvider>
        </body>
    );
};

export default DashboardLayout;