import React from "react";
import { StatCatdProps } from "../../type/data";
import Image from "next/image";

const StatCard = ({ data }: StatCatdProps) => {
  return (
    <div className="bg-card-bg w-[18rem] border-2 border-border flex flex-col gap-3 p-4 rounded-2xl font-geist">
      <div className="flex justify-between">
        <h4 className="font-semibold text-lg">{data.title}</h4>
        <Image src={data.iconUrl} alt="" width={20} height={20} />
      </div>
      <span className="text-2xl">
        {data.title === "Revenue" ? "$" : ""}
        {data.value}
      </span>
    </div>
  );
};

export default StatCard;
