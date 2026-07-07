import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/Home/CategoryNews/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "*",
    element: <h2>Error Page</h2>,
  },
]);

export default router;
