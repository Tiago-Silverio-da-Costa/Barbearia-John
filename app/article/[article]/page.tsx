import Article from "@/components/blog/article";
import Header from "@/components/blog/header";
import Footer from "@/components/home/footer";

export default async function Page({
  params: { article },
}: {
  params: { article: string };
}) {
  const id = article

  return (
    <>
      <Header id={id} />
      <Article id={id} />
      <Footer />
    </>
  )
}