import React, { useState, useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterBottom = () => {
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const isTab = window.innerWidth <= 831;
      setIsTablet(isTab);
    });
  }, []);
  return (
    <>
      {isTablet ? (
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-5">
            <p className=" hover:text-[#0033FF] cursor-pointer">
              <TwitterIcon />
            </p>
            <p className=" hover:text-[#0033FF] cursor-pointer">
              <LinkedInIcon />
            </p>
            <p className="hover:text-[#0033FF] cursor-pointer">
              <InstagramIcon />
            </p>
            <p className=" hover:text-[#0033FF] cursor-pointer">
              <YouTubeIcon />
            </p>
          </div>
          <div className="text-sm text-gray-500">
            © 2010-2023 Unbounce. All rights reserved.
          </div>
          <div className="flex gap-5">
            <p>Security</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      ) : (
        <div className="my-20 flex justify-between">
          <div className="text-sm text-gray-500">
            © 2010-2023 Unbounce. All rights reserved.
          </div>
          <div className="flex gap-5 text-sm text-gray-500">
            <p>Security</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p className=" hover:text-[#0033FF] cursor-pointer">
              <TwitterIcon />
            </p>
            <p className=" hover:text-[#0033FF] cursor-pointer">
              <LinkedInIcon />
            </p>
            <p className="hover:text-[#0033FF] cursor-pointer">
              <InstagramIcon />
            </p>
            <p className=" hover:text-[#0033FF] cursor-pointer">
              <YouTubeIcon />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterBottom;
