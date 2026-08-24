"use client";

import { useEffect, useState } from "react";
import {
  UserRound,
  Phone,
  BookOpen,
  Upload,
  Pencil,
  Users,
  IndianRupee,
  CreditCard,
  CheckCircle,
  XCircle,
  Loader,
} from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import BookUploader from "./BookUploader";

type Tab = "books" | "statistics";

export default function AdminProfilePage() {
  const { user, loading } = useUser();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<Tab>("books");
  const [openUploader, setOpenUploader] = useState(false);


  const [transactionFilter, setTransactionFilter] = useState<
    "all" | "success" | "failed"
  >("all");

  // Protect admin page
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
      return;
    }

    if (!loading && user?.role !== "ADMIN") {
      router.replace("/");
    }
  }, [loading, user, router]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-text">
        <Loader className="animate-spin" size={32} />
      </div>
    );
  }

  // Prevent rendering before redirect
  if (!user || user.role !== "ADMIN") {
    return null;
  }

  // Temporary data - replace with API data later
  const books = [
    {
      id: "BOOK-001",
      name: "Lal Kitab Remedies",
      price: 499,
      status: "Active",
    },
    {
      id: "BOOK-002",
      name: "Vedic Astrology Guide",
      price: 299,
      status: "Active",
    },
    {
      id: "BOOK-003",
      name: "Astrology Fundamentals",
      price: 599,
      status: "Active",
    },
  ];

  const transactions = [
    {
      id: "TXN-1001",
      user: "Rahul Sharma",
      amount: 499,
      date: "22 Aug 2026",
      status: "Successful",
    },
    {
      id: "TXN-1002",
      user: "Amit Kumar",
      amount: 299,
      date: "22 Aug 2026",
      status: "Successful",
    },
    {
      id: "TXN-1003",
      user: "Priya Singh",
      amount: 599,
      date: "21 Aug 2026",
      status: "Failed",
    },
    {
      id: "TXN-1004",
      user: "Rohit Das",
      amount: 499,
      date: "20 Aug 2026",
      status: "Successful",
    },
  ];

  const filteredTransactions =
    transactionFilter === "all"
      ? transactions
      : transactions.filter((transaction) =>
          transactionFilter === "success"
            ? transaction.status === "Successful"
            : transaction.status === "Failed"
        );

  return (
    <main className="min-h-screen bg-background text-text">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:py-14">

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-section font-bold">
            Admin Profile
          </h1>

          <p className="text-body mt-3 max-w-2xl text-text-secondary">
            Manage books, prices, users and monitor your store transactions.
          </p>
        </div>

        {/* Admin Profile Card */}
        <section className="mb-8 rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6 md:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

            {/* Avatar */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-background-soft text-primary">
              <UserRound size={38} strokeWidth={1.7} />
            </div>

            {/* User Info */}
            <div className="min-w-0">
              <p className="text-label mb-1 text-text-muted">
                Administrator
              </p>

              <h2 className="text-card truncate font-semibold">
                {user.name}
              </h2>

              <div className="mt-2 flex flex-wrap items-center gap-4 text-text-secondary">
                <div className="flex items-center gap-2">
                  <Phone size={16} />

                  <span className="text-body">
                    +91 {user.number}
                  </span>
                </div>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Tabs */}
        <section className="rounded-xl border border-border bg-surface shadow-sm">

          {/* Tabs */}
          <div className="flex border-b border-border px-4 sm:px-6">

            <button
              onClick={() => setActiveTab("books")}
              className={`relative px-5 py-4 text-label font-semibold transition-colors ${
                activeTab === "books"
                  ? "text-primary"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              Books

              {activeTab === "books" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("statistics")}
              className={`relative px-5 py-4 text-label font-semibold transition-colors ${
                activeTab === "statistics"
                  ? "text-primary"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              Statistics

              {activeTab === "statistics" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
              )}
            </button>

          </div>

          <div className="p-4 sm:p-6">

            {/* ================================================= */}
            {/* BOOKS TAB */}
            {/* ================================================= */}

            {activeTab === "books" && (
              <div>

                {/* Book Stats */}
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

                  {/* Upload */}
                  <button
                  onClick={() => setOpenUploader(true)}
                    className="group rounded-xl border border-border bg-background p-5 text-left transition hover:border-primary hover:shadow-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                      <Upload size={22} />
                    </div>

                    <p className="text-card font-semibold">
                      Upload Book
                    </p>

                    <p className="text-label mt-1 text-text-secondary">
                      Add a new book to the store
                    </p>
                  </button>

                  

                  {/* Total Books */}
                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                      <BookOpen size={22} />
                    </div>

                    <p className="text-section font-bold">
                      {books.length}
                    </p>

                    <p className="text-label mt-1 text-text-secondary">
                      Total Books
                    </p>
                  </div>

                </div>

                {/* Books List */}
                <div className="rounded-xl border border-border">

                  <div className="border-b border-border p-4 sm:p-5">
                    <h2 className="text-card font-semibold">
                      Books
                    </h2>

                    <p className="text-label mt-1 text-text-secondary">
                      Manage your books and their prices.
                    </p>
                  </div>

                  <div className="divide-y divide-border">

                    {books.map((book) => (
                      <div
                        key={book.id}
                        className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                      >

                        <div className="flex min-w-0 items-center gap-3">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background-soft text-primary">
                            <BookOpen size={19} />
                          </div>

                          <div className="min-w-0">
                            <h3 className="text-label font-semibold">
                              {book.name}
                            </h3>

                            <p className="text-label mt-1 text-text-muted">
                              {book.id}
                            </p>
                          </div>

                        </div>

                        <div className="flex items-center justify-between gap-5 sm:justify-end">

                          <div className="text-left sm:text-right">
                            <p className="text-card font-semibold">
                              ₹{book.price}
                            </p>

                            <span className="text-label text-primary">
                              {book.status}
                            </span>
                          </div>

                          <button
                            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-secondary transition hover:border-primary hover:text-primary"
                            aria-label={`Edit ${book.name}`}
                          >
                            <Pencil size={17} />
                          </button>

                        </div>

                      </div>
                    ))}

                  </div>
                </div>

              </div>
            )}

            {/* ================================================= */}
            {/* STATISTICS TAB */}
            {/* ================================================= */}

            {activeTab === "statistics" && (
              <div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                  {/* Total Users */}
                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                        <Users size={22} />
                      </div>

                      <span className="text-label text-text-muted">
                        Users
                      </span>
                    </div>

                    <p className="text-section font-bold">
                      1,248
                    </p>

                    <p className="text-label mt-1 text-text-secondary">
                      Total users
                    </p>
                  </div>

                  {/* Total Sales */}
                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                        <IndianRupee size={22} />
                      </div>

                      <span className="text-label text-text-muted">
                        Sales
                      </span>
                    </div>

                    <p className="text-section font-bold">
                      ₹1,48,500
                    </p>

                    <p className="text-label mt-1 text-text-secondary">
                      Total sales
                    </p>
                  </div>

                  {/* Total Transactions */}
                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                        <CreditCard size={22} />
                      </div>

                      <span className="text-label text-text-muted">
                        Transactions
                      </span>
                    </div>

                    <p className="text-section font-bold">
                      1,420
                    </p>

                    <p className="text-label mt-1 text-text-secondary">
                      Total transactions
                    </p>
                  </div>

                  {/* Successful */}
                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                        <CheckCircle size={22} />
                      </div>

                      <span className="text-label text-text-muted">
                        Successful
                      </span>
                    </div>

                    <p className="text-section font-bold">
                      1,367
                    </p>

                    <p className="text-label mt-1 text-text-secondary">
                      Successful transactions
                    </p>
                  </div>

                  {/* Failed */}
                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-background-soft text-primary">
                        <XCircle size={22} />
                      </div>

                      <span className="text-label text-text-muted">
                        Failed
                      </span>
                    </div>

                    <p className="text-section font-bold">
                      53
                    </p>

                    <p className="text-label mt-1 text-text-secondary">
                      Failed transactions
                    </p>
                  </div>

                </div>

                {/* Transactions */}
                <div className="mt-6 rounded-xl border border-border">

                  {/* Header */}
                  <div className="flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">

                    <div>
                      <h2 className="text-card font-semibold">
                        Transactions
                      </h2>

                      <p className="text-label mt-1 text-text-secondary">
                        Monitor all payment transactions.
                      </p>
                    </div>

                    {/* Filters */}
                    <div className="flex rounded-lg border border-border p-1">

                      <button
                        onClick={() => setTransactionFilter("all")}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                          transactionFilter === "all"
                            ? "bg-background-soft text-primary"
                            : "text-text-secondary"
                        }`}
                      >
                        All
                      </button>

                      <button
                        onClick={() => setTransactionFilter("success")}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                          transactionFilter === "success"
                            ? "bg-background-soft text-primary"
                            : "text-text-secondary"
                        }`}
                      >
                        Successful
                      </button>

                      <button
                        onClick={() => setTransactionFilter("failed")}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                          transactionFilter === "failed"
                            ? "bg-background-soft text-primary"
                            : "text-text-secondary"
                        }`}
                      >
                        Failed
                      </button>

                    </div>
                  </div>

                  {/* Transaction List */}
                  <div className="divide-y divide-border">

                    {filteredTransactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                      >

                        <div className="flex min-w-0 items-center gap-3">

                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                              transaction.status === "Successful"
                                ? "bg-background-soft text-primary"
                                : "bg-background-soft text-text-secondary"
                            }`}
                          >
                            {transaction.status === "Successful" ? (
                              <CheckCircle size={19} />
                            ) : (
                              <XCircle size={19} />
                            )}
                          </div>

                          <div className="min-w-0">

                            <h3 className="text-label font-semibold">
                              {transaction.id}
                            </h3>

                            <p className="text-label mt-1 text-text-muted">
                              {transaction.user} · {transaction.date}
                            </p>

                          </div>

                        </div>

                        <div className="flex items-center justify-between gap-5 sm:justify-end">

                          <div className="text-left sm:text-right">
                            <p className="text-card font-semibold">
                              ₹{transaction.amount}
                            </p>

                            <span
                              className={`text-label ${
                                transaction.status === "Successful"
                                  ? "text-primary"
                                  : "text-text-secondary"
                              }`}
                            >
                              {transaction.status}
                            </span>
                          </div>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </div>
            )}

          </div>
        </section>
      </div>
      <BookUploader
        open={openUploader}
        onClose={() => setOpenUploader(false)}
        
      />
    </main>
  );
}