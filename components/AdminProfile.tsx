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
  Search,
} from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import BookUploader from "./BookUploader";

type Tab = "books" | "statistics";

interface Book {
  name: string;
  price: number;
  id: string;
}

export interface Transaction {
  paymentStatus: string;
  orderId: string;
  transactionId: string | null;
  name: string;
  number: string;
  bookTitle: string;
  date: string;
  amount: number;
}

interface stats {
  totalSales: number;
  totalSuccessfulTransaction: number;
  totalFailedTransaction: number;
  totalTransaction: number;
  totalUser: number;
  books: Book[];
  transactions: Transaction[];
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

export default function AdminProfilePage() {
  const { user, loading } = useUser();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<Tab>("books");
  const [openUploader, setOpenUploader] = useState(false);

  const [stats, setStats] = useState<stats>({
    totalSales: 0,
    totalSuccessfulTransaction: 0,
    totalFailedTransaction: 0,
    totalTransaction: 0,
    totalUser: 0,
    books: [],
    transactions: [],
  });

  const [transactionFilter, setTransactionFilter] = useState<
    "all" | "success" | "failed"
  >("all");

  const [transactionSearch, setTransactionSearch] = useState("");
  const [transactionsPerPage, setTransactionsPerPage] = useState(10);
  const [transactionPage, setTransactionPage] = useState(1);

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

  useEffect(() => {
    if (!user?.id) return;

    const getStats = async () => {
      try {
        const res = await fetch("/api/admin/stats", {
          method: "GET",
          headers: {
            "x-user-id": user.id.toString(),
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch admin stats");
        }

        const { data } = await res.json();

        setStats({
          totalSales: data.totalSales,
          totalSuccessfulTransaction: data.totalSuccessfulTransaction,
          totalFailedTransaction: data.totalFailedTransaction,
          totalTransaction: data.totalTransaction,
          totalUser: data.totalUser,
          books: data.books,
          transactions: data.transactions,
        });
      } catch (error) {
        console.error("Failed to fetch admin stats:", error);
        alert("Something went wrong.");
      }
    };

    getStats();
  }, [user?.id]);

  const transactions = stats?.transactions ?? [];

  const filteredTransactions = transactions
    .filter((transaction) => {
      if (transactionFilter === "all") return true;

      return transactionFilter === "success"
        ? transaction.paymentStatus === "paid"
        : transaction.paymentStatus !== "paid";
    })
    .filter((transaction) => {
      const search = transactionSearch.toLowerCase().trim();

      if (!search) return true;

      return (
        transaction.name.toLowerCase().includes(search) ||
        transaction.number.toLowerCase().includes(search) ||
        transaction.orderId.toLowerCase().includes(search) ||
        transaction.bookTitle.toLowerCase().includes(search)
      );
    });

  const totalTransactionPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  const paginatedTransactions = filteredTransactions.slice(
    (transactionPage - 1) * transactionsPerPage,
    transactionPage * transactionsPerPage
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
              <UserRound
                className="h-7 w-7 sm:h-[38px] sm:w-[38px]"
                strokeWidth={1.7}
              />
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
                      {stats.books?.length ?? 0}
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

                    {stats.books.map((book) => (
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
                              Active
                            </span>
                          </div>
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
                      {stats.totalUser}
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
                      ₹{stats.totalSales}
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
                      {stats.totalTransaction}
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
                      {stats.totalSuccessfulTransaction ?? 0}
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
                      {stats.totalFailedTransaction}
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

                    <div className="relative w-full sm:max-w-xs">

                      <Search
                        size={17}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                      />

                      <input
                        type="text"
                        value={transactionSearch}
                        onChange={(e) => {
                          setTransactionSearch(e.target.value);
                          setTransactionPage(1);
                        }}
                        placeholder="Search transactions..."
                        className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none transition focus:border-primary"
                      />

                    </div>

                    {/* Filters */}
                    <div className="flex w-fit rounded-lg border border-border p-1">

                      <button
                        onClick={() => {
                          setTransactionFilter("all");
                          setTransactionPage(1);
                        }}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                          transactionFilter === "all"
                            ? "bg-background-soft text-primary"
                            : "text-text-secondary"
                        }`}
                      >
                        All
                      </button>

                      <button
                        onClick={() => {
                          setTransactionFilter("success");
                          setTransactionPage(1);
                        }}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                          transactionFilter === "success"
                            ? "bg-background-soft text-primary"
                            : "text-text-secondary"
                        }`}
                      >
                        Successful
                      </button>

                      <button
                        onClick={() => {
                          setTransactionFilter("failed");
                          setTransactionPage(1);
                        }}
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

                  {/* Transaction Table */}
                  <div className="overflow-x-auto">

                    <table className="w-full min-w-[900px] text-left">

                      <thead className="border-b border-border bg-background">
                        <tr>

                          <th className="px-5 py-4 text-label font-semibold text-text-secondary">
                            Customer
                          </th>

                          <th className="px-5 py-4 text-label font-semibold text-text-secondary">
                            Book
                          </th>

                          <th className="px-5 py-4 text-label font-semibold text-text-secondary">
                            Order ID
                          </th>

                          <th className="px-5 py-4 text-label font-semibold text-text-secondary">
                            Amount
                          </th>

                          <th className="px-5 py-4 text-label font-semibold text-text-secondary">
                            Status
                          </th>

                          <th className="px-5 py-4 text-label font-semibold text-text-secondary">
                            Date
                          </th>

                        </tr>
                      </thead>

                      <tbody className="divide-y divide-border">

                        {paginatedTransactions.length > 0 ? (
                          paginatedTransactions.map((transaction) => (
                            <tr
                              key={transaction.orderId}
                              className="transition-colors hover:bg-background-soft/50"
                            >

                              {/* Customer */}
                              <td className="px-5 py-4">
                                <div>
                                  <p className="text-label font-semibold">
                                    {transaction.name}
                                  </p>

                                  <p className="mt-1 text-xs text-text-muted">
                                    {transaction.number}
                                  </p>
                                </div>
                              </td>

                              {/* Book */}
                              <td className="px-5 py-4">
                                <p className="max-w-[180px] truncate text-label">
                                  {transaction.bookTitle}
                                </p>
                              </td>

                              {/* Order ID */}
                              <td className="px-5 py-4">
                                <p className="font-mono text-xs text-text-secondary">
                                  {transaction.orderId}
                                </p>
                              </td>

                              {/* Amount */}
                              <td className="px-5 py-4">
                                <p className="text-label font-semibold">
                                  ₹{transaction.amount}
                                </p>
                              </td>

                              {/* Status */}
                              <td className="px-5 py-4">

                                <span
                                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                                    transaction.paymentStatus === "paid"
                                      ? "bg-primary/10 text-primary"
                                      : "bg-background-soft text-text-secondary"
                                  }`}
                                >

                                  {transaction.paymentStatus === "paid" ? (
                                    <CheckCircle size={14} />
                                  ) : (
                                    <XCircle size={14} />
                                  )}

                                  {transaction.paymentStatus}

                                </span>

                              </td>

                              {/* Date */}
                              <td className="px-5 py-4">
                                <p className="whitespace-nowrap text-xs text-text-secondary">
                                  {formatDate(transaction.date)}
                                </p>
                              </td>

                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan={6}
                              className="px-5 py-12 text-center text-sm text-text-muted"
                            >
                              No transactions found.
                            </td>
                          </tr>
                        )}

                      </tbody>
                    </table>

                  </div>

                  {/* Search + Pagination */}
                  <div className="flex flex-col gap-4 border-t border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">

                    
                    

                    {/* Pagination */}
                    <div className="flex flex-wrap items-center gap-3">

                      {/* Rows per page */}
                      <div className="flex items-center gap-2">

                        <span className="text-xs text-text-secondary">
                          Show
                        </span>

                        <select
                          value={transactionsPerPage}
                          onChange={(e) => {
                            setTransactionsPerPage(Number(e.target.value));
                            setTransactionPage(1);
                          }}
                          className="h-9 rounded-md border border-border bg-background px-2 text-sm outline-none focus:border-primary"
                        >
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                          <option value={50}>50</option>
                        </select>

                      </div>

                      {/* Page numbers */}
                      <div className="flex items-center gap-1">

                        {Array.from(
                          { length: totalTransactionPages },
                          (_, index) => index + 1
                        ).map((page) => (
                          <button
                            key={page}
                            onClick={() => setTransactionPage(page)}
                            className={`flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-sm transition ${
                              transactionPage === page
                                ? "bg-primary text-white"
                                : "border border-border text-text-secondary hover:bg-background-soft"
                            }`}
                          >
                            {page}
                          </button>
                        ))}

                      </div>

                    </div>
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