
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../layout/Roots";

import Login from "../login/Login";
import Register from "../register/Register";
import Home from "../pages/home/Home";
import Newspage from "../pages/newspage/Newspage";
import Privateroute from "./Privateroute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
         {
            path:"/",
            element: <Home></Home>,
            loader: ()=>fetch('/news.json')
            
         },
         {
              path: '/news/:id',
              element:<Privateroute><Newspage></Newspage></Privateroute>
         },
         {
           path: '/login',
           element:<Login></Login>
         },
         {
           path:'/register',
           element:<Register></Register>
         },
      ]
    },
  ]);

  export default router