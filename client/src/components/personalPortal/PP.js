import Axios from "axios";
import React, { useContext, useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import domain from "../../util/domain";
import SuccessMessage from "../misc/SuccessMessage";
import OpenFUD from "./FUD/OpenFUD";
import ShowFUD from "./FUD/ShowFUD";
import OpenOpinion from "./Opinions/OpenOpinion";
import ShowOpinion from "./Opinions/ShowOpinion";

export default function PP() {
  
    const [nickname, setNickname] = useState();
    const [ready, setReady] = useState(false);
    const [fudbutton, setFudbutton] = useState(false);
  
    const [successMessage, setSuccessMessage] = useState(null);
  
    const { user } = useContext(UserContext);
  
    useEffect( () => {
      const getFUD = async () => {
        const FUDRes = await Axios.get(`${domain}/auth/getFullDetails`);
        try {setNickname(FUDRes.data.NickName);} catch (err){console.log(err);}
        setReady(true);
      }
      getFUD();
    }, []);

    function updatefud () {
        setFudbutton(true);
    }

    async function finishupdatefud (successm) {
        if(successm!=null)
        {
            setFudbutton(false);
            setSuccessMessage("פרטיך עודכנו בהצלחה");
            const FUDRes = await Axios.get(`${domain}/auth/getFullDetails`);
            try {setNickname(FUDRes.data.NickName);} catch (err){console.log(err);}
        }
    }

    useEffect(()=> {
        finishupdatefud(successMessage);
    },[successMessage]);
  
  
    return ready ? (
      <div>
          {user && <h2>שלום {nickname},</h2>}
          <br />
          {!fudbutton && user && <button onClick={updatefud}>עדכון פרטים אישיים</button>}
          {fudbutton && <OpenOpinion setSuccessMessage={setSuccessMessage}/>}
          <br />
          {successMessage && 
        <SuccessMessage
          message={successMessage}
          clear={() => setSuccessMessage(null)}
        />}
        <br />
        {!fudbutton && user && <ShowOpinion />}
      </div>):(<h2>טוען את הכינוי שלך מהשרת...</h2>
    );
  }