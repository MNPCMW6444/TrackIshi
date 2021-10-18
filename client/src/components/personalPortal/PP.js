import Axios from "axios";
import React, { useContext, useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import domain from "../../util/domain";
import SuccessMessage from "../misc/SuccessMessage";
import SuccessMessage2 from "../misc/SuccessMessage";
import OpenFUD from "./FUD/OpenFUD";
import OpenOpinion from "./Opinions/OpenOpinion";

export default function PP() {
  
    const [nickname, setNickname] = useState();
    const [ready, setReady] = useState(false);
    const [fudbutton, setFudbutton] = useState(false);
    
    const [opinionButton, setOpinionButton] = useState(false);
  
    const [successMessage, setSuccessMessage] = useState(null);
    const [successMessage2, setSuccessMessage2] = useState(null);
  
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

    function updateopinion () {
      setOpinionButton(true);
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

    async function asdasd(){
      Axios.put("http://localhost:10004/auth/updateOpinion/61630992a638573e2bbff640", { 
        "otkufa":404
  });
    }
  
    return ready ? (
      <div>
          {user && <h2>שלום {nickname},</h2>}
          <br />
          {!fudbutton && user && <button onClick={updatefud}>עדכון פרטים אישיים</button>}
          {fudbutton && <OpenFUD setSuccessMessage={setSuccessMessage}/>}
          <br />
          {successMessage && 
        <SuccessMessage
          message={successMessage}
          clear={() => setSuccessMessage(null)}
        />}
        <br />
          {!opinionButton && user && <button onClick={updateopinion}>עדכון חוו"ד</button>}
          {opinionButton && <OpenOpinion setSuccessMessage2={setSuccessMessage2} shel={"61630992a638573e2bbff640"}/>}
          <br />
          {successMessage2 &&
        <SuccessMessage2
          message={successMessage2}
          clear={() => setSuccessMessage2(null)}
        />}
      </div>):(<h2>טוען את הכינוי שלך מהשרת...</h2>
    );
  }