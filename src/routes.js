import React from "react";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import HireMe from "./pages/HireMe";
import Experiences from "./pages/Experiences";
const routes = [
  { path: "/about", element: <About /> },
  { path: "/experiences", element: <Experiences /> },
  { path: "/hire-me", element: <HireMe /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
