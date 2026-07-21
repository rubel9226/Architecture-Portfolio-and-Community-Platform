"use client";

import { CATEGORIES } from "@/validation/addSchema";
import React from "react";
import { useFormContext } from "react-hook-form"; 

export default function CategorySelector() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <section className="bg-white dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-5 transition-colors">
      <h2 className="text-lg font-medium text-neutral-800 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
        Context Classification
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-2">
            Category *
          </label>

          <select
            {...register("category")}
            className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-white"
          >
            <option value="">Select Category</option>

            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}

          </select>

          {errors.category && (
            <p className="text-xs text-red-500 mt-1">
              {String(errors.category.message)}
            </p>
          )}

        </div>


        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-2">
            Project Type *
          </label>

          <input
            type="text"
            {...register("projectType")}
            className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-white"
            placeholder="e.g., Academic, Institutional"
          />

          {errors.projectType && (
            <p className="text-xs text-red-500 mt-1">
              {String(errors.projectType.message)}
            </p>
          )}

        </div>


        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-2">
            Year *
          </label>

          <input
            type="text"
            {...register("year")}
            className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm focus:outline-none focus:border-neutral-900 dark:focus:border-white"
            placeholder="e.g., 2026"
          />

          {errors.year && (
            <p className="text-xs text-red-500 mt-1">
              {String(errors.year.message)}
            </p>
          )}

        </div>

      </div>
    </section>
  );
}