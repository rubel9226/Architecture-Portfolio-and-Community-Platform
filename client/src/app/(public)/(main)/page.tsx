
import MainHomePage from '@/components/Home/MainHomePage';
import { Footer } from '@/components/layout/Footer';
import NavbarMain from '@/components/layout/NavbarMain';
import api from '@/lib/api';
import { Project } from '@/types';



export default async function HomePage() {
  let publicProjects: Project[] = [];
  let featuredProjects: Project[] = [];
  try{
    const res = await api.get('/project/public-home');
    const featureRes = await api.get('/project/featured-home');
    publicProjects = res?.data?.payload;
    featuredProjects = featureRes?.data?.payload;
  }catch(error){
    console.log(error);
  }
  return (
    <>
      <MainHomePage publicProjects={publicProjects} featuredProjects={featuredProjects} />
    </>
  );
}
