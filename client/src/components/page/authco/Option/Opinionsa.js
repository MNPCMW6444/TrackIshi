import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import Apopb from "./Apopb";

export default function Opinionsa(props) {
  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();

  useEffect(() => {
    const getMyPeople = async () => {
      const allUnApp = await Axios.get(`${domain}/opinion/getallunapp`);
      setRes(allUnApp.data);

      if (!ready) setReady(true);
    };
    if (!ready) getMyPeople();
  }, []);

  return ready ? (
    <div className="col">
      <h2>רשימת החוו"דים הממתינים לאישור שלי:</h2>
      {res.map((opinion) => (
        <>
          <Apopb is={opinion} />
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
