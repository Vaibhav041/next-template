import React from "react";

const VideoSection = () => {
  return (
    <div
      className="my-10 flex flex-col items-center gap-10"
      style={{
        minHeight: "760px",
        background: "linear-gradient(lightblue 50%, transparent 50%)",
      }}
    >
      <div className="text-5xl font-bold mt-16 flex flex-col items-center">
        <p>Show visitors what</p> <p>they're signing up for</p>
      </div>
      <div className="text-xl   flex flex-col items-center">
        <p>Include a video or photo from one of your sessions to help people</p>
        <p>understand your service (or just to hype ‘em up).</p>
      </div>
      <img
        className="w-[80%]"
        src="https://embed-ssl.wistia.com/deliveries/29da46dbc01985d85354fde8c733a9b2.webp?image_crop_resized=1280x721"
      />
    </div>
  );
};

export default VideoSection;
