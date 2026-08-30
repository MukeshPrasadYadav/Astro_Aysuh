import Achievements from "@/components/Achievements";
import Button from "@/components/Button";
import ExclusiveProductBanner from "@/components/ExclusiveBuy";
import ExclusiveBuyFloating from "@/components/ExclusiveBuyFloating";
import HomeBanner from "@/components/HomeBanner";
import StillConfusesdBanner from "@/components/StillConfusedBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden text-text">
      <HomeBanner />
      <StillConfusesdBanner />
      <Achievements />
      <ExclusiveBuyFloating />

    </div>
  );
}
