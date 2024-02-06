import { Outlet } from "react-router-dom";
import Navbar from "./Components/HomeComponents/Navbar";
import { useEffect } from "react";

const Root = () => {
  useEffect(() => {
    // Enable smooth scrolling
    document.body.style.overflow = 'auto';
  
    // Clean up when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []); 
  return (
    <div>

     
        <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Root;