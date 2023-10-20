import { Wrapper } from "../Wrapper";

export function About(params) {
  return (
    <section className="sm:max-h-[500px] mb-12 w-full  text-[#fff] flex justify-center ">
      <Wrapper>
        <div className="flex flex-col sm:flex-row justify-between w-full h-full">
          <div className="flex-1 flex flex-col justify-center ">
            <SectionHead id={"01"} title={"About Us"} />
            <span className="mb-12 pr-2 text-white text-opacity-60 text-[12px] font-normal font-barlow leading-loose">
              We are proud to say that we our Central India's First Private
              Inland Container Depot. We started from a small office and today
              we function from an area of over 20 acres. Our team works
              relentlessly towards the growth of our venture. Along with
              reliability, we provide facilities such as warehouses, customer
              relations, inventory management, etc.
            </span>
            <span className=" text-white text-opacity-60 text-[12px] font-medium font-barlow leading-loose">
              We Make Transport Easy!
            </span>
          </div>
          <div className="flex-1">
            <img
              src="/image04.png"
              className="max-h-[300px] sm:max-h-full w-full h-full object-cover "
              alt="image01.png"
              loading="lazy"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export function SectionHead({ id, title }) {
  return (
    <>
      <span className="text-md font-medium font-barlow">- {id}</span>
      <h1 className="text-[3rem] font-medium  font-barlow">{title}</h1>
    </>
  );
}
