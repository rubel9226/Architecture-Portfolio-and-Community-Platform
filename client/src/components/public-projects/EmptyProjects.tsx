import { FolderSearch } from "lucide-react";
import Link from "next/link";

export default function EmptyProjects() {
    return (
        <div className="py-24 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-base-200">
            <FolderSearch className="h-10 w-10 text-base-content/50" />
        </div>

        <h2 className="mt-6 text-2xl font-bold">
            No Projects Found
        </h2>

        <p className="mt-3 text-base-content/60 max-w-md mx-auto">
            We couldn't find any projects that match your search or filters.
        </p>

        <Link
            href="/projects"
            className="btn btn-primary mt-8"
        >
            Browse All Projects
        </Link>

        </div>
    );
}