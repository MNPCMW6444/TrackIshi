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
      let sortingres = allOpinionsRes.data;
      sortingres = sortingres.sort((s1, s2) => {
        return s2.Tkufa - s1.Tkufa;
      });
      setRes(sortingres);
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
      {!res[0] && <h3>-אין לי חוו"דים-</h3>} <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  ) : (
    <div>
      טוען את כל החוו"דים שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז
      ייתכן שיש תקלה בשרת או בתקשורת איתו) <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
