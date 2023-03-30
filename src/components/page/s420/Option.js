import React from "react";
import Fud from "../global/FUD/ShowFUD";
import MyOpinions from "../screw/Option/SCREWALLOPINIONS";
import Mofas from "../school/Option/Mofas";
import MyMofas from "../school/Option/MyMofas";
import NACHSAL from "../global/nachsal/NACHSAL";

export default function Option(props) {
  switch (props.selected) {
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
    case "mymofas":
      return (
        <div className="optionSwitcher">
          <MyMofas />
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
          <NACHSAL />
        </div>
      );
  }
}
