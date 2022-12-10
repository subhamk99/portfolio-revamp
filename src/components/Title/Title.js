import "./Title.css";
export function Title() {
  return (
    <>
      <h1
        className="intro text-9xl text-[#E9DAC1] "
        style={{
          WebkitTextStrokeWidth: "1px",
          textShadow: "3px 4px 7px rgba(0,0,0,0.8)",
        }}
      >
        Subh<span className="hover:cursor-pointer mail">@</span>m K.
      </h1>
    </>
  );
}
