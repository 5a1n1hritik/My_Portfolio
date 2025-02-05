import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import PageNotFound from "../components/PageNotFound";
import HomePage from "../pages/Home";
import About from "../pages/About";
import Projects from "../components/Projects";
import SkillsSection from "../components/SkillsSection";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <SkillsSection />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
