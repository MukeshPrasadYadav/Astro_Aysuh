import Image from "next/image";

const specialities = [
  {
    title: "7+ Years of Experience",
    icon: "/rating.svg",
  },
  {
    title: "Personalised Birth-Chart Analysis",
    icon: "/personalization.svg",
  },
  {
    title: "Practical Remedies",
    icon: "/mortar.svg",
  },
];

export default function SpecialitySection() {
  return (
    <section className="w-full bg-primary/10">
      <div className="mx-auto w-full max-w-6xl px-5 py-3 sm:px-6 sm:py-4">
        <div className="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {specialities.map((item) => (
            <div
              key={item.title}
              className="
                group
                flex
                min-h-[75px]
                flex-col
                items-center
                justify-center
                px-4
                py-3
                text-center
                transition-all
                duration-300
                sm:min-h-[105px]
                sm:px-4
                sm:py-2
                lg:min-h-[110px]
                lg:px-6
              "
            >
              {/* Icon Circle */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  bg-background
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:border-link-button
                  group-hover:shadow-md
                  lg:h-14
                  lg:w-14
                "
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain lg:h-7 lg:w-7"
                />
              </div>

              {/* Text */}
              <p
                className="
                  mt-2
                  max-w-[240px]
                  font-serif
                  text-sm
                  font-semibold
                  leading-snug
                  text-text
                  sm:text-[14px]
                  lg:text-[15px]
                  xl:text-base
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}