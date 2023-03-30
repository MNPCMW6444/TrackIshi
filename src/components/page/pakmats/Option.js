import React from "react";
import NACHSAL from "../global/nachsal/NACHSAL";

export default function Option(props) {
  switch (props.selected) {
    //case "fud":
    //return (
    //    <div className="optionSwitcher">
    //        <SHOWFUD/>
    //    </div>
    //);
    default:
      return (
        <div className="optionSwitcher">
          <NACHSAL />
        </div>
      );
  }
}
