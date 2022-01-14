import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import OpenOpinions from "../../global/Opinions/OpenOpinions";

export default function Opinions(props) {
  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();

  useEffect(() => {
    const getMyPeople = async () => {
      const allpeopleres = await Axios.get(`${domain}/user/getmypeople`);
      setRes(allpeopleres.data);
      if (!ready) setReady(true);
    };
    if (!ready) getMyPeople();
  }, []);

  return ready ? (
    <div className="col">
      <h2>רשימת האנשים שלי:</h2>
      {res.map((screw) => (
        <>
          <OpenOpinions shel={screw} />
          <br />
        </>
      ))}
      {!res[0] && <h3>-אין לי אנשים-</h3>}
    </div>
  ) : (
    <div>
      טוען את כל האנשים שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז ייתכן
      שיש תקלה בשרת או בתקשורת איתו)
    </div>
  );
}
