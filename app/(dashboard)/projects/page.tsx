import { Button } from "@/components/ui/button";
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
      <div>
        <Image src={"/icons/searchIcon.svg"} alt="" width={16} height={16} />
        <input type="text" placeholder="Search projects or clients" />
      </div>
    </div>
  );
};

export default page;
