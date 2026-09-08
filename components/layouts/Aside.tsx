import React from "react";
import NavList from "./navList/NavList";
import Logo from "../ui/Logo";

const Aside = () => {
  return (
    <div className="bg-aside-bg flex flex-col gap-12 px-14 py-9">
      <Logo />
      <NavList />
    </div>
  );
};

export default Aside;
