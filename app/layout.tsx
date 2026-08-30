import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NormalHeader from "@/components/NormalHeader";
import NormalLowerNav from "@/components/NormalLowerNav";
import { CommonFooter } from "@/components/CommonFooter";
import WhatsAppButton from "@/components/WhatsappButton";
import { UserProvider } from "@/context/UserContext";
import Script from "next/script";

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
         <Script
          id="meta-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1031293029897594');
            fbq('track', 'PageView');
          `}
        </Script>
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