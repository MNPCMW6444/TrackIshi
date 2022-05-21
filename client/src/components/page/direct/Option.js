import React from "react";
import Gaf from "./Option/Gaf.js";
import Fud from "../global/FUD/ShowFUD";
import Opinions from "./Option/Opinions";
import MyOpinions from "../screw/Option/SCREWALLOPINIONS";
import Mofas from "../direct/Option/Mofas";

import NACHSALKAHAD from "../global/nachsal/NACHSALKAHAD";

export default function Option(props) {
  switch (props.selected) {
    case "nachsal":
      return (
        <div className="optionSwitcher">
          <NACHSALKAHAD />
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
          <Gaf />
        </div>
      );
  }
}
