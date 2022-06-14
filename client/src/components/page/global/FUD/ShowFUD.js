import Axios from "axios";
import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import UpdateFUD from "./UpdateFUD";
import SuccessMessage from "../../../messages/SuccessMessage";
import ErrorMessage from "../../../messages/ErrorMessage";

function ShowFUD(props) {
  let externalma;
  if (props.ma) externalma = props.ma;

  const [sss, setsss] = useState();
  const [ma, setMa] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [nickname, setNickname] = useState();
  const [courseno, setCourseno] = useState();
  const [birthdate, setBirthdate] = useState();
  const [email, setEmail] = useState();
  const [mainphone, setMainphone] = useState();
  const [emergencyphone, setEmergencyphone] = useState();
  const [addresscity, setAddresscity] = useState();
  const [addressline, setAddressline] = useState();
  const [rank, setRank] = useState();
  const [unit, setUnit] = useState();
  const [soogHatsava, setSoogHatsava] = useState();
  const [maslool, setMaslool] = useState();
  const [ready, setReady] = useState(false);

  const [dereg, setdereg] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [edit, setEdit] = useState(false);
  const [updatepass, setupdatepass] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [successMessage2, setSuccessMessage2] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getFUD = async () => {
      let FUDRes;
      if (externalma)
        FUDRes = await Axios.get(
          `${domain}/user/getFullDetailsE/${externalma}`
        );
      else FUDRes = await Axios.get(`${domain}/user/getFullDetails`);
      try {
        setFirstname(FUDRes.data.FirstName);
      } catch (err) {
        console.log(err);
      }
      try {
        setMa(FUDRes.data.MA);
      } catch (err) {
        console.log(err);
      }
      try {
        setLastname(FUDRes.data.LastName);
      } catch (err) {
        console.log(err);
      }
      try {
        setNickname(FUDRes.data.NickName);
      } catch (err) {
        console.log(err);
      }
      try {
        setCourseno(FUDRes.data.CourseNo);
      } catch (err) {
        console.log(err);
      }
      try {
        let finil = "DIDNOTDOWANAD";
        finil = FUDRes.data.BirthDate.substring(0, 10);
        const day = finil.substring(5, 7);
        const month = finil.substring(8, 10);
        const year = finil.substring(0, 4);
        finil = month + "/" + day + "/" + year; //נכתב הפוך בגלל שהמערכת בשביל באנגלית
        setBirthdate(finil);
      } catch (err) {
        console.log(err);
      }
      try {
        setEmail(FUDRes.data.Email);
      } catch (err) {
        console.log(err);
      }
      try {
        setMainphone(FUDRes.data.MainPhone);
      } catch (err) {
        console.log(err);
      }
      try {
        setEmergencyphone(FUDRes.data.EmergencyPhone);
      } catch (err) {
        console.log(err);
      }
      try {
        setAddresscity(FUDRes.data.AddressCity);
      } catch (err) {
        console.log(err);
      }
      try {
        setAddressline(FUDRes.data.AddressLine);
      } catch (err) {
        console.log(err);
      }
      try {
        setRank(FUDRes.data.Rank);
      } catch (err) {
        console.log(err);
      }
      try {
        setUnit(FUDRes.data.Unit);
      } catch (err) {
        console.log(err);
      }
      let hatsv;
      try {
        hatsv = FUDRes.data.SoogHatsava === "sadir" ? "סדיר" : hatsv;
        hatsv = FUDRes.data.SoogHatsava === "hatsach" ? 'הצ"ח' : hatsv;
        hatsv = FUDRes.data.SoogHatsava === "miluim" ? "מילואים" : hatsv;
        setSoogHatsava(hatsv);
      } catch (err) {
        console.log(err);
      }
      let msll;
      try {
        msll = FUDRes.data.Maslool === "mesima" ? "משימה" : msll;
        msll = FUDRes.data.Maslool === "taavura" ? "תעבורה" : msll;
        msll = FUDRes.data.Maslool === "versatili" ? "ורסטילי" : msll;
        msll = FUDRes.data.Maslool === "ha" ? "הכשרה" : msll;
        setMaslool(msll);
      } catch (err) {
        console.log(err);
      }
      setReady(true);
    };
    getFUD();
  }, [sss]);

  async function changePass() {
    //המרת דרג לאנגלית
    let dereg2;
    try {
      dereg2 = dereg === "א'" ? "a" : dereg2;
      dereg2 = dereg === "ב'" ? "b" : dereg2;
      dereg2 = dereg === "ג'" ? "c" : dereg2;
      dereg2 = dereg === "ד'" ? "d" : dereg2;
    } catch (err) {
      console.log(err);
    }

    const newpass = {
      dereg: dereg2,
      pass: password,
      pass2: password2,
    };

    try {
      const res = await Axios.put(`${domain}/user/changemypass`, newpass);
      if (res.data.SUC === "YES") setSuccessMessage2("הפרטים עודכנו בהצלחה!");
      setupdatepass(false);
      setPassword("");
      setPassword2("");
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
      } else console.log(err);
    }
    return;
  }

  return ready ? (
    <>
      {!edit && (
        <div className="fudheaderdiv">
          <h3 className="fudheader">
            פרטים {externalma ? "מלאים" : "אישיים"}:
          </h3>
        </div>
      )}
      {edit && (
        <UpdateFUD suc={setSuccessMessage} whendone={setEdit} finish={setsss} />
      )}
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          clear={() => setSuccessMessage(null)}
        />
      )}
      {!edit && (
        <div className="FUD">
          <div className="FUDcolumnFirst">
            <div className="fudunit">
              <div className="fudTitle">מספר אישי: </div>
              <div
                className={
                  ma.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {ma}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">קורס: </div>
              <div
                className={
                  courseno.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {courseno}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">תאריך לידה: </div>
              <div
                className={
                  birthdate.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {birthdate}
              </div>
            </div>
          </div>
          <div className="FUDcolumn">
            <div className="fudunit">
              <div className="fudTitle">שם פרטי: </div>
              <div
                className={
                  firstname.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {firstname}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">שם משפחה: </div>
              <div
                className={
                  lastname.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {lastname}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">כינוי: </div>
              <div
                className={
                  nickname.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {nickname}
              </div>
            </div>
          </div>
          <div className="FUDcolumn">
            <div className="fudunit">
              <div className="fudTitle">מספר טלפון: </div>
              <div
                className={
                  mainphone.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {mainphone}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">טל' למקרה חירום: </div>
              <div
                className={
                  emergencyphone.length > 15
                    ? "fudContenttrue"
                    : "fudContentfalse"
                }
              >
                {emergencyphone}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">דוא"ל אזרחי: </div>
              <div
                className={
                  email.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {email}
              </div>
            </div>
          </div>
          <div className="FUDcolumn">
            <div className="fudunit">
              <div className="fudTitle">עיר מגורים: </div>
              <div
                className={
                  addresscity.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {addresscity}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">כתובת: </div>
              <div
                className={
                  addressline.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {addressline}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">דרגה: </div>
              <div
                className={
                  rank.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {rank}
              </div>
            </div>
            <br />
            <br />
          </div>
          <div className="FUDcolumn">
            <div className="fudunit">
              <div className="fudTitle">יחידה: </div>
              <div
                className={
                  unit.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {unit}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">הצבה: </div>
              <div
                className={
                  soogHatsava.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {soogHatsava}
              </div>
            </div>
            <br />
            <div className="fudunit">
              <div className="fudTitle">מסלול: </div>
              <div
                className={
                  maslool.length > 15 ? "fudContenttrue" : "fudContentfalse"
                }
              >
                {maslool}
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      )}
      {!edit && (
        <div className="fudupdatebuttondiv">
          {!externalma && (
            <button className="fudupdatebutton" onClick={() => setEdit(true)}>
              עדכון הפרטים
            </button>
          )}
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      {!updatepass && (
        <div className="changepass">
          {!externalma && (
            <button
              className="changepassbutton"
              onClick={() => setupdatepass(true)}
            >
              שינוי סיסמה ודרג מקצועי
            </button>
          )}
        </div>
      )}{" "}
      <br />
      <br />
      {successMessage2 && (
        <SuccessMessage
          message={successMessage2}
          clear={() => setSuccessMessage2(null)}
        />
      )}
      {updatepass && (
        <div className="changepassm">
          <br />{" "}
          {errorMessage && (
            <ErrorMessage
              message={errorMessage}
              clear={() => setErrorMessage(null)}
            />
          )}
          <br />
          <label>עדכן דרג מקצועי (נדרש להזין סיסמה): </label>
          <select onChange={(e) => setdereg(e.target.value)}>
            <option disabled selected value>
              {" "}
              -- בחר --{" "}
            </option>{" "}
            <option> א' </option>
            <option> ב' </option>
            <option> ג' </option>
            <option> ד' </option>
          </select>{" "}
          <br />
          <br />
          <label>הזן סיסמה: </label>
          {"   "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>{" "}
          <br /> <br />
          <label>הזן אותה סיסמה שוב: </label>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          ></input>
          <br /> <br />
          <br /> <br />
          <button className="changepassbuttonOK" onClick={changePass}>
            עדכון הפרטים
          </button>
          <br /> <br />
          <button
            className="changepassbuttonCAN"
            onClick={() => {
              setPassword("");
              setPassword2("");
              setupdatepass(false);
            }}
          >
            ביטול
          </button>
          <br />
          <br />
        </div>
      )}
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
    </>
  ) : (
    <h2>
      טוען את הפרטים האישיים שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז
      ייתכן שיש תקלה בשרת או בתקשורת איתו)
    </h2>
  );
}

export default ShowFUD;
