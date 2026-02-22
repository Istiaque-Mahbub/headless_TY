
import Image from "next/image";
import contactUsIcon from "@/public/up right.svg";
import { Button } from "@/components/ui/button";
import { Banner, extractBanner } from "@/lib/fetchData/Home/GetBanner";
import { fetchHomeData } from "@/lib/fetchData/Home/fetchLandingPage";


interface HeroProps {
  highlightText: string; // the part of the title you want to highlight
}

export default async function Hero({ highlightText }: HeroProps) {
  const banner: Banner | null = await fetchHomeData(extractBanner);
  if (!banner) return null;

  console.log(banner.image.url)

  // Split the title into before, highlight, after
  const titleParts = banner.title.split(highlightText);

  return (
    <section className="relative z-10 w-full bg-gradient-to-r from-[#32C7AF] via-[#37C1A4] to-[#2E9E8E] text-white overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-10 px-4 pt-12 pb-40 sm:px-6 sm:pt-16 sm:pb-56 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:pt-20 lg:pb-88">
        <div className="max-w-xl space-y-6">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {titleParts[0]}
            <span className="text-[#1F3A93]">{highlightText}</span>
            {titleParts[1] || ""}
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
            {banner.description}
          </p>
          <Button className="mt inline-flex items-center gap-2 rounded-full bg-[#1F3A93] z-99 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1F3A93]/90">
            <span>{banner.button?.text || "Contact Us"}</span>
            <Image
              src={contactUsIcon}
              alt="Contact us"
              width={16}
              height={16}
              className="h-4 w-4 z-99"
            />
          </Button>
        </div>

        <div className="relative z-99 w-full max-w-md self-center overflow-visible md:max-w-lg lg:max-w-none lg:flex-1 lg:translate-x-12 lg:translate-y-10 lg:scale-[1.35] lg:overflow-visible lg:transition-transform lg:duration-500 lg:ease-out xl:translate-x-20 xl:translate-y-14 xl:scale-[1.6]">
          <div className="relative h-40 w-full sm:h-52 md:h-64 lg:h-[380px] xl:h-[460px] z-20">
            <Image
              src={banner?.image?.url}
              alt={banner.image?.alt || "Cargo ship loaded with containers"}
              fill
              priority
              className="object-contain object-right-bottom mt-10 z-50"
              sizes="(min-width: 1280px) 640px, (min-width: 1024px) 520px, (min-width: 768px) 420px, 90vw"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
