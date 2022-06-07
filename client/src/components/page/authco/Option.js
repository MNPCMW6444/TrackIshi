import React from "react";
import Fud from "../global/FUD/ShowFUD";
import Opinions from "./Option/Opinions";
import Opinionsa from "./Option/Opinionsa";
import NACHSALKAHAD from "../global/nachsal/NACHSALKAHAD";
import MyOpinions from "../screw/Option/SCREWALLOPINIONS";

export default function Option(props) {
  switch (props.selected) {
      
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
    case "myopinions":
      return (
        <div className="optionSwitcher">
          <MyOpinions />
        </div>
      );
    case "opinionsa":
      return (
        <div className="optionSwitcher">
          <Opinionsa />
        </div>
      );
    default:
      return (
        <div className="optionSwitcher">
          <NACHSALKAHAD />
        </div>
      
      );
  }
}
