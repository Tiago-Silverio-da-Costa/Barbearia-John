import Image from "next/image";
import localFont from "next/font/local";
import prisma from "@/adapter/prisma"
import ReadingText from "./readingText";
import Paragraph from "./paragraph";
import Link from "next/link";
import momentTz from "moment-timezone";
import { getArticles } from "../../../app/api/utils";
import ArticleImage from "./articleImage";
import CollapseSummary from "./collapseSummary";

async function getData({ id }: { id: string }) {

  const data = await prisma.post.findFirst({
    where: {
      id: id
    },
    select: {
      title: true,
      subtitle: true,
      image: true,
      author: true,
      profession: true,
      content: true,
      Theme: {
        select: {
          name: true
        }
      }
    }
  })
  return data
}

async function ArticleHead({ id }: { id: string }) {
  const postData = await getData({ id })

  if (!postData) return
  if (!postData.author) return
  if (!postData.profession) return
  if (!postData.content) return

  return (
    <div className="flex flex-col bg-primary">
      <div className="flex items-center gap-4">
        <p className={` rounded-lg uppercase border border-white px-4 py-2 font-medium text-white text-xs tracking-tighter`}>{postData.Theme?.name}</p>
        <ReadingText content={postData.content} />
      </div>



      <div className="flex flex-col">
        <h1 className={` mt-8 italic pl-1 text-5xl font-medium text-white tracking-tighter leading-[1]`}>
          {postData.title}
        </h1>
        <span className={` max-w-[40rem] mt-2 text-5xl not-italic font-medium text-white tracking-tighter leading-10 md:leading-[3rem]`}>{postData.subtitle.charAt(0).toUpperCase() + postData.subtitle.slice(1)}</span>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <Image className="rounded-full border-2 border-white scale-90" src={postData.author.image as string} alt="Foto do Tiago Silverio Programador" width={50} height={50} />
        <div className="flex flex-col gap-1">
          <p className={` text-sm text-white font-normal tracking-tighter leading-4`}>{postData.author.name}</p>
          <p className="text-xs text-white font-light tracking-tighter uppercase leading-3">{postData.profession.name}</p>
        </div>
      </div>
    </div>
  )
}

async function ArticleBody({ id }: { id: string }) {
  const data = await getData({ id })

  if (!data) return
  if (!data.content) return

  return (
    <div className="">
      <Paragraph content={data.content} />
    </div>
  )
}

async function ArticlesRecommend({ id }: { id: string }) {

  const paginationParams = {
    page: 1,
    perPage: 5,
    sort: 'createdAt',
    search: undefined
  };

  const customFilterParams = {
    recommended: true,
    user: ""
  };
  const { data: articleData, count } = await getArticles({
    paginationParams,
    customFilterParams,
  });


  if (!articleData || articleData.length === 0) return null;

  return (
    <section className="flex flex-wrap text-center md:text-start">
      {articleData.map((dt: any, idx: any) =>
        <Link className="overflow-hidden rounded-xl group hover:scale-105 flex flex-col w-fit cursor-pointer transition-all duration-500 hover:border-secondaryText" key={idx} href={`/article/${id}`}>
          <Image className="w-full md:w-fit" src={dt.image} alt="Artigo do Tiago Silverio Programador" width={300} height={100} />
          <div className="flex flex-col justify-between gap-2 w-full px-6 py-4 bg-textTitle">
            <div className="flex flex-col gap-2">
              <h1 className={` text-2xl max-w-80 font-bold text-white`}>{dt.title}</h1>
              <p className="text-white line-clamp-2 max-w-80">{dt.subtitle}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-white">#{dt.Theme?.name}</p>
              <p className="text-xs text-white">
                {momentTz(dt.createdAt)
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

export default async function Article({ id }: { id: string }) {

  const postData = await getData({ id })

  if (!postData) return

  const lines = postData.content?.split("\n")
  const titles: { title: string; formattedTitle: string }[] = [];

  const contentElements = lines?.map((line: any, index: any) => {
    const isTitle = line.startsWith("<title>");
    if (isTitle) {
      const title = line.replace(/<title>/, "").trim()
      const formattedTitle = title.replace(/\s+/g, '-');
      titles.push({ title, formattedTitle })
      return (
        <h2 key={index} id={formattedTitle} className="text-3xl font-bold text-primary tracking-tighter leading-10 md:leading-6">
          {title}
        </h2>
      )
    }
    return <p key={index}>{line}</p>;
  })

  return (
    <>
      <ArticleImage image={postData.image} />
      <div className="shadow-lg py-6 bg-primary">
        <div className="mx-auto w-5/6 max-w-5xl py-6">
          <ArticleHead id={id} />
        </div>
      </div>
      <div className="relative flex gap-16 mx-auto w-5/6 max-w-5xl mt-16">

        <div className="hidden lg:flex flex-col gap-1 text-gray-500 bg-white rounded-lg border overflow-y-scroll scrollbar h-96 sticky top-4 p-4 min-w-60">
          <ul>
            {titles.map((item, index) => (
              <li key={index}>
                <Link href={`/article/${id}#${item.formattedTitle}`} className="w-fit max-w-48 mt-2 hover:text-textTitle">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <CollapseSummary data={titles} id={id} />

        <ArticleBody id={id} />
      </div>
      <div className="flex flex-col gap-4 mx-auto w-5/6 max-w-5xl md:max-w-7xl pt-16 md:pt-32 pb-6">
        <p className=" uppercase text-3xl tracking-tighter leading-6 font-bold">Recomendados:</p>
        <ArticlesRecommend id={id} />
      </div>
    </>
  )
}