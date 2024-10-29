import { navbarPages, navDataType } from "../PageList";
import { useState } from "react";
import {
  AiOutlineClose as CloseIcon,
  AiOutlineMenu as MenuIcon,
} from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const NavLink = ({ children }: { children: navDataType }) => (
  <div className="flex flex-col justify-center">
    <a
      className="px-2 py-1 rounded-md hover:bg-blue-100 hover:no-underline"
      href={children.path}
    >
      {children.name}
    </a>
  </div>
);

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="absolute bg-blue-50 px-4 flex flex-col justify-center w-full">
        <div className="hidden md:flex align-center space-x-4 h-16">
          {navbarPages.map((link, i) => (
            <NavLink key={i}>{link}</NavLink>
          ))}
        </div>

        <>
          <button
            className="md:hidden h-16 pl-2 flex flex-col justify-center"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </>

        <div
          className={twMerge(
            "md:hidden transition-all overflow-hidden h-36 flex flex-col space-y-4",
            !navOpen && "h-0"
          )}
        >
          {navbarPages.map((link, i) => (
            <NavLink key={i}>{link}</NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
