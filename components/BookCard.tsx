"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { trackMetaEvent } from "@/lib/meta-pixel";

export interface BookCardProps {
  bookId: string;
}

interface BookData {
  _id?: string;
  name?: string;
  price?: number;
  priceToShow?: number;
  coverImage?: string;
}

export default function BookCard({ bookId }: BookCardProps) {
  const [data, setData] = useState<BookData | null>(null);
  const [loading, setLoading] = useState(true);

  const { user } = useUser();
  const router = useRouter();

  const isPayed = user?.books?.includes(bookId);

  // Fetch book
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

  // Download book
  const downloadBook = async () => {
    try {
      if (!user) {
        alert("User not found. Please login.");
        return;
      }

      const res = await fetch(`/api/download-book/${bookId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": user.id.toString(),
        },
      });

      if (!res.ok) {
        alert("Download failed");
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
      console.error("Download error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Payment
  const payNow = useCallback(async () => {
    if (!user) {
      router.push("/auth");
      return;
    }

    try {

      trackMetaEvent("AddToCart", {
  content_name: "Lal Kitab",
  value: 99,
  currency: "INR",
});
  
      // 1. Create order on server
      const response = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId: bookId,
          name: user.name,
          number: user.number,
        }),
      });

      const orderData = await response.json();

      if (!response.ok || !orderData.success) {
        console.error(orderData.message);

        alert(
          orderData.message || "Unable to create order"
        );

        return;
      }

      // 2. Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: orderData.amount,

        currency: orderData.currency,

        name: "LifeSiddhi",

        description: "Lal Kitab Remedies",

        order_id: orderData.orderId,

        prefill: {
          name: user.name,
          contact: user.number,
        },

        theme: {
          color: "#e87524",
        },

        // 3. Payment successful
        handler: async function (paymentResponse: any) {
          try {
            const res = await fetch("/api/razorpay/verify", {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,

                razorpay_order_id:
                  paymentResponse.razorpay_order_id,

                razorpay_signature:
                  paymentResponse.razorpay_signature,
              }),
            });

            const result = await res.json();

            if (!res.ok || !result.success) {
              alert(
                result.message ||
                  "Payment verification failed"
              );

              return;
            }

            if(res.ok){
               trackMetaEvent("Purchase", {
    value: 99,
    currency: "INR",
    content_name: "Lal Kitab",
    content_type: "product",
  });
            }
            window.location.reload();
          } catch (error) {
            console.error(
              "Payment verification error:",
              error
            );

            alert(
              "Payment verification failed. Please contact support."
            );
          }
        },

        modal: {
          ondismiss: function () {
          },
        },
      };

      // Make sure Razorpay is loaded
      if (!window.Razorpay) {
        alert(
          "Payment system is still loading. Please try again."
        );

        return;
      }

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);

      alert(
        "Something went wrong. Please try again."
      );
    }
  }, [bookId, user, router]);

  // Loading state
  if (loading) {
    return (
      <section className="mx-auto flex min-h-[500px] max-w-7xl items-center justify-center px-4 sm:px-6">
        <p className="text-sm text-gray-500 sm:text-base">
          Loading book...
        </p>
      </section>
    );
  }

  // Book not found
  if (!data) {
    return (
      <section className="mx-auto flex min-h-[500px] max-w-7xl items-center justify-center px-4 sm:px-6">
        <p className="text-sm text-red-500 sm:text-base">
          Unable to load book.
        </p>
      </section>
    );
  }

 return (
  <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 md:px-8 lg:px-10 xl:px-12">
    <Script
      src="https://checkout.razorpay.com/v1/checkout.js"
      strategy="afterInteractive"
    />

    <div className="overflow-hidden rounded-2xl bg-primary/5 sm:rounded-3xl">

      {/* =========================
          MOBILE BOOK AREA
      ========================== */}
      <div className="md:hidden">

        {/* Book Image */}
        <div className="flex items-center justify-center px-6 pt-8 pb-4">
          <div className="relative w-full max-w-[280px]">
            {data.coverImage ? (
              <Image
                src="/lal_kitab_book_2.webp"
                alt={data.name || "Book cover"}
                width={600}
                height={600}
                priority
                className="h-auto w-full object-contain"
              />
            ) : (
              <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-gray-200 text-sm text-gray-500">
                No image
              </div>
            )}
          </div>
        </div>

        {/* Book Name + Purchase */}
        <div className="px-6 pb-8 text-center">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Digital Book
          </p>

          <h1 className="text-2xl font-bold leading-tight text-gray-900">
            {data.name || "Laal Kitab"}
          </h1>

          {/* Price */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <p className="text-2xl font-bold text-red-700">
              ₹{Number(data.price ?? 0).toFixed(2)}
            </p>

            {data.priceToShow && (
              <p className="text-base text-gray-500 line-through">
                ₹{Number(data.priceToShow).toFixed(2)}
              </p>
            )}
          </div>

          {/* Buy Button */}
          <button
            type="button"
            onClick={isPayed ? downloadBook : payNow}
            className="mt-5 w-full cursor-pointer rounded-xl bg-text-meta px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            {isPayed ? "Download" : "Buy now"}
          </button>

          <p className="mt-3 text-[11px] text-gray-500">
            Secure payment • Instant download after purchase
          </p>
        </div>
      </div>


      {/* =========================
          DESKTOP + TABLET
      ========================== */}
      <div className="hidden md:grid md:grid-cols-2">

        {/* Book Image */}
        <div className="flex min-h-[600px] items-center justify-center p-10 lg:p-14">
          <div className="relative flex w-full max-w-[350px] items-center justify-center">
            {data.coverImage ? (
              <Image
                src="/lal_kitab_book_2.webp"
                alt={data.name || "Book cover"}
                width={600}
                height={600}
                priority
                className="h-auto w-full object-contain"
              />
            ) : (
              <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-gray-200 text-sm text-gray-500">
                No image
              </div>
            )}
          </div>
        </div>

        {/* Desktop Details */}
        <div className="flex flex-col justify-center px-8 py-12 lg:px-12 xl:px-14">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Digital Book
          </p>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 lg:text-[42px]">
            {data.name || "Laal Kitab"}
          </h1>

          <div className="my-6 h-px w-full bg-gray-200" />

          <h2 className="text-2xl font-bold leading-snug text-gray-900">
            What if the solution to a recurring problem is simpler than you think?
          </h2>

          <ul className="mt-6 space-y-3 text-base leading-7 text-gray-600">

            <li className="relative pl-5">
              <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary" />

              If you’ve been facing repeated obstacles in your career,
              finances, relationships, family life, or overall progress,
              you may have wondered,
              <span className="font-medium text-gray-700">
                {" "}“Why does this keep happening to me?”
              </span>
            </li>

            <li className="relative pl-5">
              <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary" />

              I created this Lal Kitab guide to help you understand
              these patterns through the unique principles of Lal Kitab —
              and, most importantly, to show you the remedies you can
              actually put into practice.
            </li>

            <li className="relative pl-5">
              <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary" />

              Inside, I’ve included practical Lal Kitab remedies,
              planetary solutions, and traditional techniques explained
              in a simple, easy-to-follow manner.
            </li>

            <li className="relative pl-5">
              <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary" />

              You don’t need to be an astrology expert. You simply need
              to understand what is affecting you, what you can do about
              it, and how to follow the remedy correctly.
            </li>

          </ul>

          <p className="mt-6 text-base font-semibold leading-7 text-gray-800">
            Read it. Understand your chart. Apply the right remedies.
          </p>

          {/* Price */}
          <div className="mt-7">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Price
            </p>

            <div className="mt-1 flex items-center gap-2">
              <p className="text-3xl font-bold text-red-700">
                ₹{Number(data.price ?? 0).toFixed(2)}
              </p>

              {data.priceToShow && (
                <p className="text-lg text-gray-500 line-through">
                  ₹{Number(data.priceToShow).toFixed(2)}
                </p>
              )}
            </div>
          </div>

          {/* Buy */}
          <button
            type="button"
            onClick={isPayed ? downloadBook : payNow}
            className="mt-7 w-full cursor-pointer rounded-xl bg-text-meta px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] md:w-auto md:min-w-[220px]"
          >
            {isPayed ? "Download" : "Buy now"}
          </button>

          <p className="mt-4 text-xs text-gray-500">
            Secure payment • Instant download after purchase
          </p>

        </div>
      </div>


      {/* =========================
          MOBILE DESCRIPTION
      ========================== */}
      <div className="border-t border-gray-200 bg-white px-6 py-8 md:hidden">

        <h2 className="text-xl font-bold leading-snug text-gray-900">
          What if the solution to a recurring problem is simpler than you think?
        </h2>

        <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-600">

          <li className="relative pl-5">
            <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary" />

            If you’ve been facing repeated obstacles in your career,
            finances, relationships, family life, or overall progress,
            you may have wondered,
            <span className="font-medium text-gray-700">
              {" "}“Why does this keep happening to me?”
            </span>
          </li>

          <li className="relative pl-5">
            <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary" />

            I created this Lal Kitab guide to help you understand
            these patterns through the unique principles of Lal Kitab —
            and, most importantly, to show you the remedies you can
            actually put into practice.
          </li>

          <li className="relative pl-5">
            <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary" />

            Inside, I’ve included practical Lal Kitab remedies,
            planetary solutions, and traditional techniques explained
            in a simple, easy-to-follow manner.
          </li>

          <li className="relative pl-5">
            <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary" />

            You don’t need to be an astrology expert. You simply need
            to understand what is affecting you, what you can do about
            it, and how to follow the remedy correctly.
          </li>

        </ul>

        <p className="mt-5 text-sm font-semibold leading-6 text-gray-800">
          Read it. Understand your chart. Apply the right remedies.
        </p>

      </div>
    </div>
  </section>
);
}