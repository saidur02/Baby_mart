import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import AddToys from "../Pages/AddToys/AddToys";
import NotFoundPage from "../Pages/NotFoundPage/NotFound";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import UpdatedInfo from "../Pages/MyToys/UpdatedInfo";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";


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
            path:'/signup',
            element:<Registration></Registration>
        },
        {
            path:'alltoy',
            element:<AllToys></AllToys>
        },
        {
            path:'/addtoys',
            element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
            path:'mytoy',
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path:'update',
            element:<UpdatedInfo></UpdatedInfo>
        },
        {
            path:'viewdetails',
            element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        },
        {
            path:'blogs',
            element:<Blogs></Blogs>
        },
        {
          path: '*',
          element:<NotFoundPage></NotFoundPage>
        }
      ]
    },
  ]);




  export default router
  