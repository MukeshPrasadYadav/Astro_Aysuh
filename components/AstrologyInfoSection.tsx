import Image from "next/image";

export default function AstrologyInfoSection() {
  return (
    <section className="w-full overflow-hidden bg-primary/5">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-25 lg:px-12 xl:px-16">

        {/* ================= LEFT TEXT ================= */}

        <div className="text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-meta">
            Personalised Astrology
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Understand Your Journey With Greater Clarity
          </h2>

          <p className="mt-5 text-base leading-8 text-text/70 sm:text-lg">
            Every birth chart tells a unique story. Understanding the
            planetary influences in your chart can help you gain a deeper
            perspective on different areas of your life.
          </p>

          <p className="mt-4 text-base leading-8 text-text/70 sm:text-lg">
            With personalised guidance, you can explore your questions,
            understand the possibilities indicated by your chart, and make
            more informed decisions about the path ahead.
          </p>

        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="flex w-full justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-lg">
            <Image
              src="/Banner.webp"
              alt="Astrology consultation"
              width={800}
              height={800}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}