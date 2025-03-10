"use client";
import CountUp from "react-countup";

type StatBoxType = {
  label: string;
  value: number;
};

const Stat = ({ label, value }: StatBoxType) => {
  return (
    <div className="flex items-center flex-col justify-center rounded-xl border shadow w-full h-[190px]">
      <h3 className="text-3xl font-bold text-teal-500">
        <CountUp start={0} end={value} duration={2.5} />
      </h3>
      <p className=" text-lg font-semibold mt-2">{label}</p>
    </div>
  );
};

export default Stat;
