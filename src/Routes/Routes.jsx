import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/Error/Error-page";
import Home from "../Pages/Home";
import Rooms from "../Pages/Rooms";
import Login from "../Pages/Login";
import Register from "../Pages/Register";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
         element: <Home></Home>,
        },
        {
          path: "/rooms",
          element: <Rooms></Rooms>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);

  export default router;