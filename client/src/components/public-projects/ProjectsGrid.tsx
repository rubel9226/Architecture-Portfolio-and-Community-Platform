import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}

export function ProjectsGrid({
    projects,
    }: Props) {
    if (!projects.length) {
        return (
        <div className="text-center py-20">
            No projects found.
        </div>
        );
    }

    return (
        <div className="grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-8
            mt-10"
        >
            {projects.map((project) => (
                <ProjectCard
                key={project._id}
                project={project}
                />
            ))}
        </div>
    );
}