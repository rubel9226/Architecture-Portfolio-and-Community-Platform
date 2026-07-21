"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

export default function VisibilitySelector() {
  const { register, watch } = useFormContext();
  const selected = watch("visibility");

  return (
    <section className="bg-white dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-4 transition-colors">

      <h2 className="text-lg font-medium text-neutral-800 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
        Publish Target Visibility
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        <label 
          className={`flex items-start gap-3 p-4 border rounded cursor-pointer transition ${
            selected === "PUBLIC" 
              ? "border-neutral-900 dark:border-white " 
              : "border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
          }`}
        >

          <input 
            type="radio" 
            value="PUBLIC" 
            {...register("visibility")} 
            className="mt-1 accent-neutral-950" 
          />

          <div>
            <span className="text-sm font-semibold text-neutral-800 dark:text-white flex items-center gap-1.5">
              <Eye className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              Public Exposure
            </span>

            <span className="block text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
              Visible globally on search aggregates, personal boards, and discover engines.
            </span>
          </div>

        </label>



        <label 
          className={`flex items-start gap-3 p-4 border rounded cursor-pointer transition ${
            selected === "PRIVATE" 
              ? "border-neutral-900 dark:border-white" 
              : "border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
          }`}
        >

          <input 
            type="radio" 
            value="PRIVATE" 
            {...register("visibility")} 
            className="mt-1 accent-neutral-950" 
          />

          <div>
            <span className="text-sm font-semibold text-neutral-800 dark:text-white flex items-center gap-1.5">
              <EyeOff className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              Private Vault
            </span>

            <span className="block text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
              Accessible only via authenticated workspace dashboards. Invisible to visitors.
            </span>
          </div>

        </label> 
      </div> 
    </section>
  );
}