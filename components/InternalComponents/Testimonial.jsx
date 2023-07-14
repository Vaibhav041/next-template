import React from "react";

const Testimonial = () => {
  return (
    <div className="my-10 flex flex-col items-center gap-20">
      <h1 className="text-[#00c2c5] text-sm font-medium">
        DON'T JUST TAKE OUR WORD FOR IT
      </h1>
      <div className="flex jusify-between flex-wrap px-[10%] gap-10">
        <div>
          <img src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/dfb61e74-multor-testimonial1-stars.svg" />
          <p className="text-2xl mt-2">
            Share a real testimonial that
            <br /> hits some of your benefits (but <br /> isn't too sales-y).
          </p>
          <div className="flex gap-3 mt-5">
            <img src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_101e01e00000000000001o.jpg" />
            <div>
              <p className="font-medium">Real Name</p>
              <p>Location</p>
            </div>
          </div>
        </div>
        <div>
          <img src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d441dac-multor-testimonial2-stars.svg" />
          <p className="text-2xl mt-2">
            Include someone talking about <br /> how easy it was to sign up{" "}
            <br /> and participate.
          </p>
          <div className="flex gap-3 mt-5">
            <img src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/94045dbc-multor-testimonial2-headshot_101e01e00000000000001o.jpg" />
            <div>
              <p className="font-medium">Real Name</p>
              <p>Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
