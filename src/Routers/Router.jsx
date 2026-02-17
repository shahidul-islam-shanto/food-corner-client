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
import AdminHome from "../Pages/Dashboard/PaymentHistory";
import AddItems from "../Pages/Dashboard/Reservation";
import ManageItems from "../Pages/Dashboard/UserHome";
import Menu from "../Pages/Dashboard/Menu";
import Shop from "../Pages/Dashboard/Shop";
import Contact from "../Pages/Dashboard/Contact";
import UserHome from "../Pages/Dashboard/PaymentHistory";
import Reservation from "../Pages/Dashboard/Reservation";
import PaymentHistory from "../Pages/Dashboard/UserHome";
import MyCart from "../Pages/Dashboard/MyCart";
import AddReview from "../Pages/Dashboard/AddReview";
import MyBooking from "../Pages/Dashboard/MyBooking";
import AllUsers from "../Pages/Dashboard/AllUsers";

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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashCard",
        element: <DashCard />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "addReview",
        element: <AddReview />,
      },
      {
        path: "myBooking",
        element: <MyBooking />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      // admin user
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
