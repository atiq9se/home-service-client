import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddService from "../pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute";
import AllServices from "../pages/AllServices/AllServices";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            errorElement: <ErrorPage></ErrorPage>
        },
        {
            path: "/register",
            element: <Register></Register>,
            errorElement: <ErrorPage></ErrorPage>
        },
        {
            path: "/login",
            element: <Login></Login>,
            errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: "/addService",
          element: <PrivateRoute><AddService></AddService></PrivateRoute>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: "/allServices",
          element: <AllServices></AllServices>,
          errorElement: <ErrorPage></ErrorPage>
        }

      ]
    },
  ]);

  export default router;