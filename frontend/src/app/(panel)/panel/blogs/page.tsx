import queryString from "query-string";
import BlogHeader from "./_/components/BlogHeader";
import BlogLists from "./_/components/BlogLists";
import { Suspense } from "react";

interface BlogPageProps {
  searchParams: Promise<any>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const query = queryString.stringify(searchParams);

  return (
    <>
      <BlogHeader />
      <hr className="bg-zinc-700 my-3" />
      <Suspense key={query}>
        <BlogLists query={query} />
      </Suspense>
    </>
  );
}
