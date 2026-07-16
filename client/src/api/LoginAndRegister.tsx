import { signIn } from "@/lib/auth-client";
import { signOut } from "@/lib/auth-client";



export const handleSocialLogin = async ( provider: "google" | "github", setLoading : any ) => {
    setLoading(true);
    try{
        await signIn.social({
            provider,
            callbackURL: "/",
        });
    }catch(error){
        console.log(error);
    }finally{
        setLoading(false);
    }

};


export const handleLogout = async (setLoading : any) => {
    setLoading(true)
    try{
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = "/";
                },
            },
        }); 
    }catch(error){
        console.log(error);
    }finally{
        setLoading(false)
    }
} 