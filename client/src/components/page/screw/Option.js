import React from "react";
import SCREWHOME from "./Option/SCREWHOME";
import SHOWFUD from "../global/FUD/ShowFUD";
import SCREWALLOPINIONS from "./Option/SCREWALLOPINIONS";
import SCREALLTESTS from "./Option/SCREALLTESTS";
import NACHSAL from "../global/nachsal/NACHSAL";
import MOFAS from "./Option/MOFAS";

export default function Option(props) {
  switch (props.selected) {
    case "nachsal":
      return (
        <>
          <div className="optionSwitcher">
            <NACHSAL />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      );
    case "fud":
      return (
        <>
          <div className="optionSwitcher">
            <SHOWFUD />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      );
    case "allopinions":
      return (
        <>
          <div className="optionSwitcher">
            <SCREWALLOPINIONS />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      );
    case "alltests":
      return (
        <>
          <div className="optionSwitcher">
            <SCREALLTESTS />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      );
    case "mofas":
      return (
        <>
          <div className="optionSwitcher">
            <MOFAS />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      );
    default:
      return (
        <>
          <div className="optionSwitcher">
            <SCREWHOME />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      );
  }
}
