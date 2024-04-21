import React, { useEffect, useRef } from "react";
import connectLogo1 from "../../assets/am.webp";
import connectLogo2 from "../../assets/n_n.webp";
import connectLogo3 from "../../assets/intercom.webp";
import connectLogo4 from "../../assets/yotpo.webp";
import connectLogo5 from "../../assets/zoom.webp";
import connectLogo6 from "../../assets/zendesk.webp";
import connectLogo7 from "../../assets/stripe.webp";

const ConnectedTool = () => {
  return (
    <div className="bg-[#E8FEDF] ">
      {/* Features Section */}
      <div className="mx-auto mt-4 w-full px-4 sm:px-6 md:mt-24 lg:mt-12 lg:px-8 py-5">
        <div className="mx-auto max-w-xxl text-center">
          <div className="mx-auto px-4 py-1.5">
            <p className="mt-4 leading-relaxed text-black font-bold text-3xl">
              Brevo connects to the tools you already use
            </p>
            <p className="mt-4 text-base leading-relaxed text-black ">
              Brevo runs alongside more than 150 leading digital tools, from CRM
              to CMS, ecommerce, and more.
            </p>
          </div>
        </div>
        <div className="mt-5 mb-14 mx-auto overflow-x-hidden w-full max-w-full logos flex gap-x-4 ">
          <div className="flex logos-slide ">
            <img src={connectLogo1} />
            <img src={connectLogo2} />
            <img src={connectLogo3} />
            <img src={connectLogo4} />
            <img src={connectLogo5} />
            <img src={connectLogo6} />
            <img src={connectLogo7} />
          </div>
          <div className="logos-slide flex ">
            <img src={connectLogo1} />
            <img src={connectLogo2} />
            <img src={connectLogo3} />
            <img src={connectLogo4} />
            <img src={connectLogo5} />
            <img src={connectLogo6} />
            <img src={connectLogo7} />
          </div>

         
        </div>
        <div className="my-5 flex justify-center ">
                <button
                  type="button"
                  className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl font-semibold my-23"
                >
                  Read all customer stories

                </button>
              </div>
      </div>
      {/* Features Section */}
      <div className="mx-auto  w-full px-4 sm:px-6  lg:px-8 bg-[#D7FEC8] py-5 rounded-t-full">
        <div className="mx-auto max-w-xxl text-center">
          <div className="mx-auto px-4 py-1.5">
            <p className="mt-4 leading-relaxed text-black font-bold text-3xl">
            Ready to get started?
            </p>
            <p className="mt-4 text-base leading-relaxed text-black ">
            Create your free account, no credit card needed.
            </p>
          </div>
        </div>
    
        <div className="my-5 flex justify-center ">
                <button
                  type="button"
                  className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl font-semibold my-23"
                >
                  Sign Up free

                </button>
              </div>
      </div>
    </div>
  );
};

export default ConnectedTool;
