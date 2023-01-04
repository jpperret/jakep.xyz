import Home from "./pages/Home.js";
import About from "./pages/About.js";
import BracketBuilder from "./pages/BracketBuilder.js";
import BracketBuilderPrivacy from "./pages/BracketBuilderPrivacy.js";

// Used for navbar
export const navbarPages = [
  { name: "Jakep.xyz", path: "/", element: <Home /> },
  { name: "About", path: "/about", element: <About /> },
  {
    name: "Bracket Builder",
    path: "/bracket-builder",
    element: <BracketBuilder />,
  },
];

// Used for routes
export const allPages = navbarPages.concat([
  {
    name: "Bracket Builder",
    path: "/bracket-builder/privacy",
    element: <BracketBuilderPrivacy />,
  },
]);
