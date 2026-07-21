"use client";

import React, { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Images, X } from "lucide-react";

interface GalleryPreview {
  id: string;
  url: string;
}

export default function ProjectGallery() {
  const { setValue } = useFormContext();

  const files = (useWatch({ name: "galleryImages" }) || []) as File[];

  const [previews, setPreviews] = useState<GalleryPreview[]>([]);

  useEffect(() => {
    if (!files.length) {
      setPreviews([]);
      return;
    }

    const mapped = files.map((file) => ({
      id: `${file.name}-${file.size}`,
      url: URL.createObjectURL(file),
    }));

    setPreviews(mapped);

    return () => mapped.forEach((item) => URL.revokeObjectURL(item.url));
  }, [files]);

  const handleMultipleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      const targetFiles = Array.from(selectedFiles);

      setValue(
        "galleryImages",
        [...files, ...targetFiles],
        {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        }
      );
    }
  };

  const removeImage = (index: number) => {
    const nextList = files.filter((_, i) => i !== index);

    setValue(
      "galleryImages",
      nextList,
      {
        shouldValidate: true,
        shouldDirty: true,
      }
    );
  };

  return (
    <section className="bg-white dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-5 transition-colors">
      <h2 className="text-lg font-medium text-neutral-800 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
        Supporting Render Gallery
      </h2>
      
      <div className="space-y-4">

        <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-6 flex flex-col items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-500 transition cursor-pointer relative bg-neutral-50 dark:bg-neutral-950">

          <input
            type="file"
            multiple
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleMultipleChange}
          />

          <Images className="h-7 w-7 text-neutral-400 dark:text-neutral-500 mb-2" />

          <p className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">
            Add supplementary gallery items
          </p>

        </div>


        {previews.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

            {previews.map((item, index) => (

              <div 
                key={item.id} 
                className="relative aspect-video rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 overflow-hidden group"
              >

                <img 
                  src={item.url} 
                  alt="Gallery item" 
                  className="w-full h-full object-cover" 
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 p-1 bg-red-600 hover:bg-red-700 text-white rounded transition"
                >
                  <X className="h-3 w-3" />
                </button>

              </div>

            ))}

          </div>
        )}

      </div>
    </section>
  );
}