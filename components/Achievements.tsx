import React from "react";

const Achievements = () => {
  const stats = [
    {
      number: "7+",
      label: "YEARS OF EXPERIENCE",
      icon: (
        <svg
          className="w-8 h-8 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6h6v6" />
          <path d="M10 9h4" />
          <path d="M10 13h4" />
        </svg>
      ),
    },
    {
      number: "1:1",
      label: "PERSONAL CONSULTATIONS",
      icon: (
        <svg
          className="w-8 h-8 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      number: "5+",
      label: "AREAS OF LIFE GUIDANCE",
      icon: (
        <svg
          className="w-8 h-8 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      number: "PDF",
      label: "INSTANT DIGITAL ACCESS",
      icon: (
        <svg
          className="w-8 h-8 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Guidance You Can Count On
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Personal astrology support designed around your individual concerns
        </p>

        {/* Stats Grid - 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full max-w-[180px] sm:max-w-[200px]"
            >
              <div
                className="
                  aspect-square rounded-full bg-link-button text-white
                  flex flex-col items-center justify-center
                  px-3 py-4
                  shadow-lg shadow-[#c45c26]/25
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-[#c45c26]/35
                "
              >
                {stat.icon}
                <span className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">
                  {stat.number}
                </span>
                <span className="mt-1.5 text-[10px] sm:text-xs font-medium tracking-wide uppercase opacity-95 leading-tight text-center px-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;