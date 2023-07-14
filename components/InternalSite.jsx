import React from "react";
import TopSection from "./InternalComponents/TopSection";
import VideoSection from "./InternalComponents/VideoSection";
import Testimonial from "./InternalComponents/Testimonial";
import FeatureSection from "./InternalComponents/FeatureSection";
import AboutSection from "./InternalComponents/AboutSection";
import FooterSection from "./InternalComponents/FooterSection";
import { useContext } from "react";
import { ViewContext } from "@/context/ViewContext";

const InternalSite = () => {
  const { view } = useContext(ViewContext);
  return (
    <>
      {view === "Desktop" ? (
        <div className="border border-blue-100 border-solid">
          <TopSection />
          <VideoSection />
          <Testimonial />
          <FeatureSection />
          <AboutSection />
          <FooterSection />
        </div>
      ) : (
        <div
          className="h-[661px] w-[360px] mx-auto flex justify-center items-center"
          style={{
            background:
              "url('https://unbounce.com/wp-content/themes/unbounce2019/assets/img/lpt-preview-mobile-frame.png') no-repeat",
          }}
        >
          <iframe
            src="https://templates.unbounce.com/multor/"
            className="w-[75%] h-[70%] mb-5"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default InternalSite;
