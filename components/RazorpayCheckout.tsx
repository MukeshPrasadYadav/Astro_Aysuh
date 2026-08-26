"use client";

import { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayCheckoutProps {
  amount: number; // in INR (e.g. 499 for ₹499)
  productName?: string;
  userName?: string;
  userEmail?: string;
  userContact?: string;
  onSuccess?: (paymentId: string, orderId: string) => void;
  onFailure?: (error: any) => void;
}

export default function RazorpayCheckout({
  amount,
  productName = "Product Purchase",
  userName = "",
  userEmail = "",
  userContact = "",
  onSuccess,
  onFailure,
}: RazorpayCheckoutProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // 1. Create Order on Backend
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency: "INR",
          notes: { product: productName },
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.success) {
        throw new Error(orderData.message || "Failed to create order");
      }

      // 2. Open Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Your Company Name",
        description: productName,
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            // 3. Verify Payment on Backend
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              onSuccess?.(response.razorpay_payment_id, response.razorpay_order_id);
              alert("Payment successful!");
              // Optional: redirect
              // window.location.href = "/success";
            } else {
              throw new Error(verifyData.message || "Verification failed");
            }
          } catch (verifyError: any) {
            console.error("Verification error:", verifyError);
            setError(verifyError.message || "Payment verification failed");
            onFailure?.(verifyError);
          }
        },
        prefill: {
          name: userName,
          email: userEmail,
          contact: userContact,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            setError("Payment cancelled by user");
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response: any) {
        console.error("Payment Failed:", response.error);
        setError(response.error.description || "Payment failed");
        onFailure?.(response.error);
        setLoading(false);
      });

      rzp.open();
    } catch (err: any) {
      console.error("Payment initiation error:", err);
      setError(err.message || "Something went wrong. Please try again.");
      onFailure?.(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handlePayment}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {loading ? "Processing..." : `Pay ₹${amount}`}
      </button>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      {/* Load Razorpay Checkout script */}
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
    </div>
  );
}