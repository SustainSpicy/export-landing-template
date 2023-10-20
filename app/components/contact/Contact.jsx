import React from "react";
import { Wrapper } from "../Wrapper";
import { SectionHead } from "../about/About";

const socialIconData = [
  { name: "Facebook", path: "facebook.png" },
  { name: "Twitter", path: "twitter.png" },
  { name: "Linkedin", path: "linkedin.png" },
];
const Contact = () => {
  return (
    <section className="pt-16 w-full  text-[#fff] flex flex-col items-center ">
      <Wrapper>
        <SectionHead id={"04"} title={"Contact"} />
      </Wrapper>
      <div className="max-w-[1200px] w-full flex justify-center  ">
        <Wrapper>
          <div className="w-full flex flex-col-reverse gap-12 sm:flex-row justify-center sm:justify-between flex-wrap  my-16">
            <div className="flex-1">
              <h2 className="text-white text-opacity-60 font-bold text-xl font-barlow mb-4">
                OFFICE
              </h2>
              <p className="text-white text-opacity-60 font-barlow ">
                The Box Pvt. Ltd.
                <br />
                Phone: +91 9561880658
                <br />
                Email: pavanvkoli@gmail.com
              </p>
              <h2 className="mt-6 text-white  text-opacity-60 font-bold font-barlow ">
                GET IN TOUCH
              </h2>
              <div className="flex items-center mt-2 gap-2">
                {socialIconData.map((item, index) => (
                  <div
                    className="w-6 h-6 bg-black p-1 flex justify-center items-center cursor-pointer"
                    key={index}
                  >
                    <img
                      alt={item.name}
                      src={item.path}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className=" text-white font-bold">MESSAGE US</div>
              <div className="mt-2">
                <div className="flex flex-col mb-4">
                  <input
                    placeholder="Name*"
                    id="name"
                    type="text"
                    className="border rounded py-2 px-3 focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <input
                    placeholder="Email*"
                    id="email"
                    type="email"
                    className="border rounded py-2 px-3 focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <input
                    placeholder=" Subject*"
                    id="subject"
                    type="text"
                    className="border rounded py-2 px-3 focus:outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <textarea
                    placeholder="Message*"
                    id="message"
                    className="border rounded py-2 px-3 focus:outline-none text-gray-600"
                  ></textarea>
                </div>
              </div>
              <button className=" px-4 py-4 text-black bg-white hover:bg-[#e8f4ff] text-[12px] font-normal font-barlow uppercase leading-[15px] cursor-pointer">
                SEND
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Contact;
