import MyPortfolioPage from "@/components/my-portfolio/MyPortfolio";
import api from "@/lib/api";
import PortfolioNotFound from './../../../../components/my-portfolio/NotFound';


interface PageProps {
    params: {
        id: string
    }
};


export default async function Home({params}: PageProps) {
    let userData = null
    let projects = null;
    const {id} = await params;

    try{
        const [userRes, projectRes] = await Promise.all([
            api.get(`/portfolio/public/${id}`,),
            api.get(`/portfolio/public/projects/${id}`,),
        ]);

        console.log(userData, projects)

        userData = userRes.data.payload;
        projects = projectRes.data.payload
    }catch(error) {
        console.log(error);
    }
    return (
        <>
            {
                userData 
                ? <MyPortfolioPage userData={userData} projects={projects} />
                : <PortfolioNotFound />

            }
        </>
    );
}