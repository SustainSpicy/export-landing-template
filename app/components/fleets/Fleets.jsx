import React from "react";
import { Wrapper } from "../Wrapper";
import { SectionHead } from "../SectionHead";

const fleetImgData = [
  "images01.png",
  "images02.png",
  "images03.png",
  "images04.png",
];
const Fleets = () => {
  return (
    <section
      id="fleet"
      className="pt-6 w-full text-[#fff] flex flex-col items-center "
    >
      <Wrapper>
        <SectionHead id={"03"} title={"Our Fleets"} />
      </Wrapper>
      <div className="max-w-[1200px] flex items-stretch   ">
        {fleetImgData.map((item, index) => (
          <div className="flex-1 ">
            <img
              className="w-full h-full object-contain"
              src={item}
              alt={`fleet${index}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fleets;
