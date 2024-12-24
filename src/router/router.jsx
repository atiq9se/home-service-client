import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddService from "../pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute";
import AllServices from "../pages/AllServices/AllServices";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AddBooking from "../pages/AddBooking/AddBooking";
import BookedServices from "../pages/BookedServices/BookedServices";

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
          path: "/services",
          loader:()=>fetch('http://localhost:5000/services'),
          element: <AllServices></AllServices>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path:'/services/:id',
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
          element:<ServiceDetails></ServiceDetails>,
          errorElement:<ErrorPage></ErrorPage>
        },
        {
          path:'/addBooking/:id',
          loader:({params})=>fetch(`http://localhost:5000/addBooking/${params.id}`),
          element:<AddBooking></AddBooking>,
          errorElement:<ErrorPage></ErrorPage>
        },
        {
          path:'/bookedServices',
          element:<BookedServices></BookedServices>,
          errorElement:<ErrorPage></ErrorPage>
        },

      ]
    },
  ]);

  export default router;