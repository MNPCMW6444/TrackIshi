import React from 'react'
import SCREWHOME from "./Option/SCREWHOME";
import SHOWFUD from "../global/FUD/ShowFUD";
import SCREWALLOPINIONS from "./Option/SCREWALLOPINIONS";
import SCREALLTESTS from "./Option/SCREALLTESTS";
import NACHSAL from "../pakmats/Option/NACHSAL";


export default function Option(props) {
    switch(props.selected) {
        case "nachsal":
        return (
            <div className="optionSwitcher">
                <NACHSAL/>
            </div>
        );
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
        case "alltests":
        return (
            <div className="optionSwitcher">
                <SCREALLTESTS />
            </div>
        );
        case "home":
        return (
            <div className="optionSwitcher">
                <SCREWHOME/>
            </div>
        );
        default:  
        return (
            <div className="optionSwitcher">
                <NACHSAL/>
            </div>
        );
    }
}
