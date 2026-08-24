import Achievements from "@/components/Achievements";
import Button from "@/components/Button";
import HomeBanner from "@/components/HomeBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <HomeBanner />
      <Achievements />

    </div>
  );
}
