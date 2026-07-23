
"use client";

import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
}

export function Pagination({
    currentPage,
    totalPages,
    }: Props) {
    if (totalPages <= 1) return null;

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center gap-2 mt-12 flex-wrap">

        <Link
            href={`/projects?page=${currentPage - 1}`}
            className={`btn btn-outline ${
            currentPage === 1 &&
            "pointer-events-none opacity-40"
            }`}
        >
            Previous
        </Link>

        {pages.map((page) => (
            <Link
            key={page}
            href={`/projects?page=${page}`}
            className={`btn ${
                page === currentPage
                ? "btn-primary"
                : "btn-outline"
            }`}
            >
            {page}
            </Link>
        ))}

        <Link
            href={`/projects?page=${currentPage + 1}`}
            className={`btn btn-outline ${
            currentPage === totalPages &&
            "pointer-events-none opacity-40"
            }`}
        >
            Next
        </Link>
        </div>
    );
}