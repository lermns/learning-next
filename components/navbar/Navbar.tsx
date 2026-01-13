import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", label: "About Page" },
  { path: "/price", label: "Price Page" },
  { path: "/contact", label: "Contact Page" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-950 bg-opacity-50 p-2 m-2 rounded">
      <Link className="flex items-center" href="/">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.label} {...item} />
      ))}
    </nav>
  );
};
