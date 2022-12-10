import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import "./IconTray.css";

const IconTray = () => {
  return (
    <>
      <div
        className="icon-tray flex gap-10 text-white text-stroke-black 
      relative top-full left-1/2 -translate-x-1/2"
        style={{
          WebkitTextStrokeWidth: "1px",
          textShadow: "3px 4px 7px rgba(0,0,0,0.8)",
        }}
      >
        <div className="icon p-3 child-hover:cursor-pointer  child:stroke-1">
          <Linkedin></Linkedin>
        </div>
        <div className="icon p-3 child-hover:cursor-pointer child:stroke-1">
          <Twitter></Twitter>
        </div>
        <div className="icon p-3 child-hover:cursor-pointer child:stroke-1">
          <GitHub></GitHub>
        </div>
      </div>
    </>
  );
};

export default IconTray;
