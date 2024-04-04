
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/home/Home";
import Login from "../login/Login";
import Register from "../register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
         {
            path: '/',
            element: <Home></Home>
         },
         {
           path: '/login',
           element:<Login></Login>
         },
         {
           path:'/register',
           element:<Register></Register>
         }
      ]
    },
  ]);

  export default router