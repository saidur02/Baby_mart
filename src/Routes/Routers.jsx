import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import AddToys from "../Pages/AddToys/AddToys";
import NotFoundPage from "../Pages/NotFoundPage/NotFound";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
            path:'/addtoys',
            element:<AddToys></AddToys>
        },
        {
          path: '*',
          element:<NotFoundPage></NotFoundPage>
        }
      ]
    },
  ]);




  export default router
  