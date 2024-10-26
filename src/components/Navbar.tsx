import { navbarPages, navDataType } from "../PageList";
import { useState } from "react";
import {
  AiOutlineClose as CloseIcon,
  AiOutlineMenu as MenuIcon,
} from "react-icons/ai";

const NavLink = ({ children }: { children: navDataType }) => (
  <div className="flex flex-col justify-center">
    <a
      className="px-2 py-1 rounded-md hover:bg-gray-200 hover:no-underline"
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
      <div className="bg-gray-100 px-4 flex flex-col justify-center">
        <div className="hidden md:flex align-center space-x-4 h-16">
          {navbarPages.map((link, i) => (
            <NavLink key={i}>{link}</NavLink>
          ))}
        </div>

        <>
          <div
            className="w-fit md:hidden h-16 pl-2 flex flex-col justify-center"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </>

        {navOpen ? (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navbarPages.map((link, i) => (
                <NavLink key={i}>{link}</NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
