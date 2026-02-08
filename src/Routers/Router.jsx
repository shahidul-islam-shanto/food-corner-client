import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CreateBoard from "../Pages/CreateBoard/CreateBoard";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashCard from "../Pages/Dashboard/DashCard";
import AdminHome from "../Pages/Dashboard/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <OurMenu />,
      },
      {
        path: "/ourShop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/createBoard",
        element: (
          <PrivateRoute>
            <CreateBoard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "dashCard",
        element: <DashCard />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
    ],
  },
]);

export default router;
