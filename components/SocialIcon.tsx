import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  label: string;
  children: ReactNode;
}

export const SocialIcon = ({
  href,
  label,
  children,
}: SocialIconProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        bg-[#8A5500]
        text-gold-light
        transition-all
        duration-200
        hover:-translate-y-1
        hover:bg-primary
        hover:text-white
      "
    >
      {children}
    </a>
  );
};