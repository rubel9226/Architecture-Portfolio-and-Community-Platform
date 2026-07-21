import MyPortfolioContainer from "@/components/my-portfolio/MyPortfolioContainer";
import api from "@/lib/api";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyPortfolio = async () => { 
    let userData = null
    try{
        const tokenData = await auth?.api?.getToken({
          headers: await headers(),
        });
        const token = tokenData?.token;
        const res = await api.get('/portfolio', {
            headers: {
                Authorization: token
            }
        });
        console.log(res);
        userData = res?.data?.payload
    }catch(error) {
        console.log(error);
    }

    return (
        <MyPortfolioContainer userData={userData} />
    );
};

export default MyPortfolio;