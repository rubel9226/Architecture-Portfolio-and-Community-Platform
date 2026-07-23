import { AuthProvider } from "@/hooks/AuthContext";
import api from "@/lib/api";
import { auth } from "@/lib/auth";
import { childrenProps } from "@/types/allType";
import { headers } from "next/headers";
import React from "react";



const MyProjectsRoot = async ({ children }: childrenProps) => {
  let projects = null;
  let token = null
  let user = null
  try{ 
    const session = await auth?.api?.getSession({
      headers: await headers(),
    });
      
    user = session?.user;

    const tokenData = await auth?.api?.getToken({
      headers: await headers(),
    }); 

    token = tokenData?.token
    
    const res = await api.get('/project/my-projects', 
      {
        headers: {
          Authorization: token
        }
      }
    );

    projects = res?.data?.payload;

    console.log({token, user}, 'auth provider')
  }catch (error){
    console.log(error);
  } 
    return <>
      <AuthProvider user={user} token={token} projects={projects}>
         {children}
      </AuthProvider>
    </>;
};

export default MyProjectsRoot;