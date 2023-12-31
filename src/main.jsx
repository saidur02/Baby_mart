import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routers.jsx';
import AuthProvider from './Providers/Authpovider';



ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='container mx-auto'>
   <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
 </div>
)
// https://i.ibb.co/jg0pPJj/1.jpg
// https://i.ibb.co/jkvLMMh/2.jpg
// https://i.ibb.co/n8nGkrc/3.jpg
// 