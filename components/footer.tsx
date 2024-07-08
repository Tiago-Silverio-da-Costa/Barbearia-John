import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blackColor text-WhiteColor">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between py-8 mx-auto max-w-5xl w-5/6">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Barbearia John
        </p>
        <div className="flex items-center justify-center gap-2 text-2xl">
          <Link
            href="https://www.instagram.com/barbeariajohnn/"
            target="_blank"
            rel="noreferrer"
            className="text-goldColor hover:text-WhiteColor transition-all duration-300"
            aria-label="Instagram da Barbearia John"
          >
            <FaInstagram />
          </Link>
          <p className="text-goldColor">•</p>
          <Link
            href="https://www.facebook.com/barbeariajohnn/"
            target="_blank"
            rel="noreferrer"
            className="text-goldColor hover:text-WhiteColor transition-all duration-300"
            aria-label="Facebook da Barbearia John"
          >
            <FaFacebookF />
          </Link>
        </div>
        <Image  src="/logo.png" alt="" width={70} height={100} />
      </div>
    </footer>
  );
}