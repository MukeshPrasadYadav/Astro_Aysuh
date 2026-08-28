import Image from "next/image";
import Link from "next/link";

export default function StillConfusesdBanner() {
  const phone = "917980314196";
  const message = "Hello, I want to book a consultation with Astro Ayush.";

  return (
    <section className="relative w-full overflow-hidden bg-[#8d0000] md:min-h-screen">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#760000] via-[#980b00] to-[#d85b13]" />

      {/* Soft glow - desktop only */}
      <div className="absolute right-[15%] top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-orange-400/20 blur-[130px] md:block" />

      {/* ================================================= */}
      {/* ================= DESKTOP ======================= */}
      {/* ================================================= */}

      <div className="relative hidden min-h-screen md:block">
        {/* Astrologer Cutout */}
        <div className="absolute inset-y-0 right-0 z-10 w-[48%] lg:w-[45%] xl:w-[43%]">
          <Image
            src="/ayush_cutout.png"
            alt="Astro Ayush"
            fill
            priority
            sizes="43vw"
            className="object-contain object-right-bottom"
          />
        </div>

        {/* Desktop Content */}
        <div className="relative z-20 flex min-h-screen items-center">
          <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="max-w-3xl text-white">

              {/* Small Label */}
              <p className="mb-4 text-[25px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Personalised Guidance
              </p>

              {/* Heading */}
              <h2 className="font-serif text-5xl font-medium leading-[1.08] lg:text-6xl xl:text-7xl">
                Still Confused About
                <br />
                 the Right Remedy 
                <br />
                for Your Problem?
              </h2>

              {/* Description */}
              <p className="mt-15 max-w-xl text-[25px] leading-8 text-white/90 ">
                Get personalised guidance  <br /> from Astro Ayush.
              </p>

              {/* CTA */}
              <Link
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-link-button px-7 py-3.5 font-semibold text-white transition hover:bg-amber-500"
              >
                Book a Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ================= MOBILE ======================== */}
      {/* ================================================= */}

      <div className="relative block md:hidden">
        {/* ================= TEXT FIRST ================= */}

        <div className="relative z-20 px-5 pb-0 pt-14 text-white">
          {/* Small Label */}
          <p className="mb-3 !text-[13px] font-semibold uppercase tracking-[0.18em] text-white/70">
  Personalised Guidance
</p>

          {/* Heading */}
          <h2 className="font-serif text-[34px] font-medium leading-[1.08]">
                Still Confused About
                <br />
                 the Right Remedy 
                <br />
                for Your Problem?          </h2>

          {/* Description */}
          <p className="mt-5 text-base leading-5 text-white/90">
            Get personalised guidance <br /> from Astro Ayush.
          </p>

          {/* CTA */}
          <Link
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white bg-link-button hover:bg-orange-600  font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg text-[15px] "
          >
            Book a Consultation →
          </Link>
        </div>

        {/* ================= IMAGE AFTER TEXT ================= */}

        <div className="relative z-10 mt-6 h-[380px] w-full">
          <Image
            src="/ayush_cutout.png"
            alt="Astro Ayush"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}