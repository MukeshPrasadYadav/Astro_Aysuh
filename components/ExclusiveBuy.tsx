import Image from "next/image";
import Link from "next/link";

export default function ExclusiveProductBanner() {
  return (
    <div className="w-full border-y border-[#e7d5bd] bg-[#f7eee1]">
      <div className="mx-auto flex min-h-[90px] w-full max-w-[1600px] items-center gap-3 px-4 py-3 sm:gap-5 sm:px-6 lg:px-10">

        {/* Product Image */}
        <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl border border-[#dfc9aa] bg-white sm:h-[70px] sm:w-[70px]">
          <Image
            src="/lal_kitab_book.webp"
            alt="Lal Kitab"
            fill
            sizes="70px"
            className="object-contain p-1"
          />
        </div>

        {/* Product Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-bold text-[#432017] sm:text-base lg:text-lg">
              Lal Kitab Astrology Book
            </h3>

            <span className="hidden rounded-full bg-[#8d250f] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white sm:inline-block">
              Exclusive
            </span>
          </div>

          <p className="mt-1 truncate text-xs text-[#806e61] sm:text-sm">
            Ancient remedies & personalised astrological guidance
          </p>
        </div>

        {/* Price */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <span className="font-bold text-[#8d250f]">
            ₹99.00
          </span>

        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">


          <Link
            href="/book/6a91497c800f4d70df2c5c0e"
            className="inline-flex items-center justify-center rounded-lg bg-text-meta px-4 py-2.5 text-sm font-bold text-white shadow-sm transition  sm:px-6"
          >
            Buy Now
          </Link>

        </div>
      </div>
    </div>
  );
}