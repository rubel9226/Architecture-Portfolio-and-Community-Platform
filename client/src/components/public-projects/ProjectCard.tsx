"use client";

import { Project } from "@/types";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Heart,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <Link href={`/projects/${project._id}`}>
            <div className="relative aspect-[16/10] overflow-hidden">

            <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />

            <div className="absolute bottom-4 left-4 right-4 translate-y-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                {project.category}
                </span>

            </div>

            </div>
        </Link>

        <div className="p-5">

            <Link href={`/projects/${project._id}`}>
            <h3 className="line-clamp-2 text-xl font-bold transition hover:text-primary">
                {project.title}
            </h3>
            </Link>

            <div className="mt-3 flex items-center gap-2">

            <div className="avatar placeholder">
                <div className="w-9 rounded-full bg-primary text-primary-content">
                <span>
                    {project.author.name.charAt(0)}
                </span>
                </div>
            </div>

            <div>

                <p className="font-medium">
                {project.author.name}
                </p>

                <p className="text-xs text-base-content/60">
                @{project.author.username}
                </p>

            </div>

            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-base-content/70">

            <div className="flex items-center gap-1">
                <MapPin size={15} />
                {project.location}
            </div>

            <div className="flex items-center gap-1">
                <Calendar size={15} />
                {project.year}
            </div>

            </div>

            <div className="mt-5 flex flex-wrap gap-2">

            {project.softwareUsed.slice(0, 3).map((item) => (
                <span
                key={item}
                className="rounded-full bg-base-200 px-3 py-1 text-xs"
                >
                {item}
                </span>
            ))}

            {project.softwareUsed.length > 3 && (
                <span className="rounded-full bg-base-200 px-3 py-1 text-xs">
                +{project.softwareUsed.length - 3}
                </span>
            )}

            </div>

            <div className="mt-6 flex items-center justify-between">

            <div className="flex items-center gap-4 text-sm text-base-content/70">

                <div className="flex items-center gap-1">
                <Heart size={16} />
                {project.likes.length}
                </div>

                <div className="flex items-center gap-1">
                <MessageCircle size={16} />
                {project.comments.length}
                </div>

            </div>

            <Link
                href={`/projects/${project._id}`}
                className="flex items-center gap-1 text-primary font-medium"
            >
                View
                <ArrowRight size={16} />
            </Link>

            </div>

        </div>

        </article>
    );
}