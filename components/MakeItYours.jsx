import React, { useState, useEffect } from "react";
import Category from "./Category";

const MakeItYours = () => {
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const isTab = window.innerWidth <= 831;
      setIsTablet(isTab);
    });
  }, []);
  return (
    <div className="mt-7 flex justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-mono">MULTOR</h1>
        <p>
          Schedule more virtual appointments, online classes, and video
          consultations with this high-converting lead
          <br /> capture template.
        </p>
        {!isTablet && (
          <button className="w-44 h-10 bg-[#f6921e] text-white font-medium text-md">
            MAKE IT YOURS
          </button>
        )}
      </div>
      <Category />
    </div>
  );
};

export default MakeItYours;
