import React from "react";

const MyLoader = () => (
  <div
    className="w-full h-full flex 
   bg-white rounded shadow-component dark:bg-dark-blue items-center justify-center"
  >
    <div className="w-max h-max">Loading...</div>
  </div>
);

export default MyLoader;
