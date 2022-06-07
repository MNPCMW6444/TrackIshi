import React from "react";
import logo from "./Logo100.png";

export default function Logo100(props) {
  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        width={1381 * props.resize}
        height={379 * props.resize}
      />
    </div>
  );
}
