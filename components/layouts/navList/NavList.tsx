"use client";
import navItems from "@/data/nav-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = () => {
  const pathName = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-6 font-geist font-semibold text-secondary-text">
        {navItems.map((item) => {
          return (
            <li
              key={item.url}
              className={`px-3 py-2 text-lg tracking-wider ${pathName == item.url ? "text-active-text bg-white/10 rounded-lg" : ""}`}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
