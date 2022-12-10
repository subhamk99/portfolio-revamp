/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Typed from "typed.js";

const Intro = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["I build things on the web.", "I build things for the web."],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 1100,
      showCursor:false
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="type-wrap">
      {/* <span style={{ whiteSpace: "pre" }} ref={el} /> */}
      <h1
        className="text-7xl text-[#E9DAC1]"
        style={{
          WebkitTextStrokeWidth: "1px",
          textShadow: "3px 4px 7px rgba(0,0,0,0.8)",
        }}
        ref={el}
      ></h1>
    </div>
  );
};
export default Intro;
