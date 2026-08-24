"use client";

import { navigate } from "next/dist/client/components/segment-cache/navigation";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { Loader } from "lucide-react";

export default function AdminAuth() {

  const data = useUser();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const router = useRouter();
   const { refreshUser } = useUser();

if (data.loading) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  );
}

if(!data.loading && data.user){
  router.push("/")
}

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !number.trim()) {
      alert("Please enter your name and mobile number");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          number,
          password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      if(response.ok){
         await refreshUser()
        router.push("/")
      }

      console.log("Success:", data);

      // Example:
      // router.push("/profile");

    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-text-secondary">
            Enter your details to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label
              htmlFor="number"
              className="mb-2 block text-sm font-medium"
            >
              Mobile Number
            </label>

            <input
              id="number"
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter your mobile number"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

            <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>

            <input
              id="password"
              type="tel"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder ="Enter your password"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>


          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Continue"}
          </button>

        </form>
      </div>
    </div>
  );
}