"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

export default function ProjectInformation() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <section className="bg-white dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-5 transition-colors">
      <h2 className="text-lg font-medium text-neutral-800 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
        Basic Info
      </h2>
      
      <div className="grid grid-cols-1 gap-4">

        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-2">
            Project Title *
          </label>

          <input
            type="text"
            {...register("title")}
            className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded text-sm bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white"
            placeholder="Enter project title"
          />

          {errors.title && (
            <p className="text-xs text-red-500 mt-1">
              {String(errors.title.message)}
            </p>
          )}
        </div>


        <div>
          <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-2">
            Overview / Executive Summary *
          </label>

          <textarea
            rows={5}
            {...register("overview")}
            className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded text-sm bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white resize-y"
            placeholder="Provide a comprehensive background statement outlining parameters, space planning goals, structural constraints..."
          />

          {errors.overview && (
            <p className="text-xs text-red-500 mt-1">
              {String(errors.overview.message)}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}