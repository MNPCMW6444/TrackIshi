import React, { useState, useEffect, useContext } from "react";
import EditOpinionButton from "./EditOpinionButton";
import NewOpinionButton from "./NewOpinionButton";
import Axios from "axios";
import domain from "../../../../util/domain";
import UserContext from "../../../../context/UserContext";

export default function UpdateOpinions(props) {
  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();
  const { user } = useContext(UserContext);

  const [didupdated, setDidupdated] = useState();

  useEffect(() => {
    const getAllOpinions = async () => {
      const allOpinionsRes = await Axios.get(
        `${domain}/opinion/getallmyn/${props.shel.MA}`
      );
      let sortingres = allOpinionsRes.data;
      sortingres = sortingres.sort((s1, s2) => {
        return s2.Tkufa - s1.Tkufa;
      });
      setRes(sortingres);
      setReady(true);
    };
    getAllOpinions();
  }, [didupdated]);

  return ready ? (
    <div className="col">
      <h2>רשימת כל חוות הדעת המקצועיות על פי תקופות:</h2>
      <div>
        {props.isGray !== "gray" && (
          <NewOpinionButton shel={props.shel} setDidupdated={setDidupdated} />
        )}
      </div>
      {res.map((opinion) => (
        <>
          <div>
            <EditOpinionButton
              oid={opinion._id}
              allDATA={opinion}
              shel={props.shel}
              setDidupdated={setDidupdated}
              isGray={opinion.wasMyEvaMA !== user.MA ? "gray" : ""}
              style={
                opinion.wasMyEvaMA !== user.MA
                  ? { backgroundColor: "gray" }
                  : {}
              }
            />
          </div>
          <br />
        </>
      ))}
      {!res[0] && <h3>-אין לי חוו"דים-</h3>}
    </div>
  ) : (
    <div>
      טוען את כל החוו"דים שלו/ה מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז
      ייתכן שיש תקלה בשרת או בתקשורת איתו)
    </div>
  );
}
