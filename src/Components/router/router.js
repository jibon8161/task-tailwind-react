import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../home/Home";
import Error from "../error/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    
    ],
  },
]);
