import MyPortfolioPage from "@/components/my-portfolio/MyPortfolio";
import api from "@/lib/api";
import PortfolioNotFound from './../../../../components/my-portfolio/NotFound';


export default async function Home({params}) {
    let userData = null
    let projects = null;
    const query = await params;

    try{
        const [userRes, projectRes] = await Promise.all([
            api.get(`/portfolio/public/${query?.id}`,),
            api.get(`/portfolio/public/projects/${query?.id}`,),
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