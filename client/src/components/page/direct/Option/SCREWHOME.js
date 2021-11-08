import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../../../context/UserContext";
import Timeline from "../../global/charts/Timeline";
import Axios from "axios";
import domain from "../../../../util/domain";

export default function SCREWHOME() {
  const { user } = useContext(UserContext);
  const [ready, setReady] = useState(false);
  const [cersarray, setCersarray] = useState();

  useEffect(() => {
    const getCers = async () => {
      const cers = await Axios.get(`${domain}/certification/getallmy`);
      setCersarray(cers.data);
      setReady(true);
    };
    getCers();
  }, []);

  return (
    <div style={{ width: "80%", paddingRight: "10%" }} className="ScrewHome">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {ready ? (
        <Timeline crewmobject={user} cersarray={cersarray} />
      ) : (
        <div>
          טוען את ההסמכות שלך מהשרת... (רוב הסיכויים שאם אתה מספיק לקרוא את
          ההודעה הזאת אז יש תקלה בשרת)
        </div>
      )}

      <br />
      <br />
      <br />
      <p
        style={{
          textAlign: "center",
          fontSize: "20pt",
          color: "red",
          backgroundColor: "white",
          fontWeight: "bolder",
        }}
      >
        עמוד זה ייכנס לפעולה בגרסה הבאה שתושק ב1.1.22 :)
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
