"use client";

import { useEffect, useState } from "react";
import {
  UserRound,
  Phone,
  ShoppingBag,
  Download,
  Loader,
} from "lucide-react";
import { useUser, type Role } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import AdminProfilePage from "@/components/AdminProfile";

interface Iorder{
  _id : string;
  name : string;
  transactionId : string;
  amount : number;
  createdAt : string;
}

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date(date));
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"orders" | "Books">(
    "orders"
  );
  const[order,setOrder] = useState<Iorder []>([]);



  const data = useUser();


  const user = data?.user ?? null;
  const router = useRouter();
   useEffect(  () => {

    const getData = async () =>{
      if(!user) return;
      const res = await fetch(`/api/profile`,{
        method : "GET",
        headers :{
          "x-user-id": user.id.toString(),
        }
      });

      if(res.ok){
        const { data } = await res.json();
        setOrder(data);

         const paymentRes = await fetch("/api/razorpay/recheckPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": user.id,
        },
      });

      if (!paymentRes.ok) {
        console.error("Payment reconciliation failed");
        return;
      }

      const paymentResult = await paymentRes.json();

      const updatedProfileRes = await fetch("/api/profile", {
          method: "GET",
          headers: {
            "x-user-id": user.id,
          },
        });

        if (updatedProfileRes.ok) {
          const updatedProfileData = await updatedProfileRes.json();
          setOrder(updatedProfileData.data);
        }
      
      

      

      }

      if (!res.ok) {
          throw new Error("Failed to fetch admin stats");
        }

        


    }
     

    getData()
    

  },[user])

 

  if (data.loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader className="animate-spin text-primary" />
      </div>
    );
  }

  if (!user && !data?.loading) {
    router.push("/");
  }

  if (user && user.role === "ADMIN") {
    return <AdminProfilePage />;
  }

 

  return (
    <main className="min-h-screen bg-background text-text">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:py-14">

        {/* Page Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-section font-bold">
            My Profile
          </h1>

          <p className="text-body mt-3 max-w-2xl text-text-secondary">
            Manage your account, view your orders and keep track of your
            transactions.
          </p>
        </div>

        {/* Profile Card */}
        <section className="mb-8 rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6 md:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

            {/* Avatar */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-background-soft text-primary">
              <UserRound size={38} strokeWidth={1.7} />
            </div>

            {/* User Info */}
            <div className="min-w-0">
              <p className="text-label mb-1 text-text-muted">
                Account
              </p>

              <h2 className="text-card truncate font-semibold">
                {user?.name}
              </h2>

              <div className="mt-2 flex items-center gap-2 text-text-secondary">
                <Phone size={16} />

                <span className="text-body">
                  +91 {user?.number}
                </span>
              </div>
            </div>
          </div>
        </section>

       

        {/* Orders / Transactions */}
        <section className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">

          {/* Tabs */}
          <div className="flex border-b border-border px-4 sm:px-6">
            <button
              onClick={() => setActiveTab("orders")}
              className={`relative px-4 py-4 text-label font-semibold transition-colors sm:px-5 ${
                activeTab === "orders"
                  ? "text-primary"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              Orders

              {activeTab === "orders" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
              )}
            </button>

            
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">

            {/* Orders */}
            {activeTab === "orders" && (
              <div className="space-y-3">
                {order.map((order) => (
                  <div
                    key={order._id}

                    
                    className="flex flex-col gap-4 rounded-lg border border-border-light bg-surface-warm p-4 transition-colors hover:bg-surface-hover sm:flex-row sm:items-center sm:justify-between"
                  >
                    {/* Left */}
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background-soft text-primary">
                        <ShoppingBag size={19} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-label font-semibold">
                          {order?.name}
                        </h3>

                        <p className="text-label mt-1 text-text-muted">
                          {order?.transactionId} · {formatDate(order?.createdAt)}
                        </p>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <div className="text-left sm:text-right">
                        <p className="text-card font-semibold">
                          ₹ {order.amount}
                        </p>

                        <span className="text-label text-primary">
                          completed
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
           

          </div>
        </section>
      </div>
    </main>
  );
}