import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/about-page";
import ServicesPage from "./pages/service-page";
import BlogPage from "./pages/blog-page";
import WorkPage from "./pages/work-page";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
]);
