import React from "react";
import logo from "./logo993Blue.png";

export default function Logo993(props) {
  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        width={993 * props.resize}
        height={993 * props.resize}
      />
    </div>
  );
}
