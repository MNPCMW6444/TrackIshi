import React, {useState} from 'react';
import ShowOpinion from "./ShowOpinion";

export default function OpinionSumu(props) {
    debugger;
    let tkufaNum = props.opinion.Tkufa;
    let TkufaYear = (tkufaNum%2===0)?(tkufaNum/2):(tkufaNum/2+0.5);
    let tkufainYear = (tkufaNum%2===0)?("2"):("1");
    let yearString = TkufaYear.toString();
    let countD=0;
    for(let i=0; i<4-yearString.length;i++)
        countD++;
    let addex="";
    for(let i=0; i<countD;i++)
        addex=addex+"0";
    let finilTkuda=tkufainYear+"."+addex+yearString;

    const [opened, setOpened] = useState(false);

    return (
        <>{!opened &&<div><button onClick={()=> {setOpened(true);}}>{finilTkuda}</button></div>}
        {opened &&<div><ShowOpinion id={props.opinion._id}></ShowOpinion></div>}
        {opened &&<div><button onClick={()=> {setOpened(false);}}>סגור את חוו"ד {finilTkuda}</button></div>}</>
    )
}
