"use client";

import api from "@/lib/api";
import { Plus, Trash2 } from "lucide-react";

interface Props {
    section: string;
    onAdd?: () => void;
    onDelete?: () => void;
}

export default function SectionActions({ section, onAdd, onDelete, }: Props) {

    const handleAdd = async () => {

        onAdd?.();
        /*
        Example
        await api.put(`/portfolio/${section}`,{
            action:"add"
        })
        */
    };

    const handleDelete = async () => {

        onDelete?.();

        /*
        await api.put(`/portfolio/${section}`,{
            action:"delete"
        })

        */
    };

    return (
        <div className="flex justify-center gap-4 mt-14">

            <button
                onClick={handleAdd}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
                <Plus size={18}/>
                Add
            </button>

            <button
                onClick={handleDelete}
                className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition"
            >
                <Trash2 size={18}/>
                Delete
            </button>

        </div>
    );
}