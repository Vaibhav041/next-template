import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <div className="flex px-[10%] justify-around flex-wrap my-20">
      <FeatureCard
        image="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_108c04p00000000000001o.jpg"
        heading="FEATURE 1"
        text="Talk about some of the details of your offer with a focus on the value people get back."
      />
      <FeatureCard
        image="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/adf66a57-multor-feature2-image_108c04p00000000000001o.jpg"
        heading="FEATURE 2"
        text="Is there a pain point that your service resolves? Tell visitors about it here."
      />
      <FeatureCard
        image="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d486c61-multor-feature3-image_108c04p00000000000001o.jpg"
        heading="FEATURE 3"
        text="Alternatively, you could use this section to address some frequently asked questions."
      />
    </div>
  );
};

export default FeatureSection;
