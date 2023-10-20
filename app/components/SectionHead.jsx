export function SectionHead({ id, title }) {
  return (
    <>
      <span className="text-md font-medium font-barlow">- {id}</span>
      <h1 className="text-[3rem] font-medium  font-barlow">{title}</h1>
    </>
  );
}
