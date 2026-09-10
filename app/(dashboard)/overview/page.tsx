import { Button } from "@/components/ui/button";
import OverviewStats from "@/features/overview/components/OverviewStats";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col gap-6 px-8 py-6">
      <span className="font-geist font-medium text-[12px] text-active-text">
        YOUR WORKSPACE
      </span>
      <div className="flex justify-between items-end">
        <h2 className="font-geist font-bold text-5xl text-primary-text">
          Good morning, Sudip
        </h2>
        <Button size={"sm"}>
          <Image src={"/icons/plusIcon.svg"} alt="" width={20} height={20} />{" "}
          New project
        </Button>
      </div>
      <div>
        <OverviewStats />
      </div>
    </div>
  );
};

export default page;
