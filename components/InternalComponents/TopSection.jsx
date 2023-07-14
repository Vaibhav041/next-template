import React from "react";

const TopSection = () => {
  return (
    <div>
      <div
        className="bg-contain h-[656px] bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://wpklik.com/wp-content/uploads/2022/10/Multor-template.jpg')",
        }}
      ></div>
      <div className="px-[10%] flex">
        <div className="my-10 flex flex-col gap-10">
          <div className="flex gap-3 items-start">
            <img src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg" />
            <div>
              <h1 className="text-lg font-medium">Benefit 1</h1>
              <p>
                Highlight the benefits of signing up for <br /> an appointment,
                online class, or video consultation.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <img src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg" />
            <div>
              <h1 className="text-lg font-medium">Benefit 2</h1>
              <p>
                For example, fitness instructors might describe how <br /> their
                routines make people healthier *and* happier.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <img src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg" />
            <div>
              <h1 className="text-lg font-medium">Benefit 3</h1>
              <p>
                Remind visitors how easy it is to claim your offer <br /> and
                start enjoying the benefits.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="bg-[rgba(21,47,46,1)] px-[10%] pt-10">
          <h1 className="text-3xl text-white font-bold">
            Schedule an <br /> Appointment
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default TopSection;
