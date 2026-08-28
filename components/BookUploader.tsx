"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/superbaseconfig";
import Button from "./Button";

export interface BookUploaderProps {
  open: boolean;
  onClose: () => void;
}

export default function BookUploader({
  open,
  onClose,
}: BookUploaderProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [priceToShow, setPriceToShow] = useState("");
  const [coverPicture, setCoverPicture] = useState<File | null>(null);
  const [pdf, setPdf] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // -------------------------
    // Validation
    // -------------------------

    if (!name.trim()) {
      alert("Please enter your book name");
      return;
    }

    const priceNumber = Number(price);
    const priceToShowNumber = Number(priceToShow);

    if (priceNumber <= 0 || priceToShowNumber <= 0) {
      alert("Price or Price To Show is not correct");
      return;
    }

    if (!coverPicture) {
      alert("Please upload a cover picture");
      return;
    }

    if (!pdf) {
      alert("Please upload the book PDF");
      return;
    }

    if (!coverPicture.type.startsWith("image/")) {
      alert("Please upload a valid image");
      return;
    }

    if (pdf.type !== "application/pdf") {
      alert("Please upload a valid PDF");
      return;
    }

    // Optional file size validation
    const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB
    const MAX_PDF_SIZE = 500 * 1024 * 1024; // 500 MB

    if (coverPicture.size > MAX_IMAGE_SIZE) {
      alert("Cover image must be smaller than 10 MB");
      return;
    }

    if (pdf.size > MAX_PDF_SIZE) {
      alert("PDF must be smaller than 500 MB");
      return;
    }

    try {
      setLoading(true);

    
      const timestamp = Date.now();

      const imageExtension =
        coverPicture.name.split(".").pop()?.toLowerCase() || "jpg";

      const pdfExtension = "pdf";

      const imagePath = `books/${timestamp}-${crypto.randomUUID()}.${imageExtension}`;

      const pdfPath = `books/${timestamp}-${crypto.randomUUID()}.${pdfExtension}`;

      // --------------------------------
      // Upload cover image
      // --------------------------------

      const { error: imageError } = await supabase.storage
        .from("Images")
        .upload(imagePath, coverPicture, {
          contentType: coverPicture.type,
          cacheControl: "3600",
          upsert: false,
        });


      if (imageError) {
        throw new Error(
          `Cover image upload failed: ${imageError.message}`
        );
      }

   

      // --------------------------------
      // Upload PDF
      // --------------------------------

      const { error: pdfError } = await supabase.storage
        .from("pdf")
        .upload(pdfPath, pdf, {
          contentType: "application/pdf",
          cacheControl: "3600",
          upsert: false,
        });

      if (pdfError) {
        // If PDF fails, remove the image we already uploaded
        await supabase.storage
          .from("images")
          .remove([imagePath]);

        throw new Error(
          `PDF upload failed: ${pdfError.message}`
        );
      }



      // --------------------------------
      // Get public URL for cover image
      // --------------------------------

      const {
        data: { publicUrl },
      } = supabase.storage
        .from("images")
        .getPublicUrl(imagePath);

      // --------------------------------
      // Save book information
      // --------------------------------

      const response = await fetch("/api/bookService", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          price: priceNumber,
          priceToShow: priceToShowNumber,

          // Public image URL
          coverPicture: publicUrl,

          // Storage path of private PDF
          pdfPath: pdfPath,

          // Optional: also store image path
          coverPicturePath: imagePath,
        }),
      });

      const data = await response.json();

 

      if (!response.ok) {
        // If database insertion fails, clean up uploaded files
        await supabase.storage
          .from("images")
          .remove([imagePath]);

        await supabase.storage
          .from("pdfs")
          .remove([pdfPath]);

        throw new Error(
          data.message || "Failed to save book information"
        );
      }

   

      alert("Book uploaded successfully!");

      // --------------------------------
      // Reset form
      // --------------------------------

      setName("");
      setPrice("");
      setPriceToShow("");
      setCoverPicture(null);
      setPdf(null);

      onClose();
    } catch (error) {
      console.error("Book upload failed:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Book upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Upload Book
          </h2>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="text-2xl text-gray-500 hover:text-gray-900 disabled:opacity-50"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Book Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter book name"
              required
              disabled={loading}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-black disabled:bg-gray-100"
            />
          </div>

          {/* Price */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Price
              </label>

              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="499"
                required
                min="1"
                disabled={loading}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-black disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Price To Show
              </label>

              <input
                type="number"
                value={priceToShow}
                onChange={(e) => setPriceToShow(e.target.value)}
                placeholder="8000"
                required
                min="1"
                disabled={loading}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-black disabled:bg-gray-100"
              />
            </div>
          </div>

          {/* Cover Picture */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Cover Picture
            </label>

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              required
              disabled={loading}
              onChange={(e) =>
                setCoverPicture(e.target.files?.[0] || null)
              }
              className="block w-full rounded-lg border border-gray-300 p-2 text-sm disabled:bg-gray-100"
            />

            {coverPicture && (
              <p className="mt-1 truncate text-xs text-gray-500">
                Selected: {coverPicture.name}
              </p>
            )}
          </div>

          {/* PDF */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Book PDF
            </label>

            <input
              type="file"
              accept="application/pdf"
              required
              disabled={loading}
              onChange={(e) =>
                setPdf(e.target.files?.[0] || null)
              }
              className="block w-full rounded-lg border border-gray-300 p-2 text-sm disabled:bg-gray-100"
            />

            {pdf && (
              <p className="mt-1 truncate text-xs text-gray-500">
                Selected: {pdf.name}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              onClick={onClose}
              variant="secondary"
              disabled={loading}
              className="w-full sm:w-auto"
            >
              Close
            </Button>

            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              className="w-full sm:w-auto"
            >
              Upload
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}