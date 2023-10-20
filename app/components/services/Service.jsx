import React from "react";

import { Wrapper } from "../Wrapper";
import { SectionHead } from "../SectionHead";

const serviceCardData = [
  {
    path: "truck-icon.png",
    title: "Road freight",
    description:
      "Click edit button to change this text. Lorem\
      ipsum dolor sit amet, consectetur adipiscing elit.\
      Ut elit tellus, luctus nec ullamcorper mattis,\
      pulvinar dapibus leo.",
  },
  {
    path: "plane-icon.png",
    title: "Air freight",
    description:
      "Click edit button to change this text. Lorem\
      ipsum dolor sit amet, consectetur adipiscing elit.\
      Ut elit tellus, luctus nec ullamcorper mattis,\
      pulvinar dapibus leo.",
  },
  {
    path: "boat-icon.png",
    title: "Sea freight",
    description:
      "Click edit button to change this text. Lorem\
      ipsum dolor sit amet, consectetur adipiscing elit.\
      Ut elit tellus, luctus nec ullamcorper mattis,\
      pulvinar dapibus leo.",
  },
  {
    path: "train.icon.png",
    title: "Rail freight",
    description:
      "Click edit button to change this text. Lorem\
      ipsum dolor sit amet, consectetur adipiscing elit.\
      Ut elit tellus, luctus nec ullamcorper mattis,\
      pulvinar dapibus leo.",
  },
];

const Service = () => {
  return (
    <section
      id="service"
      className="sm:max-h-[500px] mb-12 w-full bg-[#0C2B75] text-[#fff] flex justify-center "
    >
      <Wrapper>
        <SectionHead id={"02"} title={"Our Services"} />
        <div className="flex flex-wrap mt-12  justify-center sm:justify-between">
          {serviceCardData.map((item, index) => (
            <Service_Card {...item} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Service;

const Service_Card = ({ path, title, description }) => {
  return (
    <div className="flex w-[70%] sm:w-[305px]  gap-8 mb-8">
      <img className="w-[50px] h-[50px] mt-3" src={path} />
      <div>
        <div className="text-white text-xl font-semibold font-Barlow leading-9">
          {title}
        </div>
        <p className="text-white text-opacity-60 text-[12px] font-normal font-Barlow leading-loose">
          {description}
        </p>
      </div>
    </div>
  );
};
