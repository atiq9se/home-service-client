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
import ManageServices from "../pages/ManageServices/ManageServices";
import UpdateService from "../pages/UpdateService/UpdateService";
import ServiceToDo from "../pages/ServiceToDo/ServiceToDo";
import TeamPage from "../pages/TeamPage/TeamPage";
import AboutPage from "../pages/AboutPage/AboutPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            loader:()=>fetch('https://y-blond-theta.vercel.app/popularServices'),
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
          loader:()=>fetch('https://y-blond-theta.vercel.app/services'),
          element: <AllServices></AllServices>,
          errorElement: <ErrorPage></ErrorPage>
        },

        {
          path:'/services/:id',
          loader:({params})=>fetch(`https://y-blond-theta.vercel.app/services/${params.id}`),
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          errorElement:<ErrorPage></ErrorPage>
        },

        {
          path:'/manageServices',
          element:<PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
          errorElement:<ErrorPage></ErrorPage>
        },

        {
          path:'updateServices/:id',
          element:<PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
          loader:({params})=>fetch(`https://y-blond-theta.vercel.app/services/${params.id}`),
          errorElement:<ErrorPage></ErrorPage>
        },

        {
          path:'/addBooking/:id',
          loader:({params})=>fetch(`https://y-blond-theta.vercel.app/addBooking/${params.id}`),
          element:<PrivateRoute><AddBooking></AddBooking></PrivateRoute>,
          errorElement:<ErrorPage></ErrorPage>
        },

        {
          path:'/bookedServices',
          element:<PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
          errorElement:<ErrorPage></ErrorPage>
        },

        {
          path:'/serviceTodo',
          element:<PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>,
          errorElement:<ErrorPage></ErrorPage>
        },
        {
          path:'/team',
          element:<TeamPage></TeamPage>,
          errorElement:<ErrorPage></ErrorPage>
        },
        {
          path:'/about',
          element:<AboutPage></AboutPage>,
          errorElement:<ErrorPage></ErrorPage>
        },

      ]
    },
  ]);

  export default router;