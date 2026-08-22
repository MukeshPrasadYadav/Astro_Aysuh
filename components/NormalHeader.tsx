"use client"
import Link from "next/link";
import { Home, BookOpen, UserRound, UserPlus } from "lucide-react";
import Logo from "../public/Logo.svg"
import Image from "next/image";
import { useUser } from "@/context/UserContext";

export default function NormalHeader() {
  const data = useUser();
  const user = data?.user ?? null;

  console.log("user in header",user)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="mx-auto flex h-20 items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl text-text"
        >
          <Image
    src="/Logo.svg"
    alt="Logo"
    width={200}
    height={80}
    priority
  />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="hidden   lg:flex items-center gap-8 ">

            <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
              >
                <Home size={18} strokeWidth={2} />
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
              >
                <BookOpen size={18} strokeWidth={2} />
                <span>About Us</span>
              </Link>
            </li>

            <li>
              <Link
                href={user ? "/profile" : "/auth"}
                className="flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
              >
                <UserRound size={18} strokeWidth={2} />
                <span>{user ? "Profile" : "Login"}</span>
              </Link>
            </li>

            

          </ul>
        </nav>

      </div>
    </header>
  );
}