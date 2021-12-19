import Axios from "axios";
import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import DetailsTable from "./ShowMy/DetailsTable";
import ClassesTable from "./ShowMy/ClassesTable";
import PersonDetails from "./ShowMy/PersonDetails";
import GradesTable from "./ShowMy/GradesTable";
import FgradeTable from "./ShowMy/FgradeTable";
import PotentialTable from "./ShowMy/PotentialTable";
import Paragraph from "../usefull/Paragraph";

function ShowMyOpinion(props) {
  const [crewm, setCrewm] = useState();
  const [signed, setSigned] = useState();
  const [tkufa, setTkufa] = useState();
  const [filldate, setFfilldate] = useState();
  const [monthsno, setMonthsno] = useState();
  const [position, setPosition] = useState();

  const [c1, setC1] = useState();
  const [c2, setC2] = useState();
  const [c3, setC3] = useState();
  const [c4, setC4] = useState();
  const [c5, setC5] = useState();
  const [c6, setC6] = useState();
  const [c7, setC7] = useState();
  const [c8, setC8] = useState();
  const [c9, setC9] = useState();
  const [m1, setM1] = useState();
  const [m2, setM2] = useState();
  const [tp, setTp] = useState();
  const [fp, setFp] = useState();

  const [commander, setCommander] = useState();
  const [authorizer, setAuthorizer] = useState();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const getOpinion = async () => {
      const OpinionRes = await Axios.get(
        `${domain}/opinion/getmyOpinion/${props.id}`
      );
      try {
        setCrewm(OpinionRes.data.CrewM);
      } catch (err) {
        console.log(err);
      }
      let siginit = OpinionRes.data.Signed ? "כן" : "לא";
      try {
        setSigned(siginit);
      } catch (err) {
        console.log(err);
      }

      //TKUFA
      let tkufaNum = OpinionRes.data.Tkufa;
      let TkufaYear = tkufaNum % 2 === 0 ? tkufaNum / 2 : tkufaNum / 2 + 0.5;
      let tkufainYear = tkufaNum % 2 === 0 ? "2" : "1";
      let yearString = TkufaYear.toString();
      let countD = 0;
      for (let i = 0; i < 4 - yearString.length; i++) countD++;
      let addex = "";
      for (let i = 0; i < countD; i++) addex = addex + "0";
      let finilTkufa = tkufainYear + "." + addex + yearString;
      try {
        setTkufa(finilTkufa);
      } catch (err) {
        console.log(err);
      }

      //FILLDATE
      try {
        let finil = "DIDNOTDOWANAD";
        finil = OpinionRes.data.fillDate.substring(0, 10);
        const month = finil.substring(5, 7);
        const day = finil.substring(8, 10);
        const year = finil.substring(0, 4);
        finil = day + "/" + month + "/" + year;
        setFfilldate(finil);
      } catch (err) {
        console.log(err);
      }

      try {
        setMonthsno(OpinionRes.data.MonthsNo);
      } catch (err) {
        console.log(err);
      }

      try {
        setPosition(OpinionRes.data.Position);
      } catch (err) {
        console.log(err);
      }

      try {
        setCommander(OpinionRes.data.Commander);
      } catch (err) {
        console.log(err);
      }

      try {
        setAuthorizer(OpinionRes.data.Authorizer);
      } catch (err) {
        console.log(err);
      }

      try {
        setC1(OpinionRes.data.C1);
      } catch (err) {
        console.log(err);
      }
      try {
        setC2(OpinionRes.data.C2);
      } catch (err) {
        console.log(err);
      }
      try {
        setC3(OpinionRes.data.C3);
      } catch (err) {
        console.log(err);
      }
      try {
        setC4(OpinionRes.data.C4);
      } catch (err) {
        console.log(err);
      }
      try {
        setC5(OpinionRes.data.C5);
      } catch (err) {
        console.log(err);
      }
      try {
        setC6(OpinionRes.data.C6);
      } catch (err) {
        console.log(err);
      }
      try {
        setC7(OpinionRes.data.C7);
      } catch (err) {
        console.log(err);
      }
      try {
        setC8(OpinionRes.data.C8);
      } catch (err) {
        console.log(err);
      }
      try {
        setC9(OpinionRes.data.C9);
      } catch (err) {
        console.log(err);
      }
      try {
        setM1(OpinionRes.data.M1);
      } catch (err) {
        console.log(err);
      }
      try {
        setM2(OpinionRes.data.M2);
      } catch (err) {
        console.log(err);
      }

      //PARAGRAPHS
      let tparr = OpinionRes.data.Tp;
      let fparr = OpinionRes.data.Fp;
      let tpp = "";
      let fpp = "";
      try {
        for (let i = 0; i < tparr.length; i++) tpp = tpp + tparr[i] + "\n";
      } catch (err) {
        console.log(err);
      }
      try {
        for (let i = 0; i < fparr.length; i++) fpp = fpp + fparr[i] + "\n";
      } catch (err) {
        console.log(err);
      }
      try {
        setTp(tpp);
      } catch (err) {
        console.log(err);
      }
      try {
        setFp(fpp);
      } catch (err) {
        console.log(err);
      }
      if (!ready) setReady(true);
    };
    getOpinion();
  }, [props.opinionid]);

  return ready ? (
    <div className="odiv">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 className="oh3">
        טופס מישוב והערכה לרמת הבקרה של {crewm && crewm.NickName} - תקופה{" "}
        {tkufa}:
      </h3>
      <br />
      <br /> <br />
      <h4 className="oh4">פרטי הקצין המוערך</h4>
      <br />
      <DetailsTable
        crewm={crewm}
        signed={signed}
        tkufa={tkufa}
        filldate={filldate}
        monthsno={monthsno}
        position={position}
      />
      <br />
      <ClassesTable
        maslool={crewm && crewm.Maslool}
        sooghatsava={crewm && crewm.SoogHatsava}
        dereg={crewm && crewm.Dereg}
      />
      <br />
      <br /> <br />
      <h4 className="oh4">פרטי המעריך - מפקד גף</h4>
      <br />
      <PersonDetails
        ma={commander && commander.MA}
        darga={commander && commander.Rank}
        firstn={commander && commander.FirstName}
        lastn={commander && commander.LastName}
      />
      <br />
      <br /> <br /> <br />
      <h4 className="oh4">פרטי המאשר - מפקד יחידה</h4>
      <br />
      <h5 className="oh5">(ומעריך בתנאי שהבקר מוסמך...)</h5>
      <br />
      <PersonDetails
        ma={authorizer && authorizer.MA}
        darga={authorizer && authorizer.Rank}
        firstn={authorizer && authorizer.FirstName}
        lastn={authorizer && authorizer.LastName}
      />
      <br />
      <br /> <br />
      <h4 className="oh4">הערכת תכונות בקרה:</h4>
      <br />
      <GradesTable
        c1={c1}
        c2={c2}
        c3={c3}
        c4={c4}
        c5={c5}
        c6={c6}
        c7={c7}
        c8={c8}
        c9={c9}
        allDATA={props.allDATA}
      />
      <br /> <br />
      <br />
      <h4 className="oh4">ציון מסכם:</h4>
      <br />
      <FgradeTable grade={m1} allDATA={props.allDATA} />
      <br />
      <br /> <br />
      <h4 className="oh4">פוטנציאל להובלה:</h4>
      <br />
      <PotentialTable grade={m2} />
      <br />
      <br /> <br />
      <h4 className="oh4">הערכה מילולית מסכמת:</h4> <br />
      <h5 className="oh5">יעדים לתקופה הקרובה:</h5>
      <br />
      <div className="opd">
        <Paragraph text={tp} />
      </div>
      <br />
      <h5 className="oh5">סיכום המשוב:</h5>
      <br />
      <div className="opd">
        <Paragraph text={fp} />
      </div>
      <br />
      <br />
      <br />
      <div className="OpinionClose">
        <button className="OpinionCloseButton" onClick={props.forClosing}>
          סגור את חוו"ד {tkufa}
        </button>
      </div>
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
    <h2>
      טוען את החוו"ד שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז ייתכן
      שיש תקלה בשרת או בתקשורת איתו)
    </h2>
  );
}

export default ShowMyOpinion;
