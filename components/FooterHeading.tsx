import { ReactNode } from "react";

export const FooterHeading = ({ children   } : {  children: ReactNode}) => {
  return (
    <div>
      <h3
        className="
          text-base
          font-bold
          text-[#D9B77A]
        "
      >
        {children}
      </h3>

      <div
        className="
          mt-3
          h-px
          w-full
          max-w-[270px]
          bg-[#9A650F]/60
        "
      />
    </div>
  );
};