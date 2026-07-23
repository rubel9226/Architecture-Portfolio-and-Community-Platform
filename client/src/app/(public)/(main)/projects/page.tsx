import { Pagination } from "@/components/public-projects/Pagination";
import { ProjectsGrid } from "@/components/public-projects/ProjectsGrid";
import SearchBar from "@/components/public-projects/SearchBar";
import api from "@/lib/api";

interface PageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function ProjectsPage({ searchParams, }: PageProps) {
    const params = await searchParams;
    const page = Number(params.page) || 1;

    let data = null
    try{
        const res = await api.get('/project/public');
        data = res?.data?.payload;
        console.log(res);

    }catch (error){
        console.log(error)
    }

    console.log(data)

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">

        <div className="mb-10">
            <h1 className="text-4xl font-bold">
            Explore Projects
            </h1>

            <p className="text-gray-500 mt-2">
            Discover architecture projects from around the world.
            </p>
        </div>

        <SearchBar />

        <ProjectsGrid
            projects={data.projects}
        />

        <Pagination
            currentPage={data.pagination.page}
            totalPages={data.pagination.totalPages}
        />

        </main>
    );
}