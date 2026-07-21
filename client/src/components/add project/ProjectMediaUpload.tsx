"use client";

import React, { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Upload, X } from "lucide-react";

export default function ProjectMediaUpload() {
  const { setValue, formState: { errors } } = useFormContext();

  const file = useWatch({ name: "coverImage" }) as File | null;
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setValue("coverImage", selectedFile, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  };

  return (
    <section className="bg-white dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-5 transition-colors">

      <h2 className="text-lg font-medium text-neutral-800 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
        Hero Cover Graphic
      </h2>

      <div>

        <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-2">
          Cover Image *
        </label>

        {!preview ? (

          <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-8 flex flex-col items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-500 transition cursor-pointer relative bg-neutral-50 dark:bg-neutral-950">

            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />

            <Upload className="h-8 w-8 text-neutral-400 dark:text-neutral-500 mb-2" />

            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">
              Click to upload main resolution image
            </p>

            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
              Accepts PNG, JPG, WEBP formats up to 8MB
            </p>

          </div>

        ) : (

          <div className="relative rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-800 max-h-[320px] border border-neutral-200 dark:border-neutral-700">

            <img
              src={preview}
              alt="Cover Preview"
              className="w-full h-full object-cover max-h-[320px]"
            />

            <button
              type="button"
              onClick={() =>
                setValue("coverImage", null, {
                  shouldValidate: true,
                  shouldDirty: true,
                })
              }
              className="absolute top-3 right-3 p-1.5 bg-neutral-900/80 hover:bg-neutral-900 text-white rounded-full transition"
            >
              <X className="h-4 w-4" />
            </button>

          </div>

        )}

        {errors.coverImage && (
          <p className="text-xs text-red-500 mt-1">
            {String(errors.coverImage.message)}
          </p>
        )}

      </div>

    </section>
  );
}