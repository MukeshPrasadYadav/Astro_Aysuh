"use client"
import { FaWhatsapp } from "react-icons/fa";

import { usePathname } from "next/navigation";
import { useUser , type Role } from "@/context/UserContext";



export default function WhatsAppButton() {

  const data = useUser();
  const user = data.user ?? null;

  const pathname = usePathname();

  const hiddenPaths = ["/auth", "/admin",];

  if ( user?.role === "ADMIN"  || hiddenPaths.some((path) => pathname.startsWith(path))) {
    return null;
  }

  const phone = "917980314196";
  const message = "Hello, I want to ask an astrology question.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed  right-6 bottom-18 lg:bottom-6 lg:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}