import { getPostById } from "@/services/postService";
import Image from "next/image";
import toLocaleDate from "@/utils/toLocalDate";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Header from "./_/components/Header";

export default async function BlogId({
  params,
}: {
  params: Record<string, string>;
}) {
  const { blogId } = params;
  const data = await getPostById(blogId);

  const blog = data?.post || {};

  return (
    <>
      <Header title={blog?.title} />
      <hr className="bg-zinc-700 my-3" />
      <section className="lg:w-[50%] w-[95%] space-y-4" key={blog?._id}>
        <div className="flex gap-x-3 lg:flex-row flex-col lg:space-y-0 space-y-2">
          <Image
            src={blog?.coverImageUrl}
            alt={blog?.title}
            width={200}
            height={50}
            className="object-cover rounded-xl"
          />
          <div className="flex flex-col space-y-4">
            <InfoRow label={"عنوان"} value={blog?.title} />
            <InfoRow label={"متن کوتاه"} value={blog?.briefText} />
            <InfoRow label={"آدرس اینترنتی"} value={blog?.slug} />
            <InfoRow label={"دسته بندی"} value={blog?.category?.title} />
            <InfoRow
              label={"زمان مطالعه"}
              value={toPersianNumbers(blog?.readingTime)}
            />

            <InfoRow label="تعداد لایک " value={blog?.likesCount || "۰"} />
            <InfoRow
              label={"تاریخ ایجاد"}
              value={toLocaleDate(blog?.createdAt)}
            />
          </div>
        </div>
        <InfoRow label="متن بلاگ" value={blog?.text} />
      </section>
    </>
  );
}

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-x-3 w-full">
    <span className="font-semibold text-teal-500">{label} : </span>
    <p className="font-semibold break-words">{value}</p>
  </div>
);
