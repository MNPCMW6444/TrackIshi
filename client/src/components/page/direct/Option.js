import React from "react";
import Gaf from "./Option/Gaf.js";
import Fud from "../global/FUD/ShowFUD";
import Opinions from "./Option/Opinions";
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
    case "opinions":
      return (
        <div className="optionSwitcher">
          <Opinions />
        </div>
      );

    default:
      return (
        <div className="optionSwitcher">
          <Gaf />
        </div>
      );
  }
}
