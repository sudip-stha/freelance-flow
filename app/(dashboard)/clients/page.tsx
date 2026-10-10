import { Button } from "@/components/ui/button";
import ClientSearch from "@/features/clients/components/ClientSearch";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <span className="font-geist font-medium text-[12px] text-active-text">
        PEOPLE WORTH BUILDING WITH
      </span>
      <div className="flex justify-between items-end">
        <h2 className="font-geist font-bold text-5xl text-primary-text">
          Clients
        </h2>
        <Button size={"md"}>
          <Image src={"/icons/plusIcon.svg"} alt="" width={18} height={18} />{" "}
          Add client
        </Button>
      </div>
      <ClientSearch />
    </div>
  );
};

export default page;
