import React, { useState, useEffect } from "react";
import FooterBottom from "./FooterBottom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Footer = () => {
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const isTab = window.innerWidth <= 831;
      setIsTablet(isTab);
    });
  }, []);
  return (
    <div>
      <img
        className="h-[60px]"
        src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-footer-icon-dark.svg"
      />

      {isTablet ? (
        <div className="my-10 flex flex-col gap-5">
          <div className="flex justify-between">
            <p>Product</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex justify-between">
            <p>Solutions</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex justify-between">
            <p>Company</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex justify-between">
            <p>Learn</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex justify-between">
            <p>Get in Touch</p>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      ) : (
        <div className="flex justify-between my-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-medium">Product</h1>
            <p className="text-gray-500">Smart Builder</p>
            <p className="text-gray-500">Smart Traffic</p>
            <p className="text-gray-500">Smart Copy</p>
            <p className="text-gray-500">Apps and Integrations</p>
            <p className="text-gray-500">Landing Pages</p>
            <p className="text-gray-500">Popups and Sticky Bars</p>
            <p className="text-gray-500">Landing Page Templates</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-medium">Solutions</h1>
            <p className="text-gray-500">Ecommerce</p>
            <p className="text-gray-500">SaaS</p>
            <p className="text-gray-500">Agency</p>
            <p className="text-gray-500">Small Businesses</p>
            <p className="text-gray-500">B2B Marketing</p>
            <p className="text-gray-500">Professional Services</p>
            <p className="text-gray-500">PPC</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-medium">Company</h1>
            <p className="text-gray-500">About Unbounce</p>
            <p className="text-gray-500">Partner Program</p>
            <p className="text-gray-500">Careers</p>
            <p className="text-gray-500">Integrate with Us</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-medium">Learn</h1>
            <p className="text-gray-500">Watch Smart Builder Demo</p>
            <p className="text-gray-500">What is Conversion Intelligence?</p>
            <p className="text-gray-500">Landing Page Basics</p>
            <p className="text-gray-500">Blog</p>
            <p className="text-gray-500">Resource Center</p>
            <p className="text-gray-500">Landing Page Examples</p>
            <p className="text-gray-500">How to Build a Landing Page</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-medium">Get in Touch</h1>
            <p className="text-gray-500">Contact</p>
            <p className="text-gray-500">Demo</p>
            <p className="text-gray-500">Log IN</p>
            <p className="text-gray-500">Help Center</p>
            <p className="text-gray-500">Community</p>
          </div>
        </div>
      )}
      <FooterBottom />
    </div>
  );
};

export default Footer;
