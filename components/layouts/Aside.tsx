import React from "react";
import NavList from "./navList/NavList";
import Link from "next/link";

const Aside = () => {
  return (
    <div className="bg-aside-bg flex flex-col gap-12 px-14 py-9">
      <h1 className="font-geist font-bold text-white text-xl px-3">
        <Link href={"/"}>
          Freelance<span>Flow</span>
        </Link>
      </h1>
      <NavList />
    </div>
  );
};

export default Aside;
