export const SocialIcon = ({ href, label, children }) => {
  return (
    <a
      href={href}
      aria-label={label}
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