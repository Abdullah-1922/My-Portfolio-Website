
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
   <ToastContainer/>
      <RouterProvider router={router}>
      
    </RouterProvider>
  </div>
  
  
);
