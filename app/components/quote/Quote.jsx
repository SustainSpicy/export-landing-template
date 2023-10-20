import React from "react";
import { Wrapper } from "../Wrapper";

const Quote = () => {
  return (
    <section className="sm:max-h-[200px] w-full bg-red-800 text-[#fff] flex justify-center py-4">
      <Wrapper>
        <h1 className="text-[3rem] font-medium  font-barlow">
          Get a Free Quote
        </h1>
        <div className="flex justify-between">
          <p className="w-[70%] text-white text-opacity-60 text-[12px] font-normal font-Barlow leading-loose">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <button className=" px-4 py-4 text-black bg-white hover:bg-[#e8f4ff] text-[12px] font-normal font-barlow uppercase leading-[15px] cursor-pointer">
            CONTACT US
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Quote;
