import { RiArrowLeftSLine } from "react-icons/ri";
import Link from "next/link";
import HeaderLayout from "./_/components/HeaderLayout";
import Stats from "./_/components/Stats";

function HomePage() {
  return (
    <>
      <HeaderLayout />
      <section className="pt-16 max-w-4xl text-center mx-auto container space-y-6">
        <h1 className="text-5xl font-extrabold">دوربین</h1>
        <h5 className="md:text-3xl text-xl font-bold">
          بخونید، یاد بگیرید و آنلاین خرید کنید
        </h5>
        <p className="md:text-lg text-sm font-semibold mb-3">
          و به کمک دوره های ما به سمت درآمد سازی حرکت کنید
        </p>
        <Link
          href={"/blogs"}
          className="md:w-[280px] w-[200px] bg-zinc-800 text-white mx-auto h-[45px] mt-8 text-lg rounded-xl flex items-center justify-center hover:bg-zinc-900 transition-all duration-300 font-medium"
        >
          شروع کنید
          <RiArrowLeftSLine size={28} />
        </Link>
      </section>
      <Stats/>
    </>
  );
}

export default HomePage;
