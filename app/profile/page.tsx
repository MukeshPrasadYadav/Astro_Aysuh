"use client";

import { useState } from "react";
import {
  UserRound,
  Phone,
  ShoppingBag,
  CreditCard,
  Download,
  ChevronRight,
} from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"orders" | "transactions">(
    "orders"
  );

  const orders = [
    {
      id: "ORD-1001",
      product: "Lal Kitab Remedies",
      date: "22 Aug 2026",
      amount: "₹499",
      status: "Completed",
    },
    {
      id: "ORD-1002",
      product: "Vedic Astrology Guide",
      date: "18 Aug 2026",
      amount: "₹299",
      status: "Completed",
    },
  ];

  const transactions = [
    {
      id: "TXN-1001",
      orderId: "ORD-1001",
      date: "22 Aug 2026",
      amount: "₹499",
      status: "Successful",
    },
    {
      id: "TXN-1002",
      orderId: "ORD-1002",
      date: "18 Aug 2026",
      amount: "₹299",
      status: "Successful",
    },
  ];

  const data = useUser();
  console.log("user in profile page",data.user)
  const user = data?.user ?? null;

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

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Orders */}
          <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                <ShoppingBag size={22} />
              </div>

              <span className="text-label text-text-muted">
                Orders
              </span>
            </div>

            <p className="text-section font-bold">
              {orders.length}
            </p>

            <p className="text-label mt-1 text-text-secondary">
              Total orders
            </p>
          </div>

          {/* Transactions */}
          <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                <CreditCard size={22} />
              </div>

              <span className="text-label text-text-muted">
                Transactions
              </span>
            </div>

            <p className="text-section font-bold">
              {transactions.length}
            </p>

            <p className="text-label mt-1 text-text-secondary">
              Total transactions
            </p>
          </div>

          {/* Total Spent */}
          <div className="rounded-xl border border-border bg-surface p-5 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                <CreditCard size={22} />
              </div>

              <span className="text-label text-text-muted">
                Total Spent
              </span>
            </div>

            <p className="text-section font-bold">
              ₹798
            </p>

            <p className="text-label mt-1 text-text-secondary">
              Across all orders
            </p>
          </div>
        </section>

        {/* Orders / Transactions */}
        <section className="rounded-xl border border-border bg-surface shadow-sm">

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

            <button
              onClick={() => setActiveTab("transactions")}
              className={`relative px-4 py-4 text-label font-semibold transition-colors sm:px-5 ${
                activeTab === "transactions"
                  ? "text-primary"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              Transactions

              {activeTab === "transactions" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
              )}
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">

            {activeTab === "orders" && (
              <div className="space-y-3">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex flex-col gap-4 rounded-lg border border-border-light bg-surface-warm p-4 transition-colors hover:bg-surface-hover sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background-soft text-primary">
                        <ShoppingBag size={19} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-label font-semibold">
                          {order.product}
                        </h3>

                        <p className="text-label mt-1 text-text-muted">
                          {order.id} · {order.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <div className="text-left sm:text-right">
                        <p className="text-card font-semibold">
                          {order.amount}
                        </p>

                        <span className="text-label text-primary">
                          {order.status}
                        </span>
                      </div>

                      <button
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary"
                        aria-label={`View ${order.id}`}
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "transactions" && (
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex flex-col gap-4 rounded-lg border border-border-light bg-surface-warm p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background-soft text-primary">
                        <CreditCard size={19} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-label font-semibold">
                          {transaction.id}
                        </h3>

                        <p className="text-label mt-1 text-text-muted">
                          {transaction.orderId} · {transaction.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <div className="text-left sm:text-right">
                        <p className="text-card font-semibold">
                          {transaction.amount}
                        </p>

                        <span className="text-label text-primary">
                          {transaction.status}
                        </span>
                      </div>

                      <button
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary"
                        aria-label={`Download ${transaction.id}`}
                      >
                        <Download size={17} />
                      </button>
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