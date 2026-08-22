import Link from "next/link";

export const FooterLink = ({ href, children }) => {
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
        hover:text-gold-light
      "
    >
      {children}
    </Link>
  );
};