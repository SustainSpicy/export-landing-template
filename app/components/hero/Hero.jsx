import { Wrapper } from "../Wrapper";

export function Hero(params) {
  return (
    <section
      className="relative h-[700px] w-full flex justify-center"
      style={{ backgroundColor: "#0C2B75" }}
    >
      <img
        src="/truck.png"
        alt=""
        className="absolute top-[30%] object-contain md:max-w-[80%]"
      />
      <div
        className="absolute h-full w-full"
        style={{
          background: "linear-gradient(90deg, #0C2B75 50%, #E30613 50%)",
          opacity: 0.8,
          mixBlendMode: "multiply",
        }}
      >
        {" "}
      </div>
      <Wrapper>
        <div className="flex flex-col justify-center w-full h-full gap-4 ">
          <div className=" relative  sm:w-[50%] flex flex-col gap-4">
            <div className="  text-white text-[3rem] font-bold font-barlow leading-[75px]">
              Custom Inland Container Depot,{" "}
            </div>
            <div className=" text-white text-opacity-60 text-xl font-medium font-barlow leading-loose">
              Planning, Development and Operations
            </div>
            <button className="self-start pl-[35px] pr-[39.80px] pt-3.5 pb-4 bg-white hover:bg-[#e8f4ff] hover:text-white justify-start items-start inline-flex cursor-pointer">
              <span className="text-center text-black text-[15px] font-medium font-barlow uppercase leading-[15px]">
                Get a free quote
              </span>
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
