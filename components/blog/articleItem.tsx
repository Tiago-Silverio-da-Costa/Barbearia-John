import Link from "next/link";
import momentTz from "moment-timezone";
import { TArticleData } from "../../app/api/utils";
import Image from "next/image";


export default async function ArticleItem({
  articles
}: {
  articles: TArticleData[]
}) {

  return (
    <section className="flex flex-col gap-6 py-8  mx-auto w-5/6 max-w-5xl">
      {articles.map((data, idx) =>
        <Link key={idx} href={`/article/${data.id}`} className="overflow-hidden group hover:scale-105 flex flex-col md:flex-row cursor-pointer transition-all duration-500 rounded-xl">
          <Image className="w-full md:w-fit" src={data.image} alt="Artigo do Tiago Silverio Programador" width={300} height={100} />
          <div className="flex flex-col justify-between gap-2 w-full px-6 py-4 bg-textTitle">
            <div className="flex flex-col gap-2">
              <h1 className={`text-2xl font-bold text-white`}>{data.title}</h1>
              <p className="text-white line-clamp-2">{data.subtitle}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-white">#{data.Theme?.name}</p>
              <p className="text-xs text-white">
                {momentTz(data.createdAt)
                  .tz("America/Sao_Paulo")
                  .format("DD/MM/YYYY HH:mm:ss")}
              </p>
            </div>
          </div>
        </Link>
      )}
    </section>
  )
}