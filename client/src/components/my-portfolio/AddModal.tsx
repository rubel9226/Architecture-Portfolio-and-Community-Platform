"use client";

import { useUser } from "@/hooks/AuthContext";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: {
    image: File | null;
    description: string;
  }) => void;
}

export default function AddItemModal({ open, onClose, onSubmit, userData}: Props) {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [image, setImage] = useState<File | null>(null);
    const [pdf, setPdf] = useState<File | null>(null);
    const [imgPreview, setImgPreview] = useState(userData?.aboutImage);
    const [pdfPreview, setPdfPreview] = useState(userData?.resume);
    const [description, setDescription] = useState(userData?.aboutDescription);

    const {token} = useUser();
    const router = useRouter();


    useEffect(() => {
        if(imgPreview != userData?.aboutImage || pdfPreview != userData?.resume || description != userData?.aboutDescription){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [userData, pdf, pdfPreview, imgPreview, description]);


    if (!open) return null;

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setImage(file); 
        setImgPreview(URL.createObjectURL(file));
    };
    
    const handlePdfChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        
        setPdf(file);
        setPdfPreview(URL.createObjectURL(file));
        
    };

    const handleSave =async () => {
        setLoading(true)
        try {
            const res = await api.put('/portfolio/update-about',
                {
                    aboutImage: image,
                    resume: pdf,
                    aboutDescription: description
                },
                {
                    headers: { 
                        "Content-Type": "multipart/form-data", 
                        Authorization: token 
                    },
                }
            ); 
            
            router.refresh();
            onClose();

            setImage(null);
            setPdf(null);
            setImgPreview(userData?.aboutImage); 
            setPdfPreview(userData?.resume); 
            setDescription(userData?.aboutDescription);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(true)
        } 
    };

    const handleClose = () => {
        setImage(null);
        setPdf(null);
        setImgPreview(userData?.aboutImage); 
        setPdfPreview(userData?.resume); 
        setDescription(userData?.aboutDescription);
        onClose();
    };


    return createPortal (
        <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/70 backdrop-blur-sm sm:p-5">
            <div className="flex min-h-full items-center justify-center sm:py-4">

                <div className="w-full max-w-2xl sm:rounded-2xl border border-slate-700 bg-slate-900 p-4 sm:p-6 lg:p-8 shadow-2xl">

                    <div className="mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                            Add About Me
                        </h2>
                        <p className="mt-1 text-xs sm:text-sm text-slate-400">
                            Upload an image and write a short description.
                        </p>
                    </div>


                    <div className="space-y-3">
                        <label className="block text-sm font-medium text-slate-300">
                            Upload Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-2 text-sm text-slate-300 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
                        />

                        {imgPreview && (
                            <img
                                src={imgPreview}
                                alt="Preview"
                                className="h-40 sm:h-52 lg:h-60 w-full rounded-xl border border-slate-700 object-cover"
                            />
                        )}
                    </div>


                    <div className="space-y-3 mt-5">
                        <label className="block text-sm font-medium text-slate-300">
                            Upload PDF
                        </label>

                        <input
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={handlePdfChange}
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-2 text-sm text-slate-300 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
                        />

                        {pdfPreview && (
                            <iframe
                                src={pdfPreview}
                                alt="Preview"
                                className="h-40 sm:h-52 lg:h-60 w-full rounded-xl border border-slate-700 bg-white"
                                />
                        )}
                    </div>

                    <div className="mt-5 space-y-3">
                        <label className="block text-sm font-medium text-slate-300">
                            Description
                        </label>

                        <textarea
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Write something about yourself..."
                            className="w-full min-h-[120px] sm:min-h-[160px] resize-none rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-blue-500"
                        />
                    </div>


                    <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                        <button
                            onClick={handleClose}
                            className="w-full sm:w-auto rounded-lg bg-slate-700 px-5 py-3"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleSave}
                            disabled={disabled}
                            className="w-full sm:w-auto rounded-lg bg-blue-600 px-5 py-3 disabled:bg-blue-700/50"
                        >
                            {loading ? 'Updating...' : 'Update About'}
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}