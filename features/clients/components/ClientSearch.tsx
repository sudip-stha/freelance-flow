import React from "react";
import Image from "next/image";

const ClientSearch = () => {
  return (
    <div className="relative">
      <Image
        src={"/icons/searchIcon.svg"}
        alt=""
        width={15}
        height={15}
        className="absolute left-4 top-3.5"
      />
      <input
        type="text"
        placeholder="Search clients"
        className="bg-card-bg p-2 pl-10 border rounded-xl font-inter text-primary min-w-100 placeholder:text-[14px]"
      />
    </div>
  );
};

export default ClientSearch;
