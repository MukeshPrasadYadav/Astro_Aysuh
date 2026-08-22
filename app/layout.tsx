import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NormalHeader from "@/components/NormalHeader";
import NormalLowerNav from "@/components/NormalLowerNav";
import { CommonFooter } from "@/components/CommonFooter";
import WhatsAppButton from "@/components/WhatsappButton";
import { UserProvider } from "@/context/UserContext";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Astro Ayush",
    template: "%s | Astro Ayush",
  },
  description:
    "Ancient wisdom, modern guidance. Explore Astro Ayush.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <UserProvider >
        <NormalHeader />
        {children}
        <WhatsAppButton />
        <CommonFooter />
        <NormalLowerNav />
        </UserProvider>
      </body>
    </html>
  );
}