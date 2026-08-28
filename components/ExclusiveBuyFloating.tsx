"use client";

import { useEffect, useState } from "react";
import ExclusiveProductBanner from "./ExclusiveBuy";

export default function ExclusiveBuyFloating() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling approximately 350px
      setShow(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        z-[999]
        w-full
        animate-in
        slide-in-from-bottom-4
        duration-300
      "
    >
      <ExclusiveProductBanner />
    </div>
  );
}