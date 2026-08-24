import Image from "next/image";
import Link from "next/link";

export default function AboutAyushBanner(){

  const phone = "917980314196";
  const message = "Hello, I want to ask an astrology question.";

    return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] overflow-hidden">
      {/* Background Image - Desktop */}
      <Image
        src="/Banner Desktop - Copy.webp"   // ← your large screen image
        alt="Astro Ayush"
        fill
        priority
        className="object-cover object-right hidden md:block"
        sizes="100vw"
      />

      {/* Background Image - Mobile */}
      <Image
        src="/Banner Mobile.webp"    // ← your small screen image
        alt="Astro Ayush"
        fill
        priority
        className="object-cover object-center block md:hidden"
        sizes="100vw"
      />

      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="max-w-xl lg:max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-4">
              Personal Astrology Consultation with<br className="hidden sm:block" />
              Astrologer Ayush<br className="hidden sm:block" />
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8">
              Feeling stuck in your marriage, career, business, finances or family life?
A personal consultation with Astrologer Ayush can help you understand what your birth chart may indicate about your present challenges—and what steps you can consider moving forward.

            </p>

            <Link
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              className="inline-flex items-center gap-2 bg-link-button hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-md transition"
            >
              Schedule a call →
            </Link>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  🛡
                </div>
                <div>
                  <div className="font-bold text-lg">7+</div>
                  <div className="text-white/80"> Years of Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  🏅
                </div>
                <div>
                  {/* <div className="font-bold text-lg">21+</div> */}
                  <div className="text-white/80">Personalised Birth-Chart Analysis</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  👥
                </div>
                <div>
                  {/* <div className="font-bold text-lg">5Lakh+</div> */}
                  <div className="text-white/80">Practical Remedies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}