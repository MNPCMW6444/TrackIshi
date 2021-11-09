import Axios from "axios";
import React, { useEffect, useState } from "react";
import domain from "../../../util/domain";
import DetailsTable from "../global/Opinions/Show/DetailsTable";
import ClassesTable from "../global/Opinions/Show/ClassesTable";
import PersonDetails from "../global/Opinions/Show/PersonDetails";
import GradesTable from "../global/Opinions/Show/GradesTable";
import FgradeTable from "../global/Opinions/Show/FgradeTable";
import PotentialTable from "../global/Opinions/Show/PotentialTable";
import Paragraph from "../Paragraph";
import ErrorMessage from "../../misc/ErrorMessage";
import TestC from "../../misc/TestC";

function ShowOpinion(props) {
  const [errorMessage, setErrorMessage] = useState(null);

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

  const [oma, setOma] = useState(0);

  const [otkufa, setOtkufa] = useState();
  const [ofilldate, setOfilldate] = useState(new Date());
  const [omonthsno, setOmonthsno] = useState(0);
  const [oposition, setOposition] = useState("");

  const [oc1, setOc1] = useState(0);
  const [oc2, setOc2] = useState(0);
  const [oc3, setOc3] = useState(0);
  const [oc4, setOc4] = useState(0);
  const [oc5, setOc5] = useState(0);
  const [oc6, setOc6] = useState(0);
  const [oc7, setOc7] = useState(0);
  const [oc8, setOc8] = useState(0);
  const [oc9, setOc9] = useState(0);

  const [om1, setOm1] = useState(0);

  const [om2, setOm2] = useState(0);

  const [otp, setOtp] = useState("");
  const [ofp, setOfp] = useState("");

  useEffect(() => {
    const getOpinion = async () => {
      const OpinionRes = await Axios.get(
        `${domain}/opinion/getmyOpinion/${props.shel}`
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
      let finilTkuda = tkufainYear + "." + addex + yearString;
      try {
        setTkufa(finilTkuda);
      } catch (err) {
        console.log(err);
      }

      //FILLDATE
      try {
        let finil = "DIDNOTDOWANAD";
        finil = OpinionRes.data.fillDate.substring(0, 10);
        const day = finil.substring(5, 7);
        const month = finil.substring(8, 10);
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
      setReady(true);
    };
    getOpinion();
  }, [props.opinionid]);

  async function update(e) {
    e.preventDefault();

    const updateData = {
      Tkufa: otkufa,
      fillDate: ofilldate,
      MonthsNo: omonthsno,
      Position: oposition,

      C1: oc1,
      C2: oc2,
      C3: oc3,
      C4: oc4,
      C5: oc5,
      C6: oc6,
      C7: oc7,
      C8: oc8,
      C9: oc9,

      M1: om1,

      M2: om2,

      Tp: otp,
      Fp: ofp,
    };

    try {
      await Axios.post(
        `${domain}/opinion/update?????Opinion/${props.shel}`,
        updateData
      );
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
      }
      return;
    }
  }

  return ready ? (
    <div className="opinion">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 className="h3Opinion">
        טופס מישוב והערכה לרמת הבקרה של {crewm.NickName} - תקופה {tkufa}:
      </h3>
      <br />
      <br />
      <h4>פרטי הקצין המוערך</h4>
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
        maslool={crewm.Maslool}
        sooghatsava={crewm.SoogHatsava}
        dereg={crewm.Dereg}
      />
      <br />
      <br />
      <h4>פרטי המעריך - מפקד גף</h4>
      <br />
      <PersonDetails
        ma={commander.MA}
        darga={commander.Rank}
        firstn={commander.FirstName}
        lastn={commander.LastName}
      />
      <br />
      <br />
      <h4>פרטי המאשר - מפקד יחידה</h4>
      <h5>(ומעריך בתנאי שהבקר מוסמך...)</h5>
      <br />
      <PersonDetails
        ma={authorizer.MA}
        darga={authorizer.Rank}
        firstn={authorizer.FirstName}
        lastn={authorizer.LastName}
      />
      <br />
      <br />
      <h4>הערכת תכונות בקרה:</h4>
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
      />
      <br />
      <br />
      <h4>ציון מסכם:</h4>
      <br />
      <FgradeTable grade={m1} />
      <br />
      <br />
      <h4>פוטנציאל להובלה:</h4>
      <br />
      <PotentialTable grade={m2} />
      <br />
      <br />
      <h4>הערכה מילולית מסכמת:</h4>
      <h5>יעדים לתקופה הקרובה:</h5>
      <br />
      <Paragraph text={tp} />
      <br />
      <h5>סיכום המשוב:</h5>
      <br />
      <Paragraph text={fp} />
      <TestC />
      <br />
      <br />
      <br />
      <button onClick={update}>שמור</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  ) : (
    <h2>
      טוען את החוו"ד מהשרת...(אם אתה מספיק לקרוא את ההודעה הזאת אז ייתכן שיש
      תקלה בשרת או בתקשורת איתו)
    </h2>
  );
}

export default ShowOpinion;
