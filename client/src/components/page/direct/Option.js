import React from "react";
import Fud from "../global/FUD/ShowFUD";
import Opinions from "./Option/Opinions";
import MyOpinions from "../screw/Option/SCREWALLOPINIONS";
import Mofas from "../school/Option/Mofas";

import NAСHSALKAHAD  from "../global/nachsal/NACHSALKAHAD";

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

    case "mofas":
      return (
        <div className="optionSwitcher">
          <Mofas />
        </div>
      );

    default:
      return (
        <div className="optionSwitcher">
        <NAСHSALKAHAD />
      </div>
      );
  }
}
