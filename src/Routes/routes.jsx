import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import VerifyTicket from "../Pages/VerifyTicket/VerifyTicket";
import Login from "../SharedPages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/verifyTicket",
        element: <VerifyTicket />,
      },
    ],
  },
]);
