"use client";

import Link from "next/link";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"]
});


export default function CollapseSummary({ data, id }: {
    data: {
        title: string;
        formattedTitle: string;
    }[],
    id: string
}) {

    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div className={`lg:hidden flex flex-col group ${openPopup && "gap-4 -translate-y-[10%]"} mx-auto w-5/6 shadow-lg bg-white rounded-lg border-1 border-gray-500 justify-center items-center fixed bottom-0 left-2/4 transform -translate-x-1/2 -translate-y-1/2 py-4 `}>
            <button
                aria-label="Menu"
                type="button"
                className={`${openPopup && "border-b border-b-gray-700 w-full"} flex  justify-center pb-2 items-center gap-2 `}
                onClick={() => setOpenPopup(!openPopup)}
            >
                <FiPlus className="text-2xl text-black group-hover:opacity-80" />
                <span className="text-black uppercase font-bold group-hover:opacity-80">Nessa página</span>
            </button>
            <div className={` ${openPopup && "scrollbar h-40"}`}>
                {
                    openPopup && (
                        <ul className="p-4 flex flex-col gap-4">
                            {data.map((item, index) => (
                                <li key={index}>
                                    <Link href={`/article/${id}#${item.formattedTitle}`} className={`${righteous.className} w-fit max-w-48 mt-2 text-black hover:opacity-80`}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )
}