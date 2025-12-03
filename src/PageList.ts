import Home from "./pages/Home";
import About from "./pages/About";

export type navDataType = {
  name: string;
  path: string;
  element: React.FC<{}>;
};

// Used for navbar
export const navbarPages: navDataType[] = [
  { name: "Jakep.xyz", path: "/", element: Home },
  { name: "About", path: "/about", element: About },
];

// Used for routes
export const allPages: navDataType[] = navbarPages.concat([]);
