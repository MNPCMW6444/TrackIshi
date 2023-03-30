import React from "react";
import NACHSALKAHAD from "../global/nachsal/NACHSALKAHAD";

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
          <NACHSALKAHAD />
        </div>
      );
  }
}
