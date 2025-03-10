import Image from "next/image";
import { FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-100 p-6 md:p-8 mt-20">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-right">
        <div className="md:text-center text-right">
          <h2 className="md:text-5xl text-3xl font-bold text-teal-500">
            دوربین
          </h2>
          <p className="md:text-lg mt-2">مرجع تخصصی دوربین حفاظتی</p>
          <div className="flex justify-start gap-3 mt-4 md:text-xl">
            <FaInstagram size={20} className="text-teal-500" />
            <FaTelegram size={20} className="text-teal-500" />
            <FaWhatsapp size={20} className="text-teal-500" />
          </div>
        </div>

        <div className="md:text-center text-right">
          <h3 className="md:text-2xl text-xl font-semibold text-teal-500">
            دوربین
          </h3>
          <ul className="mt-4 space-y-4">
            <li>بلاگ دوربین</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
          </ul>
        </div>

        <div className="md:text-center text-right">
          <h3 className="md:text-2xl text-xl font-semibold text-teal-500">
            فروشگاه
          </h3>
          <ul className="mt-4 space-y-4">
            <li>محصولات ما</li>
            <li>پشتیبانی</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>

        <div className="md:text-center text-right">
          <h3 className="md:text-2xl text-xl font-semibold text-teal-500">
            مجوز ها
          </h3>
          <ul className="mt-4 flex items-center gap-x-3">
            <div className="bg-white p-4 rounded-xl">
              <Image
                src="/enamad.png"
                alt="اینماد"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-4 rounded-xl">
              <Image
                src="/etehadiye.png"
                alt="اتحادیه"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </ul>
          <p className="mt-2">آدرس : اهواز نادری خیابون اول</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
