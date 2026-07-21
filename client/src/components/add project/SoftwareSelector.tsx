"use client";

import { SOFTWARE_OPTIONS } from "@/validation/addSchema";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

export default function SoftwareSelector() {
  const { setValue, formState: { errors } } = useFormContext();

  const selected: string[] = useWatch({
    name: "softwareUsed",
  }) || [];

  const toggleSelection = (tool: string) => {
    const current: string[] = selected || [];

    const updated = current.includes(tool)
      ? current.filter((t) => t !== tool)
      : [...current, tool];

    setValue("softwareUsed", updated, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <section className="bg-white dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-4 transition-colors">

      <div>
        <h2 className="text-lg font-medium text-neutral-800 dark:text-white">
          Software Suite *
        </h2>

        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
          Select tool suites leveraged during concept design, modeling, or rendering execution
        </p>
      </div>


      <div className="flex flex-wrap gap-2">

        {SOFTWARE_OPTIONS.map((tool) => {

          const isActive = selected.includes(tool);

          return (
            <button
              type="button"
              key={tool}
              onClick={() => {
                console.log("clicked:", tool);
                toggleSelection(tool);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded border transition cursor-pointer ${
                isActive
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900 dark:border-white"
                  : "bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
              }`}
            >
              {tool}
            </button>
          );

        })}

      </div>


      {errors.softwareUsed && (
        <p className="text-xs text-red-500 mt-1">
          {String(errors.softwareUsed.message)}
        </p>
      )}

    </section>
  );
}