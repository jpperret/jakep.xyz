import { navbarPages, navDataType } from "../PageList";
import { useState } from "react";
import {
  AiOutlineClose as CloseIcon,
  AiOutlineMenu as MenuIcon,
} from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const NavLink = ({ children }: { children: navDataType }) => (
  <button className="flex flex-col justify-center">
    <a className="rounded-md px-2 py-1 hover:no-underline" href={children.path}>
      {children.name}
    </a>
  </button>
);

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="absolute flex w-full flex-col justify-center px-4">
      <div className="align-center hidden h-16 space-x-4 md:flex">
        {navbarPages.map((link, i) => (
          <NavLink key={link.path}>{link}</NavLink>
        ))}
      </div>

      <button
        className="flex h-16 flex-col justify-center pl-2 md:hidden"
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        className={twMerge(
          "flex h-36 flex-col space-y-4 overflow-hidden transition-all md:hidden",
          !navOpen && "h-0",
        )}
      >
        {navbarPages.map((link, i) => (
          <NavLink key={link.path}>{link}</NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
