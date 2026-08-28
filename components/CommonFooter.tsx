import {
  Mail,
} from "lucide-react";
import Link from "next/link";
import { SocialIcon } from "./SocialIcon";
import { FooterHeading } from "./FooterHeading";
import { FooterLink } from "./FooterLink";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const CommonFooter = () => {
  return (
    <footer className="bg-[#800000] text-white">
      {/* Main Footer */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-12

          sm:px-8
          sm:py-14

          lg:px-12
          lg:py-16

          xl:px-16
        "
      >
        <div
          className="
            grid
            gap-10

            sm:grid-cols-2

            lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]
            lg:gap-12
          "
        >
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <h2
                className="
                  font-serif
                  text-3xl
                  font-bold
                  tracking-wide
                  text-[#D9B77A]
                "
              >
                Lifesiddhi
              </h2>

              <p
                className="
                  text-base
          font-bold
          text-[#D9B77A]
                "
              >
                Personal Guidance. Practical Remedies.
              </p>
            </Link>

            <p
              className="
                mt-6
                max-w-[280px]
                text-sm
                leading-6
                text-white/85
              "
            >
              Personalised Vedic astrology consultations and Lal Kitab remedies to help you find clarity in marriage, career, business, finances and family matters
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href="https://www.facebook.com/share/1GPzUsGss8/" label="Facebook">
                <FaFacebook className="text-[#D9B77A]" />
              </SocialIcon>

              <SocialIcon href="https://www.instagram.com/astroguru.ayush?igsi=MWJ1ejN6ZTRmOW5jYQ==" label="Instagram">
                <FaInstagram className="text-[#D9B77A]" />
                
              </SocialIcon>

              <SocialIcon href="https://youtube.com/@astroguruayush?si=LSAs_OV9S4T4LrcH" label="YouTube">
               <FaYoutube className="text-[#D9B77A]" />
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>
              Quick Links
            </FooterHeading>

            <div className="mt-5 flex flex-col gap-4">
              <FooterLink href="/">
                Home
              </FooterLink>

              <FooterLink href="/about">
                About Us
              </FooterLink>

              <FooterLink href= "/aboutAyush">
              About Astrologer Ayush
              </FooterLink>
            </div>
          </div>

          {/* Services */}
          {/* <div>
            <FooterHeading>
              Services
            </FooterHeading>

            <div className="mt-5 flex flex-col gap-4">
              <FooterLink href="/prashna-kundli">
                Prashna Kundli
              </FooterLink>

              <FooterLink href="/universal-remedy">
                Universal Remedy
              </FooterLink>
            </div>
          </div> */}

          {/* Contact */}
          <div>
            <FooterHeading>
              Contact Us
            </FooterHeading>

            <a
              href="mailto:support@astroshubh.com"
              className="
                mt-5
                flex
                items-center
                gap-2
                text-sm
                text-white/90
                transition-colors
                hover:text-gold-light
              "
            >
              <Mail size={17} strokeWidth={1.8} />

              <span>
                fininterestam581@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div
          className="
            mt-10
            border-t
            border-[#9A650F]/50
            pt-6

            lg:mt-12
            lg:flex
            lg:items-center
            lg:justify-between
          "
        >
          {/* Copyright */}
          <p
            className="
              text-xs
              text-white/80

              sm:text-sm
            "
          >
            © 2025 AstroAyush. All Rights Reserved.
          </p>

          {/* Policies */}
          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-x-5
              gap-y-2

              lg:mt-0
              lg:justify-end
            "
          >
            <FooterLink href="/privacy-policy">
              Privacy Policy
            </FooterLink>

            <FooterLink href="/terms&condition">
              Terms & Conditions
            </FooterLink>

            <FooterLink href="/refundPolicy">
              Refund Policy
            </FooterLink>

            <FooterLink href="/shippingPolicy">
              Shipping & Delivery Policy
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};