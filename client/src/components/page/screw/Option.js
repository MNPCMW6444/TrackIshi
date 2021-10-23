import React from 'react'
import SCREWHOME from "./Option/SCREWHOME";
import SHOWFUD from "../global/FUD/ShowFUD";
import SCREWALLOPINIONS from "./Option/SCREWALLOPINIONS";


export default function Option(props) {
    switch(props.selected) {
        case "fud":
        return (
            <div className="optionSwitcher">
                <SHOWFUD/>
            </div>
        );
        case "allopinions":
        return (
            <div className="optionSwitcher">
                <SCREWALLOPINIONS />
            </div>
        );
        default:
        return (
            <div className="optionSwitcher">
                <SCREWHOME/>
            </div>
        );
    }
}
