import { createBrowserRouter } from "react-router";
import RootLayOut from "../rootLayOut/RootLayOut";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Blog from "../pages/Blog/Blog";
import CarDetails from "../pages/CarDetails/CarDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/cardetails/:id",
        Component: CarDetails,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
