import Image from "next/image";
import { MapPin, Calendar, Building2, Users, Layers, Eye, Code2 } from "lucide-react";
import api from "@/lib/api"; 




export default async function ProjectDetailsPage({ params }:{ params:{ id:string } }) {
    let project = null;
    const paramsData = await params;
    console.log(paramsData, 'params');
    try{
        const res = await api.get(`/project/single-project/${paramsData?.id}`);
        console.log(res);
        project = res?.data?.payload;
    }catch(error){
        console.log(error);
    }

    return (
        <main className=" min-h-screen bg-slate-950 text-white px-5 md:px-10 py-10">
            <section className="max-w-[1400px] mx-auto">
                
                <div className=" relative w-full h-100 rounded-3xl overflow-hidden border border-slate-800 ">
                <Image
                    src={project?.coverImage}
                    alt={project?.title}
                    fill
                  className=" object-cover " 
                />
                <div className=" absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent " />

                <div className=" absolute bottom-8     left-8 ">

                    <span className=" bg-blue-500/20 border border-blue-400/30 text-blue-400 px-3 py-1 rounded-full text-xs ">
                        {project?.visibility}
                    </span>

                    <h1 className=" text-4xl md:text-5xl font-bold mt-4 ">
                        {project?.title}
                    </h1>

                    <p className=" text-slate-300 mt-2 ">
                        {project?.category}
                    </p>
                </div>
                </div>
                
                <section className=" grid md:grid-cols-3 gap-5 mt-8 "> 
                    <InfoCard
                        icon={<Calendar size={18}/>}
                      title="Year"
                      value={String(project?.year)}
                    />

                    <InfoCard
                        icon={<MapPin size={18}/>}
                        title="Location"
                        value={project?.location}
                    />


                    <InfoCard
                        icon={<Building2 size={18}/>}
                        title="University"
                        value={project?.university}
                    />


                    <InfoCard
                        icon={<Users size={18}/>}
                        title="Team Members"
                        value={project?.teamMembers}
                    />

                    <InfoCard
                        icon={<Layers size={18}/>}
                        title="Project Type"
                        value={project?.projectType}
                    />
                    <InfoCard
                        icon={<Eye size={18}/>}
                        title="Visibility"
                        value={project?.visibility}
                    />
                </section>
                <section className=" mt-10 space-y-8 ">
                    <ContentBox
                        title="Project Overview"
                        text={project?.overview}
                    />

                    <ContentBox
                        title="Design Concept"
                        text={project?.designConcept}
                    />

                    <ContentBox
                        title="Materials Used"
                        text={project?.materialsUsed}
                    />
                </section>

                {/* Software */}
                <section className="mt-10">
                    <h2 className=" text-xl font-bold flex items-center gap-2 ">
                        <Code2 size={20}/>
                        Software Used
                    </h2>

                    <div className=" flex flex-wrap gap-2 mt-4 ">
                    {
                        project?.softwareUsed?.map(
                            (item: string, index: number)=>( 
                                <span key={index} className=" px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300 " >
                                    {item}
                                </span> 
                            )
                        )
                    }
                    </div>
                </section>
                {
                    project?.galleryImages?.length > 0 && (
                        <section className="mt-10"> 
                            <h2 className=" text-xl font-bold mb-5 "> Gallery </h2> 
                            <div className=" grid md:grid-cols-3 gap-5 "> 
                            {
                                project?.galleryImages?.map(
                                    (img: string, index: number)=>(

                                        <div
                                        key={index}
                                        className=" relative h-60 rounded-2xl overflow-hidden border border-slate-800 " >

                                            <Image
                                            src={img}
                                            alt="gallery"
                                            fill
                                            className="object-cover"
                                            />
                                        </div>
                                    )
                                )
                            }
                            </div>
                        </section>
                    )
                }   
            </section>

        </main>
    );
}







function InfoCard({ icon, title, value }:{ icon:React.ReactNode; title:string; value:string; }){
    return (
        <div className=" bg-slate-900 border border-slate-800 rounded-2xl p-5 ">
            <div className=" text-blue-400 ">
                {icon}
            </div>

            <p className=" text-xs text-slate-400 mt-3 ">
                {title}
            </p>

            <p className=" font-semibold mt-1 text-sm ">
                {value}
            </p>
        </div>

    )
}





function ContentBox({ title, text }:{ title:string; text:string; }){
    return (
        <div className=" bg-slate-900 border border-slate-800 rounded-2xl p-6 " >

            <h2 className=" text-xl font-bold mb-3 ">
                {title}
            </h2>

            <p className=" text-slate-400 leading-8 ">
                {text}
            </p>
        </div>
    )
}