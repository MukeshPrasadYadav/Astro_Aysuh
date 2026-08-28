import Image from "next/image";
import Link from "next/link";

export default function AboutAyushBanner() {
  const phone = "917980314196";
  const message = "Hello, I want to ask an astrology question.";

  return (
    <section className="relative w-full overflow-hidden bg-[#8d0000]">
      {/*  BACKGROUND  */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#760000] via-[#980b00] to-[#d85b13]" />

      {/* Desktop glow */}
      <div className="absolute right-[10%] top-1/2 hidden h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-orange-500/20 blur-[130px] md:block" />

      {/* DESKTOP */}

      <div className="relative hidden min-h-[620px] md:block">
        {/* Astrologer Cutout */}
        <div className="absolute inset-y-0 right-0 z-10 w-[58%] lg:w-[55%]">
          <Image
            src="/About_ayushBanner.png"
            alt="Astrologer Ayush"
            fill
            priority
            sizes="55vw"
            className="object-contain object-right-bottom"
          />
        </div>

        {/* Desktop Content */}
        <div className="relative z-30 flex min-h-[620px] items-center">
          <div className="container mx-auto px-6 py-16 md:px-10 lg:px-16">
            <div className="max-w-xl lg:max-w-2xl text-white">

              {/* Heading */}
              <h1 className="mb-5 font-serif text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
                Personal Astrology
                <br />
                Consultation with
                <br />
                Astrologer Ayush
              </h1>

              {/* Description */}
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
                Feeling stuck in your marriage, career, business, finances or
                family life? A personal consultation with Astrologer Ayush can
                help you understand what your birth chart may indicate about
                your present challenges—and what steps you can consider moving
                forward.
              </p>

              {/* CTA */}
              <Link
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-link-button px-6 py-3 font-semibold text-white transition hover:bg-amber-500"
              >
                Schedule a call →
              </Link>

              
            </div>
          </div>
        </div>
      </div>

      {/*  MOBILE  */}

      <div className="relative block md:hidden">

        {/*  MOBILE CONTENT  */}

        <div className="relative z-20 px-5 pt-14 text-white">

          {/* Heading */}
          <h1 className="mb-6 font-serif text-[36px] font-medium leading-[1.08]">
            Personal Astrology
            <br />
            Consultation with
            <br />
            Astrologer Ayush
          </h1>

          {/* Description */}
          <p className="mb-7 text-[16px] leading-[1.6] text-white/90">
            Feeling stuck in your marriage, career, business, finances or
            family life? A personal consultation with Astrologer Ayush can
            help you understand what your birth chart may indicate about your
            present challenges—and what steps you can consider moving forward.
          </p>

          {/* CTA */}
          <Link
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-link-button px-6 py-3 font-semibold text-white transition hover:bg-amber-500"
          >
            Schedule a call →
          </Link>


          
        </div>

        {/*================= MOBILE CUTOUT  */}

        <div className="relative z-10 -mt-2 h-[360px] w-full">
          <Image
            src="/About_ayushBanner.png"
            alt="Astrologer Ayush"
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

/* ================= STAT COMPONENT ================= */

function Stat({
  icon,
  title,
  description,
}: {
  icon: string;
  title?: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg">
        {icon}
      </div>

      <div>
        {title && (
          <div className="text-lg font-bold">
            {title}
          </div>
        )}

        <div className="text-sm text-white/80 sm:text-base">
          {description}
        </div>
      </div>

    </div>
  );
}