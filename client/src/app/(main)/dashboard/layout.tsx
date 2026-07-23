
import { AuthProvider } from '@/hooks/AuthContext';
import { auth } from '@/lib/auth';
import { childrenProps } from '@/types';
import { headers } from 'next/headers';




const DashboardLayout = async ({ children }: childrenProps) => {
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