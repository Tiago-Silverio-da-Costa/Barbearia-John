
"use client";

import Link from "next/link";
import { DeletePost } from "./deletePost";
import { CreatePost } from "./createPost";
import EditPost from "./editPost";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";

export default function Header({ id }: { id?: string }) {
  const pathname = usePathname();

  return (
    <section className="bg-black w-full">
      <div className="flex justify-between items-center mx-auto w-5/6 max-w-5xl py-4">
        <Link href="/" aria-label="Logo do Tiago Costa" className="hidden md:flex items-center gap-2">
          <Image src="/logo.png" alt="Logo do Tiago Silverio Programador" width={80} height={80} />
        </Link>
        <div className="flex items-center justify-center">
              <Link
                href="https://api.whatsapp.com/send?phone=554797713257"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 py-4 px-6 hover:text-goldColor transition-all duration-300"
                aria-label="Facebook da Barbearia John"
              >
                <FaWhatsapp className="text-2xl" />
              </Link>
              <Link
                href="https://www.instagram.com/barbeariajohnn/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 py-4 px-6 hover:text-goldColor transition-all duration-300"
                aria-label="Instagram da Barbearia John"
              >
                <FaInstagram className="text-2xl" />
              </Link>
              <Link
                href="https://www.facebook.com/barbeariajohnn/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 py-4 px-6 hover:text-goldColor transition-all duration-300"
                aria-label="Facebook da Barbearia John"
              >
                <FaFacebookF className="text-2xl" />
              </Link>
              <Link
                href="https://maps.app.goo.gl/4toBGJMxHn73mh5w8"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 py-4 px-6 hover:text-goldColor transition-all duration-300"
                aria-label="Facebook da Barbearia John"
              >
                <PiMapPinFill className="text-2xl" />
              </Link>
            </div>
        <div className="hidden items-center gap-4">
          {!id && (
            <CreatePost />
          )}
          {id && (
            <>
              <DeletePost id={id} />
              <EditPost id={id} />
            </>
          )}

        </div>
      </div >
    </section >
  )
}