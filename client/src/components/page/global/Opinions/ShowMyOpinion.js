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

  const [wasDereg, setwasDereg] = useState();
  const [wasRank, setwasRank] = useState();
  const [wasMaslool, setwasMaslool] = useState();
  const [wasSoogHatsava, setwasSoogHatsava] = useState();
  const [wasUnit, setwasUnit] = useState();

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

  const [commma, setcommma] = useState();
  const [commrank, setcommrank] = useState();
  const [commlast, setcommlast] = useState();
  const [commfirst, setcommfirst] = useState();

  const [authma, setauthma] = useState();
  const [authrank, setauthrank] = useState();
  const [authlast, setauthlast] = useState();
  const [authfirst, setauthfirst] = useState();

  const [created, setCreated] = useState();
  const [modified, setModified] = useState();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const getOpinion = async () => {
      const OpinionRes = await Axios.get(
        `${domain}/opinion/getmyOpinion/${props.id}`
      );
      let c = OpinionRes.data.createdAt.toString();
      let cyear = c.substring(0, 4);
      let cmonth = c.substring(5, 7);
      let cday = c.substring(8, 10);
      let ctime = c.substring(11, 19);
      setCreated(cday + "/" + cmonth + "/" + cyear + " " + ctime);

      let m = OpinionRes.data.updatedAt.toString();
      let myear = m.substring(0, 4);
      let mmonth = m.substring(5, 7);
      let mday = m.substring(8, 10);
      let mtime = m.substring(11, 19);
      setModified(mday + "/" + mmonth + "/" + myear + " " + mtime);

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
        setwasDereg(OpinionRes.data.wasDereg);
        setwasMaslool(OpinionRes.data.wasMaslool);
        setwasSoogHatsava(OpinionRes.data.wasSoogHatsava);
        setwasUnit(OpinionRes.data.wasUnit);
        setwasRank(OpinionRes.data.wasRank);
        let objc = OpinionRes.data.CrewM;
        objc.Rank = OpinionRes.data.wasRank;
        setCrewm(objc);
        setcommma(OpinionRes.data.wasMyCommMA);
        setcommrank(OpinionRes.data.wasMyCommRank);
        setcommlast(OpinionRes.data.wasMyCommLastName);
        setcommfirst(OpinionRes.data.wasMyCommFirstName);

        setauthma(OpinionRes.data.wasMyAuthMA);
        setauthrank(OpinionRes.data.wasMyAuthRank);
        setauthlast(OpinionRes.data.wasMyAuthLastName);
        setauthfirst(OpinionRes.data.wasMyAuthFirstName);
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
        maslool={wasMaslool}
        sooghatsava={wasSoogHatsava}
        dereg={wasDereg}
      />
      <br />
      <br /> <br />
      <h4 className="oh4">פרטי המעריך - מפקד גף</h4>
      <br />
      <PersonDetails
        ma={commma}
        darga={commrank}
        firstn={commlast}
        lastn={commfirst}
      />
      <br />
      <br /> <br /> <br />
      <h4 className="oh4">פרטי המאשר - מפקד יחידה</h4>
      <br />
      <h5 className="oh5">(ומעריך בתנאי שהבקר מוסמך...)</h5>
      <br />
      <PersonDetails
        ma={authma}
        darga={authrank}
        firstn={authlast}
        lastn={authfirst}
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
      {wasDereg === "a" ||
        (wasDereg === "b" && (
          <>
            <h4 className="oh4">פוטנציאל להובלה:</h4>
            <br />
            <PotentialTable grade={m2} />
            <br />
            <br /> <br />
          </>
        ))}
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
      <h5 className="opinionH5">
        נוצר:
        <span className="lightero"> {created}</span>
      </h5>
      <h5 className="opinionH5">
        עודכן לאחרונה:<span className="lightero"> {modified}</span>
      </h5>
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
