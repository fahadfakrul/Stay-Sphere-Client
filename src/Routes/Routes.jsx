import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/Error/Error-page";
import Home from "../Pages/Home";




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
         
        },
      ],
    },
  ]);

  export default router;