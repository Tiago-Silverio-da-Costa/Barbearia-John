"use client"; 

import { usePathname } from "next/navigation";
import Image from "next/image";

const ArticleImage = ({ image }: { image: string }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/blog" ? (
        <Image className="w-full" src={image} alt="Artigo do Tiago Silverio Programador" width={1200} height={300} />
      ) : (
        <div className="md:relative w-full md:h-96 md:overflow-hidden">
          <Image
            className="md:absolute md:top-[-50px] md:left-0 w-full md:w-auto md:h-auto md:min-w-full md:min-h-full"
            src={image}
            alt="Artigo do Tiago Silverio Programador"
            width={1200}
            height={300}
          />
        </div>
      )}
    </>
  );
};

export default ArticleImage;
