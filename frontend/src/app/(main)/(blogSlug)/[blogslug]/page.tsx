import toLocaleDate from "@/utils/toLocalDate";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export const dynamic = "force-dynamic";

async function BlogDetail({ params }: { params: Promise<any> }) {
  const resolvedParams = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${resolvedParams.blogslug}`,
    { cache: "no-store" }
  );
  const {
    data: { post },
  } = await res.json();

  return (
    <div className="text-zinc-600 max-w-7xl mx-auto py-7 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Link href={"/blogs"}>
            <AiOutlineArrowRight size={25} className="text-teal-500" />
          </Link>
          <h3 className="lg:text-2xl text-xl font-semibold text-teal-500">
            عنوان : {post.title}
          </h3>
        </div>
        <div className="flex items-center gap-x-3 lg:text-base text-sm">
          تاریخ ایجاد : {toLocaleDate(post.createdAt)}
        </div>
      </div>
      <hr className="bg-zinc-700 my-3" />
      <div className="relative w-full h-[400px] mb-5">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          fill
          className="object-cover rounded"
        />
      </div>

      <p className="my-3 break-words">{post.text}</p>
    </div>
  );
}
export default BlogDetail;
