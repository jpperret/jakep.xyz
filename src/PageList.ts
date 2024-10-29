import Home from "./pages/Home";
import About from "./pages/About";
import BracketBuilder from "./pages/BracketBuilder";
import BracketBuilderPrivacy from "./pages/BracketBuilderPrivacy";

export type navDataType = {
  name: string;
  path: string;
  element: React.FC<{}>;
};

// Used for navbar
export const navbarPages: navDataType[] = [
  { name: "Jakep.xyz", path: "/", element: Home },
  { name: "About", path: "/about", element: About },
  {
    name: "Bracket Builder",
    path: "/bracket-builder",
    element: BracketBuilder,
  },
];

// Used for routes
export const allPages: navDataType[] = navbarPages.concat([
  {
    name: "Bracket Builder",
    path: "/bracket-builder/privacy",
    element: BracketBuilderPrivacy,
  },
]);
