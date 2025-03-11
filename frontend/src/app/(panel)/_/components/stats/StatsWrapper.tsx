import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoDocumentTextOutline, IoChatbubblesOutline } from "react-icons/io5";
import Card from "./Card";

const StatsWrapper = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 grid-cols-3 gap-6">
      <Card title="کاربران" value={10} icon={<HiOutlineUserGroup className="lg:size-10 size-7"/>} />
      <Card title="بلاگ ها" value={10} icon={<IoDocumentTextOutline className="lg:size-10 size-7"/>} />
      <Card title="نظرات" value={10} icon={<IoChatbubblesOutline className="lg:size-10 size-7"/>} />
    </div>
  );
};

export default StatsWrapper;
