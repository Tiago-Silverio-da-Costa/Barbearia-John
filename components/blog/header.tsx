
"use client";

import Link from "next/link";
import { DeletePost } from "./deletePost";
import { CreatePost } from "./createPost";
import EditPost from "./editPost";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header({ id }: { id?: string }) {
  const pathname = usePathname();

  return (
    <section className="bg-[hsla(0,0%,100%,.5)] border border-[hsla(0,0%,100%,.5)] w-full">
      <div className="flex justify-between items-center mx-auto w-5/6 max-w-5xl py-4">
        <Link href="/" aria-label="Logo do Tiago Costa" className="flex items-center gap-2">
          <Image className="rounded-full" src="/home/header/logo.svg" alt="Logo do Tiago Silverio Programador" width={50} height={80} />
          <h1 className="hidden md:block text-lg font-bold text-textTitle uppercase">Programador</h1>
        </Link>
        <ul>
          <li className="flex flex-col items-center">
            {pathname === "/blog" && (
              <span className="leading-3 text-xl">•</span>
            )}
            <Link className="text-lg hover:opacity-80 transition-all duration-500" href="/blog">Mais artigos</Link>
          </li>
        </ul>
        <Link className="hidden md:flex items-center gap-2 text-sm bg-textTitle font-semibold text-white hover:opacity-90 py-3 px-6 rounded-md w-fit transition-all duration-300"
          target="_blank"
          rel="noreferrer"
          aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
          href="https://api.whatsapp.com/send?phone=5511982391118"
        >

          Fazer orçamento
        </Link>
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