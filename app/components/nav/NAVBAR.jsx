import { Wrapper } from "../Wrapper";

export function NAVBAR() {
  return (
    <div className="bg-black w-full h-20 sticky top-0 flex justify-center">
      <Wrapper>
        <div className="h-full flex flex-col sm:flex-row gap-4 justify-between items-center self-center">
          <div className="h-12 w-12 rounded-full bg-black"></div>
          <div className="flex gap-6">
            <div className="h-8 w-8 rounded-full bg-black"></div>
            <div className="h-8 w-8 rounded-full bg-black"></div>
            <div className="h-8 w-8 rounded-full bg-black"></div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
