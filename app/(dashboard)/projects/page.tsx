import { Button } from "@/components/ui/button";
import FilterTab from "@/features/projects/components/FilterTab";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <span className="font-geist font-medium text-[12px] text-active-text">
        WORK IN PROGRESS
      </span>
      <div className="flex justify-between items-end">
        <h2 className="font-geist font-bold text-5xl text-primary-text">
          Projects
        </h2>
        <Button size={"md"}>
          <Image src={"/icons/plusIcon.svg"} alt="" width={18} height={18} />{" "}
          New project
        </Button>
      </div>
      <div className="flex justify-between items-center">
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
            placeholder="Search projects or clients"
            className="bg-card-bg p-2 pl-10 border rounded-xl font-inter text-primary min-w-100 placeholder:text-[14px]"
          />
        </div>
        <FilterTab />
      </div>
    </div>
  );
};

export default page;
