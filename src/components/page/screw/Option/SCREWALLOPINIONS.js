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

  let a;
  if (res)
    a = res.map((a) => {
      return { ...a };
    });

  if (a && a[0] && a[0].CrewM)
    for (let i = 0; i < a.length; i++) {
      if (a[i] && !a[i].מספר_אישי) {
        a[i].מספר_אישי = a[i] && a[i].CrewM && a[i].CrewM.MA;
      }
      if (a[i] && !a[i].דרגה) {
        a[i].דרגה = a[i] && a[i].CrewM && a[i].CrewM.Rank;
      }
      if (a[i] && !a[i].שם_פרטי) {
        a[i].שם_פרטי = a[i] && a[i].CrewM && a[i].CrewM.FirstName;
      }
      if (a[i] && !a[i].שם_משפחה) {
        a[i].שם_משפחה = a[i] && a[i].CrewM && a[i].CrewM.LastName;
        delete a[i].CrewM;
      }
      if (a[i] && !a[i].נחתם) {
        a[i].נחתם = a[i] && a[i].Signed ? "כן" : "לא";
        delete a[i].Signed;
      }
      if (a[i] && !a[i].אושר_מפקד_יחידה) {
        a[i].אושר_מפקד_יחידה = a[i] && a[i].wasMyAuthApped ? "כן" : "לא";
        delete a[i].wasMyAuthApped;
      }
      if (a[i] && !a[i].תקופה) {
        let tkufaNum = a[i].Tkufa;
        let TkufaYear = tkufaNum % 2 === 0 ? tkufaNum / 2 : tkufaNum / 2 + 0.5;
        let tkufainYear = tkufaNum % 2 === 0 ? "2" : "1";
        let yearString = TkufaYear.toString();
        let countD = 0;
        for (let i = 0; i < 4 - yearString.length; i++) countD++;
        let addex = "";
        for (let i = 0; i < countD; i++) addex = addex + "0";
        let finilTkufa = tkufainYear + "." + addex + yearString;
        a[i].תקופה = finilTkufa;
        delete a[i].Tkufa;
      }
      if (a[i] && !a[i].תאריך_מילוי) {
        let finil = "DIDNOTDOWANAD";
        finil = a[i] && a[i].fillDate.substring(0, 10);
        const month = finil.substring(5, 7);
        const day = finil.substring(8, 10);
        const year = finil.substring(0, 4);
        finil = day + "/" + month + "/" + year;
        a[i].תאריך_מילוי = finil;
        delete a[i].fillDate;
      }
      if (a[i] && !a[i].למידה) {
        a[i].למידה = a[i] && a[i].C1;
        delete a[i].C1;
      }
      if (a[i] && !a[i].תכנון) {
        a[i].תכנון = a[i] && a[i].C2;
        delete a[i].C2;
      }
      if (a[i] && !a[i].תפיסה_מרחבית) {
        a[i].תפיסה_מרחבית = a[i] && a[i].C3;
        delete a[i].C3;
      }
      if (a[i] && !a[i].חלקש) {
        a[i].חלקש = a[i] && a[i].C4;
        delete a[i].C4;
      }
      if (a[i] && !a[i].תקשורת) {
        a[i].תקשורת = a[i] && a[i].C5;
        delete a[i].C5;
      }
      if (a[i] && !a[i].עומס) {
        a[i].עומס = a[i] && a[i].C6;
        delete a[i].C6;
      }
      if (a[i] && !a[i].קבלת_החלטות) {
        a[i].קבלת_החלטות = a[i] && a[i].C7;
        delete a[i].C7;
      }
      if (a[i] && !a[i].הפעלה) {
        a[i].הפעלה = a[i] && a[i].C8;
        delete a[i].C8;
      }
      if (a[i] && !a[i].תחקור) {
        a[i].תחקור = a[i] && a[i].C9;
        delete a[i].C9;
      }
      if (a[i] && !a[i].ציון_מסכם) {
        a[i].ציון_מסכם = a[i] && a[i].M1;
        delete a[i].M1;
      }
      if (a[i] && !a[i].יעדים) {
        a[i].יעדים = a[i] && a[i].Tp;
        delete a[i].Tp;
      }
      if (a[i] && !a[i].סיכום) {
        a[i].סיכום = a[i] && a[i].Fp;
        delete a[i].Fp;
      }
      if (a[i] && !a[i].ממשב_מספר_אישי) {
        a[i].ממשב_מספר_אישי = a[i] && a[i].wasMyEvaMA;
        delete a[i].wasMyEvaMA;
      }
      if (a[i] && !a[i].ממשב_דרגה) {
        a[i].ממשב_דרגה = a[i] && a[i].wasMyEvaRank;
        delete a[i].wasMyEvaRank;
      }
      if (a[i] && !a[i].ממשב_שם_פרטי) {
        a[i].ממשב_שם_פרטי = a[i] && a[i].wasMyEvaFirstName;
        delete a[i].wasMyEvaFirstName;
      }
      if (a[i] && !a[i].ממשב_שם_משפחה) {
        a[i].ממשב_שם_משפחה = a[i] && a[i].wasMyEvaLastName;
        delete a[i].wasMyEvaLastName;
      }
      delete a[i]._id;
      delete a[i].MonthsNo;
      delete a[i].Position;
      delete a[i].wasRank;
      delete a[i].wasDereg;
      delete a[i].wasMaslool;
      delete a[i].wasSoogHatsava;
      delete a[i].wasUnit;
      delete a[i].wasMyAuthMA;
      delete a[i].wasMyAuthRank;
      delete a[i].wasMyAuthLastName;
      delete a[i].wasMyAuthFirstName;
      delete a[i].M2;
      delete a[i].createdAt;
      delete a[i].updatedAt;
      delete a[i].__v;
      delete a[i].Commander;
      delete a[i].Authorizer;

}

  return ready ? (
    <div className="col">
      <h2>רשימת כל חוות הדעת המקצועיות על פי תקופות:</h2>
      {res.map((opinion, i) => (
        <>
          <OpinionSumu opinion={opinion} i={i} allDATA={res} allDATA2={a} />

          <br />
        </>
      ))}
      {!res[0] && <h3>-אין לי חוו"דים-</h3>} <br />
      <br />
      <br />
      {/* <CSVDownload data={csvData} target="_blank" /> */}
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
