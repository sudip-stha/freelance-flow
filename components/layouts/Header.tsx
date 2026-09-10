import { Button } from "@base-ui/react";
import Image from "next/image";

const Header = () => {
  const date = new Date();

  const formatDate = date
    .toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
  return (
    <div className="flex justify-between items-center px-8 py-5 border-b-2 border-border font-geist">
      <h2 className="font-semibold text-primary-text text-sm">{formatDate}</h2>
      <div className="flex items-center gap-5">
        <Button>
          <Image
            src="icons/notificationIcon.svg"
            alt="This is a notification icon."
            width={18}
            height={18}
          />
        </Button>
        <div className="bg-accent rounded-full px-2 py-1">
          <span className="text-white text-[12px] font-semibold">AK</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
