import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthLayout from "../pages/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
