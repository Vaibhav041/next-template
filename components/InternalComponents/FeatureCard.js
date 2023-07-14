import React from "react";

const FeatureCard = ({ image, text, heading }) => {
  return (
    <div className="flex flex-col gap-10">
      <img className="w-[300px] h-[170px]" src={image} />
      <h1 className="text-lg font-medium">{heading}</h1>
      <p className="text-gray-500 w-[250px]">{text}</p>
    </div>
  );
};

export default FeatureCard;
