"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Landscape",
  "Hospitality",
  "Urban",
];

export default function CategoryTabs() {
    const router = useRouter();
    const params = useSearchParams();

    const active = params.get("category") || "All";

    const handleClick = (category: string) => {
        const query = new URLSearchParams(params.toString());

        if (category === "All") {
        query.delete("category");
        } else {
        query.set("category", category.toLowerCase());
        }

        query.set("page", "1");

        router.push(`/projects?${query.toString()}`);
    };

    return (
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
            <button
            key={category}
            onClick={() => handleClick(category)}
            className={`btn btn-sm whitespace-nowrap ${
                active.toLowerCase() === category.toLowerCase()
                ? "btn-primary"
                : "btn-outline"
            }`}
            >
            {category}
            </button>
        ))}
        </div>
    );
}