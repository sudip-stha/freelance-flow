import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 border-b border-border font-geist">
      <h2>Tuesday, March 19, 2024</h2>
      <div className="flex items-center gap-5">
        <Image
          src="icons/notificationIcon.svg"
          alt="This is a notification icon."
          width={18}
          height={18}
        />
        <div className="bg-accent rounded-full px-2.5 py-2">
          <span className="text-white text-[14px] font-semibold">AK</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
