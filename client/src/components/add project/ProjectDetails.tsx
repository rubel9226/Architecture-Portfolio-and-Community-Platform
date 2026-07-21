"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

export default function ProjectDetails() {
  const { register } = useFormContext();

  return (
    <section className="bg-white dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-5 dark:text-white">
      <h2 className="text-lg font-medium text-neutral-800 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
        Metadata Details (Optional)
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 capitalize tracking-wider mb-2">
            Location
          </label>

          <input
            type="text"
            {...register("location")}
            className="w-full px-3 py-2 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-700 rounded text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-white"
            placeholder="Enter Location"
          />
        </div>


        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 capitalize tracking-wider mb-2">
            University / Studio
          </label>

          <input
            type="text"
            {...register("university")}
            className="w-full px-3 py-2 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-700 rounded text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-white"
            placeholder="Enter Studio"
          />
        </div>


        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 capitalize tracking-wider mb-2">
            Team Members
          </label>

          <input
            type="text"
            {...register("teamMembers")}
            className="w-full px-3 py-2 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-700 rounded text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-white"
            placeholder="Enter team member"
          />
        </div>


        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 capitalize tracking-wider mb-2">
            Client Name
          </label>

          <input
            type="text"
            {...register("clientName")}
            className="w-full px-3 py-2 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-700 rounded text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-white"
            placeholder="Enter client name"
          />
        </div>

      </div>


      <div className="grid grid-cols-1 gap-4 pt-2">

        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 capitalize tracking-wider mb-2">
            Design Concept Narrative
          </label>

          <textarea
            rows={3}
            {...register("designConcept")}
            className="w-full px-3 py-2 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-700 rounded text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-white resize-y"
            placeholder="Elaborate on spatial geometry, circulation paths, environmental site conditions..."
          />
        </div>


        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 capitalize tracking-wider mb-2">
            Material Specification
          </label>

          <textarea
            rows={2}
            {...register("materialsUsed")}
            className="w-full px-3 py-2 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-700 rounded text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-white resize-y"
            placeholder="e.g., Board-formed fair-face concrete, structural glass panels, oxidized copper facade sheets"
          />
        </div>

      </div>

    </section>
  );
}