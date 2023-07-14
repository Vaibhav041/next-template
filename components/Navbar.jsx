import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const above = scrollY > 15;
      setIsFixed(above);
    });

    window.addEventListener("resize", () => {
      const isTab = window.innerWidth <= 831;
      setIsTablet(isTab);
    });
  }, []);
  return (
    <>
      <div
        className={
          isFixed
            ? "w-screen  flex justify-center items-center h-[5rem] fixed top-0 shadow-lg text-lg bg-white"
            : "w-screen  flex justify-center items-center h-[5rem] text-lg"
        }
      >
        <div className="flex justify-between gap-[12rem]">
          <div className="flex items-center gap-5">
            <img
              src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1"
              className="h-[40px] w-[150px]"
            />
            {!isTablet && <p className="hover:text-[#0033FF]">Products</p>}
            {!isTablet && <p className="hover:text-[#0033FF]">Solutions</p>}
            {!isTablet && <p className="hover:text-[#0033FF]">Pricing</p>}
            {!isTablet && <p className="hover:text-[#0033FF]">Learn</p>}
            {!isTablet && <p className="hover:text-[#0033FF]">Contact</p>}
          </div>
          <div className="flex items-center gap-3">
            <SearchIcon />
            {!isTablet && (
              <button
                className="h-[3.5rem] w-[5.5rem] hover:bg-[#0033FF] text-[#0033FF] hover:text-white"
                style={{ border: "2px solid #0033FF" }}
              >
                Log In
              </button>
            )}
            {!isTablet && (
              <button
                className="h-[3.5rem] px-3 bg-[#0033FF] hover:bg-white hover:text-[#0033FF] text-white"
                style={{ border: "2px solid #0033FF" }}
              >
                Start My Free Trial
              </button>
            )}
            {isTablet && <MenuIcon />}
          </div>
        </div>
      </div>
      <p className={isFixed ? "mb-[5.3rem]" : null}></p>
    </>
  );
};

export default Navbar;
