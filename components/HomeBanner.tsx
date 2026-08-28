import Image from "next/image";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section className="w-full min-h-[calc(100dvh-80px)] bg-primary/5 flex items-center">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-12 md:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-7 sm:gap-8 lg:gap-4 xl:gap-6">
          
          {/* ===== TEXT CONTENT ===== */}
          <div className="w-full lg:w-[45%] text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight mb-4 sm:mb-5">
              Explore Remedies for
              <br className="hidden sm:block" />
              <span className="sm:ml-1">Life’s </span>
              <span className="text-orange-500">Toughest</span>
              <br />
              <span className="text-orange-500">Challenges</span>
            </h1>

            <p className="text-gray-600 text-[15px] sm:text-base md:text-lg max-w-md sm:max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              Discover practical Lal Kitab remedies for marriage, debt, career,
              business, finances and family concerns—all explained in one
              easy-to-follow guide
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 mb-8 sm:mb-10">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-gray-200 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[13px] sm:text-sm text-gray-700 shadow-sm">
                <span className="text-orange-500">✦</span>
                Marriage & Relationships
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-gray-200 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[13px] sm:text-sm text-gray-700 shadow-sm">
                <span className="text-orange-500">⚡</span>
                Money, Debt & Business
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-gray-200 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[13px] sm:text-sm text-gray-700 shadow-sm">
                <span className="text-orange-500">◎</span>
                Simple, Practical Remedies
              </span>
            </div>

            {/* Button */}
            <Link
              href="/book/6a91497c800f4d70df2c5c0e"
              className="inline-block bg-link-button hover:bg-orange-600 text-white font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg text-[15px] sm:text-base"
            >
              Explore Lal Kitab Remedies
            </Link>
          </div>

          {/* ===== BOOK + CHAKRA ===== */}
          <div className="w-full lg:w-[50%] flex justify-center">
  <div className="relative w-[280px] sm:w-[340px] md:w-[400px] lg:w-[440px] xl:w-[480px] aspect-square flex items-center justify-center">
              
              {/* Spinning Chakra */}
              <Image
      src="/chakra.svg"
      alt=""
      fill
      className="
        absolute
        scale-[1.2]
        sm:scale-[1.25]
        object-contain
        animate-spin
        opacity-70
      "
      style={{ animationDuration: "20s" }}
      priority
    />


              {/* Book */}
               <div className="relative z-10 w-[240px] sm:w-[290px] md:w-[330px] lg:w-[350px] xl:w-[370px] drop-shadow-2xl">
      <Image
        src="/lal_kitab_book.webp"
        alt="Lal Kitab"
        width={462}
        height={600}
        className="h-auto w-full object-contain"
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