"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
    const router = useRouter();
    const params = useSearchParams();

    const [value, setValue] = useState(params.get("search") || "");

    const handleSearch = () => {
        const query = new URLSearchParams(params.toString());

        if (value.trim()) {
        query.set("search", value);
        } else {
        query.delete("search");
        }

        query.set("page", "1");

        router.push(`/projects?${query.toString()}`);
    };

    return (
        <div className="mt-8 flex gap-3">
        <div className="relative flex-1">
            <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50"
            />

            <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search projects..."
            className="input input-bordered w-full pl-11"
            />
        </div>

        <button
            onClick={handleSearch}
            className="btn btn-primary"
        >
            Search
        </button>
        </div>
    );
}