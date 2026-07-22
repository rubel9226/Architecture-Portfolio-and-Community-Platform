import PortfolioCreatorPage from "@/components/my-portfolio/CreatePortfolio";
import api from "@/lib/api";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyPortfolio = async () => { 
    let userData = null
    let projects = null;
    let user = null;
    try{
        const tokenData = await auth?.api?.getToken({
          headers: await headers(),
        });
        const session = await auth?.api?.getSession({
          headers: await headers(),
        });
          
        user = session?.user;
        const token = tokenData?.token;
        const [userRes, projectRes] = await Promise.all([
            api.get("/portfolio", {
                headers: {
                    Authorization: token,
                },
            }),
            api.get("/portfolio/projects", {
                headers: {
                    Authorization: token,
                },
            }),
        ]);


        userData = userRes.data.payload;
        projects = projectRes.data.payload; 
        console.log(userData)
    }catch(error) {
        console.log(error);
    }

    console.log(projects)

    return (
        // <MyPortfolioContainer userData={userData} projects={projects} user={user} />
         <PortfolioCreatorPage userData={userData} user={user} />
    );
};

export default MyPortfolio;