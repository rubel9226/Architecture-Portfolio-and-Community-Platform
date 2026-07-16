'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from '@/types/project';

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight text-slate-900">Project Canvas</h3>
      <div className="columns-1 sm:columns-2 gap-4 space-y-4">
        {images.map((img) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.015 }}
            onClick={() => setSelectedImage(img.url)}
            className={`relative break-inside-avoid overflow-hidden rounded-2xl bg-slate-100 cursor-zoom-in border border-slate-200 shadow-sm ${img.aspectRatio}`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-6xl w-full h-[85vh]"
            >
              <Image src={selectedImage} alt="Expanded Preview" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}