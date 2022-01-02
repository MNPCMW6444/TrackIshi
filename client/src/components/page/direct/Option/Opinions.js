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
      const allpeopleres = await Axios.get(`${domain}/user/getmypeople`);
      setRes(allpeopleres.data);
      setshels(allpeopleres.data);
      if (!ready) setReady(true);
    };
    if (!ready) getMyPeople();
  }, []);

  return ready ? (
    <div className="col">
      <h2>רשימת האנשים שלי:</h2>
      <NewOpinionButton shel={"general"} shels={shels} />
      {res.map((screw) => (
        <>
          <OpenOpinions shel={screw} />
          <br />
        </>
      ))}
    </div>
  ) : (
    <div>
      טוען את כל האנשים שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז ייתכן
      שיש תקלה בשרת או בתקשורת איתו)
    </div>
  );
}
