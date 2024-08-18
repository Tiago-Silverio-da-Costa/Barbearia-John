import Article from "@/components/blog/article";
import Footer from "@/components/blog/footer";
import Header from "@/components/blog/header";

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