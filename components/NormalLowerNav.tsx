"use client"
import { useUser } from "@/context/UserContext";
import { BookOpen, Home, UserRound } from "lucide-react";
import Link from "next/link";

export default function NormalLowerNav() {

  const data = useUser();
  const user = data?.user ?? null;
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        z-50
        flex
        h-16
        w-full
        items-center
        justify-around
        border-t
        border-border-primary
        bg-white/95
        backdrop-blur-xl
        lg:hidden
      "
    >
      <Link
        href="/"
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-1
          text-text-secondary
          transition-colors
          hover:text-primary
        "
      >
        <Home size={20} strokeWidth={2} />

        <span className="text-[11px] font-medium">
          Home
        </span>
      </Link>

      <Link
        href="/about"
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-1
          text-text-secondary
          transition-colors
          hover:text-primary
        "
      >
        <BookOpen size={20} strokeWidth={2} />

        <span className="text-[11px] font-medium">
          About Us
        </span>
      </Link>

      <Link
        href={user ? "/profile" : "/auth"}
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-1
          text-text-secondary
          transition-colors
          hover:text-primary
        "
      >
        <UserRound size={20} strokeWidth={2} />

        <span className="text-[11px] font-medium">
          {user != null ? 'Profile' : 'Login'}
        </span>
      </Link>
    </nav>
  );
}