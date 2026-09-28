import React from "react";
import Image from "next/image";
import filterTabs from "../data/filterTab.data";

const FilterTab = () => {
  return (
    <div className="flex gap-1 items-center bg-card-bg px-2 py-1 border rounded-xl font-inter font-medium">
      <Image src={"/icons/filterIcon.svg"} alt="" width={18} height={18} />

      <ul className="flex gap-1.5">
        {filterTabs.map((item) => {
          return <li key={item.label} className="p-1 px-2.5 hover:bg-gray-400/20 rounded-lg text-[14px] font-semibold text-tertiary-text cursor-pointer">{item.label}</li>;
        })}
      </ul>
    </div>
  );
};

export default FilterTab;
