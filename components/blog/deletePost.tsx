"use client";

import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export function DeletePost({ id }: { id: string }) {


  const router = useRouter();

  const deletePost = async () => {



    const response = await fetch("/api/deletepost", {
      credentials: "include",
      cache: "no-cache",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
      })
    })
    if (response.ok) {
      router.push("/")
      router.refresh()
    }
  }

  return (
    <>
      <div
        onClick={() => deletePost()}
        className={` transition-all duration-200 hover:opacity-75 cursor-pointer flex items-center justify-center text-primary bg-secondary px-6 py-2 font-bold text-2xl`}
      ><FaTrash /></div>
    </>
  )
}