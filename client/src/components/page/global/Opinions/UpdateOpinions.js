import React, { useState, useEffect } from "react";
import EditOpinionButton from "./EditOpinionButton";
import NewOpinionButton from "./NewOpinionButton";
import Axios from "axios";
import domain from "../../../../util/domain";

export default function UpdateOpinions(props) {
  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();

  useEffect(() => {
    const getAllOpinions = async () => {
      const allOpinionsRes = await Axios.get(
        `${domain}/opinion/getallmyn/${props.shel.MA}`
      );
      setRes(allOpinionsRes.data);
      setReady(true);
    };
    getAllOpinions();
  }, []);

  return ready ? (
    <div className="col">
      <h2>רשימת כל החוודים ע"פ תקופות:</h2>
      <div>{<NewOpinionButton />}</div>
      {res.map((opinion) => (
        <>
          <div>{<EditOpinionButton oid={opinion._id} allDATA={opinion} />}</div>
          <br />
        </>
      ))}
    </div>
  ) : (
    <div>
      טוען את כל החוו"דים שלו/ה מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז
      ייתכן שיש תקלה בשרת או בתקשורת איתו)
    </div>
  );
}
