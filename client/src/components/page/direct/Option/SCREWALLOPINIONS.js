import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import OpinionSumu from "../../global/Opinions/OpinionSumu";

export default function SCREWALLOPINIONS() {
  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();

  useEffect(() => {
    const getAllOpinions = async () => {
      const allOpinionsRes = await Axios.get(`${domain}/opinion/getallmy`);
      setRes(allOpinionsRes.data);
      setReady(true);
    };
    getAllOpinions();
  }, []);

  return ready ? (
    <div className="col">
      <h2>רשימת כל החוודים ע"פ תקופות:</h2>
      {res.map((opinion) => (
        <>
          <OpinionSumu opinion={opinion} allDATA={res} />
          <br />
        </>
      ))}
    </div>
  ) : (
    <div>
      טוען את כל החוו"דים שלך מהשרת... (רוב הסיכויים שאם אתה מספיק לקרוא את
      ההודעה הזאת אז יש תקלה בשרת)
    </div>
  );
}
