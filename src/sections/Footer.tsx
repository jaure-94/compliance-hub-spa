import LogoWhite from "@/assets/ch-logo-white-ext.svg";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import { FaFacebookSquare } from "react-icons/fa";
import Button from "@/components/Button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container flex justify-center flex-col gap-8">
        <a href="#home" className="flex justify-center">
          <LogoWhite height={110} />
        </a>

        <nav className="flex flex-col justify-center gap-3 md:flex-row md:gap-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#get-in-touch">Contact</a>
        </nav>

        <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
          <SocialX />
          <SocialLinkedIn />
          <a
            href="https://www.facebook.com/share/ph2uakFA1iGrpYSD/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            <FaFacebookSquare className="h-5 w-5 cursor-pointer" />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-xs">&copy; 2025 Compliance Hub Inc. All rights reserved.</p>
          <p className="text-xs mb-1">Company Number 15999585. VAT Number 477880139</p>
          <Button variant="text">
            <Link href="/privacy">
              Privacy Policy
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
