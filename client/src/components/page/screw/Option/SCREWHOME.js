import React, {useState} from 'react';
import SCREWALLOPINIONS from "./SCREHOME/SCREWALLOPINIONS";
import Lchart from '../../global/charts/Lchart';
import Timeline from "./SCREHOME/Timeline";

export default function SCREWHOME() {
    const [allopinions, setAllopinions] = useState(false);
    return (
    <div className="ScrewHome">
        {!allopinions && <button onClick={() => setAllopinions(true)}>צפייה ברשימת כל החוו"דים</button>}
        {allopinions && <SCREWALLOPINIONS />}
        {/*<Lchart data={[{tkufa:"1.2018", overGrade:6}, {tkufa:"2.2018", overGrade:10}, {tkufa:"1.2019", overGrade:7}, {tkufa:"2.2019", overGrade:4}, {tkufa:"1.2020", overGrade:5}, {tkufa:"2.2020", overGrade:7}, {tkufa:"1.2021", overGrade:8}, {tkufa:"2.2021", data:8} ]} />*/}
        <Timeline />
    </div> );
}
