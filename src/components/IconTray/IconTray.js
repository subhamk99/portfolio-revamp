import React from "react";
import { GitHub, Linkedin, Mail, Twitter } from "react-feather";

const IconTray = () => {
  return (
    <div
      className="icon-tray flex gap-10 text-white text-stroke-black 
      relative top-full left-1/2 -translate-x-1/2 
      child-hover:cursor-pointer child:stroke-black child:stroke-1"
      style={{
        WebkitTextStrokeWidth: "1px",
        textShadow: "3px 4px 7px rgba(0,0,0,0.8)",
      }}
    >   
      <Linkedin></Linkedin>
      <Twitter></Twitter>
      <GitHub></GitHub>
      <Mail></Mail>
    </div>
  );
};

export default IconTray;
