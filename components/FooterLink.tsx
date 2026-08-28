import Link from "next/link";
import { ReactNode } from "react";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

export const FooterLink = ({
  href,
  children,
}: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="
        w-fit
        text-sm
        text-white/85
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-[#ff6000]
      "
    >
      {children}
    </Link>
  );
};