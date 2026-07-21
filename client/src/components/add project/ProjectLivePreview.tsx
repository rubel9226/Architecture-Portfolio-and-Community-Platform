"use client";

import React, { useState, useEffect } from "react";
import { useWatch, useFormContext } from "react-hook-form";
import { MapPin, Calendar, Layout, Eye, EyeOff } from "lucide-react";

export default function ProjectLivePreview() {
  const { control } = useFormContext();
  
  const title = useWatch({ control, name: "title" });
  const category = useWatch({ control, name: "category" });
  const overview = useWatch({ control, name: "overview" });
  const location = useWatch({ control, name: "location" });
  const year = useWatch({ control, name: "year" });
  const softwareUsed = useWatch({ control, name: "softwareUsed" }) || [];
  const visibility = useWatch({ control, name: "visibility" });
  const coverImage = useWatch({ control, name: "coverImage" });

  const [coverUrl, setCoverUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!coverImage) {
      setCoverUrl(null);
      return;
    }

    const url = URL.createObjectURL(coverImage);
    setCoverUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [coverImage]);

  return (
    <aside className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm transition-colors">

      <div className="bg-neutral-900 dark:bg-neutral-950 px-4 py-2.5 flex items-center justify-between text-white">

        <span className="text-xs font-semibold tracking-wider uppercase opacity-60">
          Live Card View
        </span>

        <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-white/10 px-2 py-0.5 rounded">
          {visibility === "PUBLIC" 
            ? <Eye className="h-3 w-3" /> 
            : <EyeOff className="h-3 w-3" />
          }

          {visibility}
        </span>

      </div>


      <div className="relative aspect-video w-full bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-center overflow-hidden">

        {coverUrl ? (
          <img 
            src={coverUrl} 
            alt="Preview Hero Asset" 
            className="w-full h-full object-cover" 
          />
        ) : (

          <div className="text-center p-4">

            <Layout className="h-8 w-8 text-neutral-300 dark:text-neutral-600 mx-auto mb-1.5" />

            <span className="text-xs text-neutral-400 dark:text-neutral-500 block font-medium">
              No cover layout assigned
            </span>

          </div>

        )}

      </div>


      <div className="p-5 space-y-4">


        <div className="space-y-1">

          <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
            {category || "Unclassified Category"}
          </div>


          <h3 className="text-lg font-light tracking-tight text-neutral-900 dark:text-white break-words line-clamp-1">
            {title || "Untitled Architecture Project"}
          </h3>

        </div>



        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3 bg-neutral-50 dark:bg-neutral-800 p-2.5 rounded border border-neutral-100 dark:border-neutral-700 italic">
          {overview || "Provide case documentation to populate summary details..."}
        </p>




        <div className="grid grid-cols-2 gap-2 text-xs border-t border-neutral-100 dark:border-neutral-800 pt-3 text-neutral-600 dark:text-neutral-300">

          <div className="flex items-center gap-1.5 truncate">

            <MapPin className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500 shrink-0" />

            <span className="truncate">
              {location || "Not Specifed"}
            </span>

          </div>


          <div className="flex items-center gap-1.5 justify-end">

            <Calendar className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500 shrink-0" />

            <span>
              {year || "—"}
            </span>
          </div>
        </div>

        {softwareUsed.length > 0 && (
          <div className="border-t border-neutral-100 dark:border-neutral-800 pt-3">

            <div className="text-[9px] font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-1.5">
              Apparatus Stack
            </div>

            <div className="flex flex-wrap gap-1">

              {softwareUsed.map((tool: string) => (
                <span 
                  key={tool} 
                  className="text-[10px] px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}