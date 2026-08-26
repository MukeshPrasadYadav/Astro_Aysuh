"use client";

import BookCard from "@/components/BookCard";
import { useUser } from "@/context/UserContext";
import { useCallback } from "react";
import { use } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const data = useUser();
  const user = data?.user ?? null;

 

  return (
    <>
     

      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text">

        <BookCard bookId={slug} />


      </div>
    </>
  );
}