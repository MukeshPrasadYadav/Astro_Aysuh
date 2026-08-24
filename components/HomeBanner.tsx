import Image from "next/image";
import Link from "next/link";

export default function HomeBanner() {
 return (
    <section className="w-full min-h-[calc(100dvh-80px)] bg-primary/5 flex items-center">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* ===== TEXT CONTENT ===== */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Explore Remedies for Life’s<br />
              into a{" "}
              <span className="text-orange-500">Toughest</span>
              <br />
              Challenges
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Discover practical Lal Kitab remedies for marriage, debt, career, business, finances and family concerns—all explained in one easy-to-follow guide
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                <span className="text-orange-500">✦</span>
                Marriage & Relationships
              </span>
              <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                <span className="text-orange-500">⚡</span>
                Money, Debt & Business
              </span>
              <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                <span className="text-orange-500">◎</span>
                Simple, Practical Remedies
              </span>
            </div>

            {/* Button */}
            <Link
              href="#explore"
              className="inline-block bg-link-button hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Explore Lal Kitab Remedies
            </Link>
          </div>

          {/* ===== BOOK IMAGE ===== */}
          {/* ===== BOOK + CHAKRA ===== */}
<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
  <div className="relative w-[340px] sm:w-[390px] md:w-[450px] lg:w-[500px] aspect-square flex items-center justify-center">

    {/* Spinning Chakra */}
    <Image
      src="/chakra.svg"
      alt=""
      width={600}
      height={600}
      className="absolute w-[125%] h-[125%] object-contain animate-spin opacity-70"
      style={{ animationDuration: "20s" }}
      priority
    />

    {/* Book */}
    <div className="relative z-10 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] drop-shadow-2xl">
      <Image
        src="/Book Desktop.png"
        alt="Lal Kitab"
        width={400}
        height={520}
        className="w-full h-auto object-contain"
        priority
      />
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}