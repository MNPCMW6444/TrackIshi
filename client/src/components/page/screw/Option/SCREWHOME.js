import React, {useState, useContext, useEffect} from 'react';
import UserContext from "../../../../context/UserContext";
import SCREWALLOPINIONS from "./SCREHOME/SCREWALLOPINIONS";
import Lchart from '../../global/charts/Lchart';
import Timeline from "../../global/charts/Timeline";
import Axios from "axios";
import domain from "../../../../util/domain";

export default function SCREWHOME() {
    const [allopinions, setAllopinions] = useState(false);
    const { user, getUser } = useContext(UserContext);
    const [ready, setReady] = useState(false);
    const [cersarray, setCersarray] = useState();
      

    useEffect( () => {
        const getCers = async () => {
            const cers = await Axios.get(`${domain}/certification/getallmy`);
            setCersarray(cers.data);
            setReady(true);
        }
        getCers();
      }, []);

    return (
    <div className="ScrewHome">
        {!allopinions && <button onClick={() => setAllopinions(true)}>צפייה ברשימת כל החוו"דים</button>}
        {allopinions && <SCREWALLOPINIONS />}
        <br/>
        <br/>
        <br/>
                                            {/*<Lchart data={[{tkufa:"1.2018", overGrade:6}, {tkufa:"2.2018", overGrade:10}, {tkufa:"1.2019", overGrade:7}, {tkufa:"2.2019", overGrade:4}, {tkufa:"1.2020", overGrade:5}, {tkufa:"2.2020", overGrade:7}, {tkufa:"1.2021", overGrade:8}, {tkufa:"2.2021", data:8} ]} />*/}
        {ready ? <Timeline crewmobject={user} cersarray={cersarray}/> : <div>טוען את ההסמכות שלך מהשרת... (רוב הסיכויים שאם אתה מספיק לקרוא את ההודעה הזאת אז יש תקלה בשרת)</div>}
    </div> );
}
