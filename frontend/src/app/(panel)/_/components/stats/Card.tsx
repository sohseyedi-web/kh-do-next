"use client"
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { ReactNode } from "react";
import { Tooltip } from "react-tooltip";

type CardType = {
  title: string;
  value: number | string;
  icon: ReactNode;
};

const Card = ({ title, value, icon }: CardType) => {
  return (
    <div
      className="flex items-center gap-4 bg-white border rounded-2xl md:p-4 p-2 cursor-pointer md:flex-row flex-col "
      data-tooltip-id="my-tooltip"
      data-tooltip-content={title}
    >
      <div className="p-3 bg-teal-500  text-white rounded-2xl">{icon}</div>
      <div>
        <h3 className="lg:text-2xl md:text-lg md:block hidden font-semibold">
          {title}
        </h3>
        <p className="lg:text-2xl text-lg font-bold text-zinc-800 dark:text-white">
          {toPersianNumbersWithComma(String(value))}
        </p>
      </div>
      <Tooltip id="my-tooltip" place="top" />
    </div>
  );
};

export default Card;
