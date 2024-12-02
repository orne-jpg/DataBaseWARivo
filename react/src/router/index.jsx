import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layout/layout";
import Landing from "../pages/Landing";
import Explore from "../pages/Explore";
import AuthSignup from "../pages/AuthSignup";
import AuthLogin from "../pages/AuthLogin";
import HomeMap from "../pages/HomeMap";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Not Found</div>,
    children: [
      // Home route
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "signup",
        element: <AuthSignup />,
      },
      {
        path: "login",
        element: <AuthLogin />,
      },
      {
        path: "homeMap",
        element: <HomeMap />,
      },
      {
        path: "notFound",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
