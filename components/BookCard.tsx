"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import Script from "next/script";
import {  useRouter } from "next/navigation";

export interface BookCardProps {
  bookId: string;
}

interface BookData {
  _id?: string;
  name?: string;
  price?: number;
  coverImage?: string;
}

export default function BookCard({ bookId }: BookCardProps) {
  const [data, setData] = useState<BookData | null>(null);
  const [loading, setLoading] = useState(true);
 
 

  const res = useUser();
  const user = res.user ?? null;
  const isPayed = user?.books.includes(bookId);
  const router = useRouter()

  

 

  useEffect(() => {
    if (!bookId) return;
    

    const getBook = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/getBookImages/${bookId}`);

        if (!res.ok) {
          throw new Error("Failed to fetch book");
        }

        const json = await res.json();


        setData(json?.book);
      } catch (err) {
        console.error("Failed to fetch book images", err);
      } finally {
        setLoading(false);
      }
    };

    

    getBook();
  }, [bookId]);

  const downloadBook = async () =>{

    try {
      if(!user){
        alert("user not found please login");
        return;
      }
        const res = await fetch(`/api/download-book/${bookId}`,{
            method : "GET",
            headers : {
                "Content-Type": "application/json",
                "x-user-id" : user?.id.toString()
            }
            

        });
        if(!res.ok){
          alert("download fail");
          return;
        }

        const blob = await res.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "book.pdf";

    document.body.appendChild(a);
    a.click();

    a.remove();

    window.URL.revokeObjectURL(url);
    } catch (error) {
        alert("something went wrong please try again")
    }
  }





     const payNow = useCallback(async () => {
    

    if (!user) {
        router.push("/auth")
    }

    try {
      // 1. Create order on server
      const response = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId: bookId,
          name: user?.name,
          number: user?.number,
        }),
      });

      const orderData = await response.json();

      if (!response.ok || !orderData.success) {
        console.error(orderData.message);
        return;
      }

      // 2. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: orderData.amount,

        currency: orderData.currency,

        name: "LifeSiddhi",

        description: "Lal Kitab Remedies",

        order_id: orderData.orderId,

        prefill: {
          name: user?.name,
          contact: user?.number,
        },

        theme: {
          color: "#e87524",
        },

        handler: async function (paymentResponse: any) {

          const res = await fetch("/api/razorpay/verify",{
             method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_signature: paymentResponse.razorpay_signature,
        }),

          })

          
        },

        modal: {
          ondismiss: function () {
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {
      console.error("Payment error:", error);
    }
  }, [bookId, user]);

  if (loading) {
    return (
      <section className="mx-auto flex min-h-[500px] max-w-7xl items-center justify-center px-6">
        <p className="text-gray-500">Loading book...</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="mx-auto flex min-h-[500px] max-w-7xl items-center justify-center px-6">
        <p className="text-red-500">Unable to load book.</p>
      </section>
    );
  }



  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
         <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <div className="grid overflow-hidden rounded-3xl bg-primary/5 md:grid-cols-2">
        
        {/* Book Image */}
        <div className="flex min-h-[450px] items-center justify-center p-8 md:min-h-[600px] md:p-12">
          <div className="relative flex h-[420px] w-full max-w-[350px] items-center justify-center md:h-[520px]">
            {data.coverImage ? (
              <Image
                src={"/Book buy page Desktop.png"}
                alt={data.name  || "Book cover"}
                width={600}
                height={600}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-200 text-gray-500">
                No image
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center px-8 py-10 md:px-12 lg:px-16">
          
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Digital Book
          </p>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            {data.name  || "Laal Kitab"}
          </h1>

          <div className="my-6 h-px w-full bg-gray-200" />

          <p className="text-base leading-7 text-gray-600 md:text-lg">
            {data?.description ||
              "This is a beautiful book filled with useful knowledge and interesting content. A detailed description of the book will be added here later."}
          </p>

          {/* Price */}
          <div className="mt-8">
            <p className="text-sm text-gray-500">Price</p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              ₹{data.price ?? 0}
            </p>
          </div>

          {/* Pay Button */}
          <button
            type="button"
            onClick={isPayed ? downloadBook : payNow}
            className="mt-8 w-full rounded-xl bg-black px-6 py-4 text-base font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98] md:w-auto md:min-w-[220px]"
          >
            {isPayed ? "Download" : "Buy now"}
          </button>

          <p className="mt-4 text-xs text-gray-500">
            Secure payment • Instant access after purchase
          </p>
        </div>
      </div>
    </section>
  );
}