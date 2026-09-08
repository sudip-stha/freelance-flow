import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <h1 className="font-geist font-bold text-white text-xl px-3">
        <Link href={"/"}>
          Freelance<span className="text-active-text">Flow</span>
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
