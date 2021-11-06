import React, { useEffect, useState} from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import OpinionSumu from "../../global/Opinions/OpinionSumu";



export default function SCREALLTESTS() {
    
    const [ready, setReady] = useState(false);
    const [res, setRes] = useState();

    useEffect( () => {
        const getAllOpinions = async () => {
            const allOpinionsRes = await Axios.get(`${domain}/opinion/getallmy`);
            setRes(allOpinionsRes.data);
            setReady(true);
        }
        getAllOpinions();
    }, []);

    
    return ready ? (
        <div className="col">
          <h2>רשימת כל ההסמכות:</h2>
          <p style={{textAlign:"center", fontSize:"20pt", color:"red", backgroundColor:"white", fontWeight:"bolder"}}>עמוד זה ייכנס לפעולה בגרסה הבאה שתושק ב1.1.22 :)</p>
        </div>
        
        ):(<div>טוען את כל החוו"דים שלך מהשרת... (רוב הסיכויים שאם אתה מספיק לקרוא את ההודעה הזאת אז יש תקלה בשרת)</div>)
}