import MyPortfolioPage from "@/components/my-portfolio/MyPortfolio";
import api from "@/lib/api";
import PortfolioNotFound from './../../../../components/my-portfolio/NotFound';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


interface PageProps {
    params: {
        id: string
    }
};


export default async function Home({params}: PageProps) {
    let userData = null
    let projects = null;
    const {id} = await params;
    let user = null;
    let token = null;

    
    
    try{
        const [userRes, projectRes] = await Promise.all([
            api.get(`/portfolio/public/${id}`,),
            api.get(`/portfolio/public/projects/${id}`,),
        ]);
        
        userData = userRes.data.payload;
        projects = projectRes.data.payload;
        
        
        const session = await auth?.api?.getSession({
            headers: await headers(),
        });
        const tokenData = await auth?.api?.getToken({
            headers: await headers(),
        });
        
        user = session?.user;
        token = tokenData?.token;
    }catch(error) {
        console.log(error);
    }
    return (
        <>
            {
                userData 
                ? <MyPortfolioPage userData={userData} projects={projects} user={user} token={token} id={id} />
                : <PortfolioNotFound />

            }
        </>
    );
}