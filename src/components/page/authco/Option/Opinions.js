import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import OpenOpinions from "../../global/Opinions/OpenOpinions";
import NewOpinionButton from "../../global/Opinions/NewOpinionButton";

export default function Opinions(props) {
  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();
  const [shels, setshels] = useState();

  useEffect(() => {
    const getMyPeople = async () => {
      const allpeopleres = await Axios.get(`${domain}/user/getmypeopleba`);
      setRes(allpeopleres.data);
      let shelst = new Array(...allpeopleres.data);
      for (let i = 0; i < shelst.length; i++) {
        if (shelst[i].Dereg === "a" || shelst[i].Dereg === "b") {
          shelst.splice(i, 1);
          i--;
        }
      }
      setshels(shelst);
      if (!ready) setReady(true);
    };
    if (!ready) getMyPeople();
  }, []);

  let imauth = "auth";

  return ready ? (
    <div className="col">
      <br />
      <br />
      <div style={{textAlign:"center"}}>
      <NewOpinionButton shel={"general"} imauth={imauth} shels={shels} />

      </div>
      <h2>רשימת האנשים שלי:</h2>
      {res.map((screw) => (
        <>
          <OpenOpinions shel={screw} key={imauth} />
          <br />
        </>
      ))}
      {!res[0] && <h3>-אין לי אנשים-</h3>}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  ) : (
    <div>
      טוען את כל האנשים שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז ייתכן
      שיש תקלה בשרת או בתקשורת איתו)
    </div>
  );
}
