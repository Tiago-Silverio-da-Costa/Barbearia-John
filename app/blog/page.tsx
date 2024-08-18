import { getCustomFilterParams, getPaginationParams } from "@/components/blog/admin/utils";
import ArticleItem from "@/components/blog/articleItem";
import Footer from "@/components/blog/footer";
import Header from "@/components/blog/header";
import Pagination from "@/components/blog/pagination";
import { getArticles } from "../../app/api/utils";
import FilterNSearchHead from "@/components/blog/filterNSearchHead";

export default async function Blog({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {

  const paginationParams = getPaginationParams(searchParams);
  const customFilterParams = getCustomFilterParams(searchParams);

  const { data: articleData, count } = await getArticles({
    paginationParams,
    customFilterParams,
  });

  return (
    <>
      <div className="">

        <Header />
        <div className="flex flex-col items-center justify-center py-8">
          <FilterNSearchHead paginationParams={paginationParams} />

          {articleData.length > 0 ? (
            <ArticleItem articles={articleData} />
          ) : (
            <p className="flex items-center min-h-screen">Nenhum artigo encontrado</p>
          )}
          <Pagination
            pathname={"/"}
            searchParams={searchParams}
            valuesCount={count}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
