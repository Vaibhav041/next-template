import React from "react";

const AboutSection = () => {
  return (
    <div className="my-20 px-[10%] flex justify-between gap-20 items-center tablet:flex-col">
      <img src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10cs0b400000000000001o.jpg" />
      <div className="flex flex-col gap-5">
        <p className="text-[#00c2c5] font-medium">ABOUT</p>
        <h1 className="text-4xl font-bold">
          Some more information about your business
        </h1>
        <p>
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
