import React from "react";
import Course from "./Option/Course.js";
import Fud from "../global/FUD/ShowFUD";
import MyOpinions from "../screw/Option/SCREWALLOPINIONS";
import Mofas from "../direct/Option/Mofas";

import NACHSAL from "../global/nachsal/NACHSAL";

export default function Option(props) {
  switch (props.selected) {
    case "nachsal":
      return (
        <div className="optionSwitcher">
          <NACHSAL />
        </div>
      );
    case "fud":
      return (
        <div className="optionSwitcher">
          <Fud />
        </div>
      );
    case "myopinions":
      return (
        <div className="optionSwitcher">
          <MyOpinions />
        </div>
      );

    case "mofas":
      return (
        <div className="optionSwitcher">
          <Mofas />
        </div>
      );

    default:
      return (
        <div className="optionSwitcher">
          <Course />
        </div>
      );
  }
}
