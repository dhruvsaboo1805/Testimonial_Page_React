import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  return(
    <div className = "flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 overflow-x-hidden">
        <div className = "text-center">
          <h1 className = "text-4xl font-bold">My Guru's</h1>
      
          <div className = "bg-violet-400 h-[4px] w-1/5 mt-3 mx-auto"></div>
          <Testimonial reviews = {reviews}></Testimonial>
      </div>
    </div>
  )
};

export default App;
