import React, { useEffect, useState } from "react";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import { useContext } from "react";
import { ViewContext } from "@/context/ViewContext";

const Category = () => {
  const [isTablet, setIsTablet] = useState(false);
  const { setData } = useContext(ViewContext);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const isTab = window.innerWidth <= 831;
      setIsTablet(isTab);
    });
  }, []);
  const categories = [
    "Agency Lead Generation",
    "Consulting",
    "Ecourse",
    "Events",
    "Featured",
    "Health",
    "Landing Pages",
    "Lead Generation",
    "Medical",
    "Webinar",
    "WordPress",
  ];
  return (
    <div className="w-[20rem] gap-3 flex flex-col">
      <h1 className="text-lg">Category</h1>

      <div className="flex flex-wrap">
        {categories.map((ele, index) => {
          return (
            <p className="text-sm text-gray-700">
              {index !== 0 && <span className="text-blue-500 ml-1">|</span>}{" "}
              {ele}
            </p>
          );
        })}
      </div>
      {!isTablet && (
        <div className="flex gap-5">
          <div
            className="text-xs text-gray-500"
            onClick={() => setData("Desktop")}
          >
            DESKTOP VIEW &nbsp;
            <PersonalVideoIcon
              style={{ fontSize: "40px", color: "lightblue" }}
            />
          </div>
          <div
            className="text-xs text-gray-400"
            onClick={() => setData("Mobile")}
          >
            MOBILE VIEW &nbsp;
            <StayCurrentPortraitOutlinedIcon
              style={{ fontSize: "40px", color: "lightblue" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
