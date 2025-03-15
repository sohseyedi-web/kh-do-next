import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoDocumentTextOutline, IoChatbubblesOutline } from "react-icons/io5";
import Card from "./Card";
import { fetchCardData } from "@/services/data";

export default async function StatsWrapper() {
  const { numOfCategories, numOfPosts } = await fetchCardData();

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 grid-cols-3 gap-6">
      <Card
        title="کاربران"
        value={10}
        icon={<HiOutlineUserGroup className="lg:size-10 size-7" />}
      />
      <Card
        title="بلاگ ها"
        value={numOfPosts}
        icon={<IoDocumentTextOutline className="lg:size-10 size-7" />}
      />
      <Card
        title="دسته بندی ها"
        value={numOfCategories}
        icon={<IoChatbubblesOutline className="lg:size-10 size-7" />}
      />
    </div>
  );
}
