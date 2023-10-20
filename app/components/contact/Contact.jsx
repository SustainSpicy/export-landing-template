import React from "react";
import { Wrapper } from "../Wrapper";
import { SectionHead } from "../about/ABOUT";

const Contact = () => {
  return (
    <section className="pt-16 w-full  text-[#fff] flex flex-col items-center ">
      <Wrapper>
        <SectionHead id={"04"} title={"Contact"} />
      </Wrapper>
      <div className="max-w-[1200px] w-full flex justify-center  ">
        <Wrapper>
          <div className="w-full flex justify-center sm:justify-between flex-wrap  my-16">
            <div>
              {" "}
              <div class="text-white font-normal text-xl font-barlow mb-4">
                OFFICE
              </div>
              <p class="text-white font-barlow ">
                The Box Pvt. Ltd.
                <br />
                Phone: +91 9561880658
                <br />
                Email: pavanvkoli@gmail.com
              </p>
              <div class="mt-6 text-white font-bold font-barlow ">
                GET IN TOUCH
              </div>
              <div class="flex items-center mt-2">
                <img class="mr-4" alt="Facebook" src="facebook.svg" />
                <img class="mr-4" alt="Twitter" src="twitter.svg" />
                <img alt="Yelp" src="yelp.svg" />
              </div>
            </div>
            <div>
              <div class="mt-6 text-white font-bold">MESSAGE US</div>
              <div class="mt-2">
                <div class="flex flex-col mb-4">
                  <label for="name" class="text-white text-sm mb-1">
                    Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    class="border rounded py-2 px-3"
                  />
                </div>
                <div class="flex flex-col mb-4">
                  <label for="email" class="text-white text-sm mb-1">
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    class="border rounded py-2 px-3"
                  />
                </div>
                <div class="flex flex-col mb-4">
                  <label for="subject" class="text-white text-sm mb-1">
                    Subject*
                  </label>
                  <input
                    id="subject"
                    type="text"
                    class="border rounded py-2 px-3"
                  />
                </div>
                <div class="flex flex-col mb-4">
                  <label for="message" class="text-white text-sm mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    class="border rounded py-2 px-3"
                  ></textarea>
                </div>
              </div>
              <button class="bg-white text-primary py-2 px-6 rounded-full mt-4 hover:bg-gray-300 transition duration-300">
                <div class="font-bold">SUBMIT</div>
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Contact;
