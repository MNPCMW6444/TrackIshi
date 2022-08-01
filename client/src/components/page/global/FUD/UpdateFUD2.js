import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import domain from "../../../../util/domain";
import ErrorMessage from "../../../messages/ErrorMessage";
import UserContext from "../../../../context/UserContext";

function UpdateFUD(props) {
  let externalma;
  if (props.ma) externalma = props.ma;

  const { user } = useContext(UserContext);

  const [auths, setauths] = useState();
  const [directs, setdirects] = useState();
  const [schlls, setschlls] = useState();

  const [hischll, sethischll] = useState("ללא");
  const [hisdirect, sethisdirect] = useState();
  const [hisauth, sethisauth] = useState();
  const [role, setrole] = useState();
  const [prof, setprof] = useState();
  const [u, setu] = useState();

  const [nn, setnn] = useState();

  const [ma, setMA] = useState();

  const [falg, setfalg] = useState(false);

  const [ffirstname, fsetFirstname] = useState();
  const [flastname, fsetLastname] = useState();
  const [fnickname, fsetNickname] = useState();
  const [fcourseno, fsetCourseno] = useState();
  const [fbirthdate, fsetBirthdate] = useState();
  const [femail, fsetEmail] = useState();
  const [fmainphone, fsetMainphone] = useState();
  const [femergencyphone, fsetEmergencyphone] = useState();
  const [faddresscity, fsetAddresscity] = useState();
  const [faddressline, fsetAddressline] = useState();
  const [frank, fsetRank] = useState();
  const [funit, fsetUnit] = useState();
  const [fsoogHatsava, fsetSoogHatsava] = useState();
  const [fmaslool, fsetMaslool] = useState();

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
  //תוספות לדרג
  const [fdereg, fsetDereg] = useState(); //חיפוש
  const [dereg, setDereg] = useState(); //הזנה

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getFUD = async () => {
      let FUDRes;
      FUDRes = await Axios.get(`${domain}/user/getFullDetailsE/${externalma}`);

      try {
        let nno = await getnn(FUDRes.data.MyAuth);

        sethisauth(nno);
      } catch (err) {
        console.log(err);
      }
      try {
        let nno = await getnn(FUDRes.data.MyComm);
        sethisdirect(nno);
      } catch (err) {
        console.log(err);
      }
      try {
        let nno = await getnn(FUDRes.data.MyTutor);
        sethischll(nno);
      } catch (err) {
        console.log(err);
      }
      try {
        if (FUDRes.data.Role === "SCREW") setrole("איש צוות");
        if (FUDRes.data.Role === "DIRECT") setrole("מפקד גף");
        if (FUDRes.data.Role === "AUTHCO") setrole("מפקד יחידה");
        if (FUDRes.data.Role === "KAHAD") setrole("מנהל כח אדם");
        if (FUDRes.data.Role === "PAKMATS") setrole("מבצעים");
        if (FUDRes.data.Role === "SCHOOL") setrole("מפקד הכשרה");
        if (FUDRes.data.Role === "S420") setrole("מפקד הכשרה 420");
      } catch (err) {
        console.log(err);
      }

      try {
        setMA(FUDRes.data.MA);
      } catch (err) {
        console.log(err);
      }

      try {
        if (FUDRes.data.Isb) setprof("בקרה");
        if (!FUDRes.data.Isb) setprof("פיקוח");
      } catch (err) {
        console.log(err);
      }

      try {
        if (FUDRes.data.Isk) setu("קצינים");
        if (!FUDRes.data.Isk) setu("חוגרים");
      } catch (err) {
        console.log(err);
      }
      try {
        setFirstname(FUDRes.data.FirstName);
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
        setBirthdate(FUDRes.data.BirthDate.substring(0, 10));
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
      try {
        fsetFirstname(FUDRes.data.FirstName);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetLastname(FUDRes.data.LastName);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetNickname(FUDRes.data.NickName);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetCourseno(FUDRes.data.CourseNo);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetBirthdate(FUDRes.data.BirthDate.substring(0, 10));
      } catch (err) {
        console.log(err);
      }
      try {
        fsetEmail(FUDRes.data.Email);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetMainphone(FUDRes.data.MainPhone);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetEmergencyphone(FUDRes.data.EmergencyPhone);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetAddresscity(FUDRes.data.AddressCity);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetAddressline(FUDRes.data.AddressLine);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetRank(FUDRes.data.Rank);
      } catch (err) {
        console.log(err);
      }
      try {
        fsetUnit(FUDRes.data.Unit);
      } catch (err) {
        console.log(err);
      }
      let fhatsv;
      try {
        fhatsv = FUDRes.data.SoogHatsava === "sadir" ? "סדיר" : fhatsv;
        fhatsv = FUDRes.data.SoogHatsava === "hatsach" ? 'הצ"ח' : fhatsv;
        fhatsv = FUDRes.data.SoogHatsava === "miluim" ? "מילואים" : fhatsv;
        fsetSoogHatsava(fhatsv);
      } catch (err) {
        console.log(err);
      }
      let fmsll;
      try {
        fmsll = FUDRes.data.Maslool === "mesima" ? "משימה" : fmsll;
        fmsll = FUDRes.data.Maslool === "taavura" ? "תעבורה" : fmsll;
        fmsll = FUDRes.data.Maslool === "versatili" ? "ורסטילי" : fmsll;
        fmsll = FUDRes.data.Maslool === "ha" ? "הכשרה" : fmsll;
        fsetMaslool(fmsll);
      } catch (err) {
        console.log(err);
      }

      //חיפוש דרג
      let derege;
      try {
        derege = FUDRes.data.Dereg === "a" ? "א'" : derege;
        derege = FUDRes.data.Dereg === "b" ? "ב'" : derege;
        derege = FUDRes.data.Dereg === "c" ? "ג'" : derege;
        derege = FUDRes.data.Dereg === "d" ? "ד'" : derege;
        setDereg(derege);
      } catch (err) {
        console.log(err);
      }

      let fderege;
      try {
        fderege = FUDRes.data.Dereg === "a" ? "א'" : fderege;
        fderege = FUDRes.data.Dereg === "b" ? "ב'" : fderege;
        fderege = FUDRes.data.Dereg === "c" ? "ג'" : fderege;
        fderege = FUDRes.data.Dereg === "d" ? "ד'" : fderege;
        fsetDereg(fderege);
      } catch (err) {
        console.log(err);
      }

      setReady(true);
    };
    const getall = async () => {
      let FUDRes;
      FUDRes = await Axios.get(`${domain}/user/getdirects`);
      setdirects(FUDRes && FUDRes.data);

      FUDRes = await Axios.get(`${domain}/user/getschlls`);
      setschlls(FUDRes && FUDRes.data);

      FUDRes = await Axios.get(`${domain}/user/getauths`);
      setauths(FUDRes && FUDRes.data);
    };
    getFUD();
    getall();
  }, []);

  async function getnn(id) {
    let FUDRes;
    FUDRes = await Axios.get(`${domain}/user/getnn/${id}`);
    return FUDRes && FUDRes.data && FUDRes.data.nn;
  }

  async function updatefud(e) {
    e.preventDefault();
    let hatsv2;
    try {
      hatsv2 = fsoogHatsava === "סדיר" ? "sadir" : hatsv2;
      hatsv2 = fsoogHatsava === 'הצ"ח' ? "hatsach" : hatsv2;
      hatsv2 = fsoogHatsava === "מילואים" ? "miluim" : hatsv2;
    } catch (err) {
      console.log(err);
    }
    let msll2;
    try {
      msll2 = fmaslool === "משימה" ? "mesima" : msll2;
      msll2 = fmaslool === "תעבורה" ? "taavura" : msll2;
      msll2 = fmaslool === "ורסטילי" ? "versatili" : msll2;
      msll2 = fmaslool === "הכשרה" ? "ha" : msll2;
    } catch (err) {
      console.log(err);
    }

    //המרת דרג לאנגלית
    let dereg2;
    try {
      dereg2 = fdereg === "א'" ? "a" : dereg2;
      dereg2 = fdereg === "ב'" ? "b" : dereg2;
      dereg2 = fdereg === "ג'" ? "c" : dereg2;
      dereg2 = fdereg === "ד'" ? "d" : dereg2;
    } catch (err) {
      console.log(err);
    }

    let authx;
    if (user.Role === "DIRECT" || user.Role === "AUTHCO") authx = hisauth;
    let commx;
    if (user.Role === "DIRECT" || user.Role === "AUTHCO") commx = hisdirect;
    let schlx;
    if (user.Role === "DIRECT" || user.Role === "AUTHCO") schlx = hischll;
    let rolex;
    if (user.Role === "DIRECT" || user.Role === "AUTHCO") rolex = role;

    const updateFUDData = {
      Isb: prof === "בקרה",
      Isk: u === "קצינים",
      authx: authx,
      commx: commx,
      schlx: schlx,
      rolex: rolex,
      firstname: ffirstname,
      lastname: flastname,
      nickname: fnickname,
      courseno: fcourseno,
      birthdate: fbirthdate,
      email: femail,
      mainphone: fmainphone,
      emergencyphone: femergencyphone,
      addresscity: faddresscity,
      addressline: faddressline,
      rank: frank,
      unit: funit,
      soogHatsava: hatsv2,
      maslool: msll2,
      //הזנת דרג
      dereg: dereg2,
    };

    try {
      setfalg(true);
      if (externalma)
        await Axios.put(
          `${domain}/user/updateFullDetails2/${externalma}`,
          updateFUDData
        );
      else await Axios.put(`${domain}/user/updateFullDetails`, updateFUDData);

      props.suc("הפרטים עודכנו בהצלחה!");
      const done = props.whendone;
      done(false);
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
      <div>
        <div className="fudheaderdiv">
          <h3 className="fudheader">עדכון פרטים אישיים למספר אישי {ma}:</h3>
        </div>
        <br />
        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            clear={() => setErrorMessage(null)}
          />
        )}
        <form>
          <div className="FUD">
            <div className="FUDcolumnFirst">
              <div className="fudunit">
                <div className="fudTitle">מספר אישי: </div>
                <div className="fudContent">{ma}</div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">מספר קורס: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-courseno"
                    type="number"
                    placeholder="מספר קורס"
                    defaultValue={courseno}
                    value={fcourseno}
                    onChange={(e) => fsetCourseno(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">תאריך לידה: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-birthdate"
                    type="date"
                    placeholder="תאריך לידה"
                    defaultValue={birthdate}
                    value={fbirthdate}
                    onChange={(e) => fsetBirthdate(e.target.value)}
                  />
                </div>
              </div>

              <br />
              {user && (user.Role === "DIRECT" || user.Role === "AUTHCO") && (
                <div className="fudunit">
                  <div className="fudTitles">תפקיד: </div>
                  <div className="fudContent">
                    <select
                      className="fudinput"
                      id="form-role"
                      type="text"
                      placeholder="תפקיד"
                      defaultValue={role}
                      value={role}
                      onChange={(e) => setrole(e.target.value)}
                    >
                      <option disabled selected value>
                        {" "}
                        -- בחר --{" "}
                      </option>
                      <option>איש צוות</option>
                      <option>מפקד גף</option>
                      <option>מפקד יחידה</option>
                      <option>מנהל כח אדם</option>
                      <option>מבצעים</option>
                      <option>מפקד הכשרה</option>
                      <option>מפקד הכשרה 420</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className="FUDcolumn">
              <div className="fudunit">
                <div className="fudTitle">שם פרטי: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-firstname"
                    type="text"
                    placeholder="שם פרטי"
                    defaultValue={firstname}
                    value={ffirstname}
                    onChange={(e) => fsetFirstname(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">שם משפחה: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-lastname"
                    type="text"
                    placeholder="שם משפחה"
                    defaultValue={lastname}
                    value={flastname}
                    onChange={(e) => fsetLastname(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">כינוי: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-nickname"
                    type="text"
                    placeholder="כינוי"
                    defaultValue={nickname}
                    value={fnickname}
                    onChange={(e) => fsetNickname(e.target.value)}
                  />
                </div>
              </div>
              <br />
              {user && (user.Role === "DIRECT" || user.Role === "AUTHCO") && (
                <div className="fudunit">
                  <div className="fudTitles">מפקד הכשרה: </div>
                  <div className="fudContent">
                    <select
                      className="fudinput"
                      id="form-hischll"
                      type="text"
                      placeholder="מפקד הכשרה"
                      defaultValue={hischll}
                      value={hischll}
                      onChange={(e) => sethischll(e.target.value)}
                    >
                      <option disabled selected value>
                        {" "}
                        -- בחר --{" "}
                      </option>

                      {schlls &&
                        schlls.map((schll) => (
                          <option>{schll.NickName}</option>
                        ))}

                      <option> ללא </option>
                    </select>
                  </div>
                </div>
              )}{" "}
            </div>
            <div className="FUDcolumn">
              <div className="fudunit">
                <div className="fudTitle">מספר טלפון: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-mainphone"
                    type="text"
                    placeholder="מספר טלפון"
                    defaultValue={mainphone}
                    value={fmainphone}
                    onChange={(e) => fsetMainphone(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">טל' למקרה חירום: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-emergencyphone"
                    type="text"
                    placeholder="מספר טלפון נוסף למקרה חירום"
                    defaultValue={emergencyphone}
                    value={femergencyphone}
                    onChange={(e) => fsetEmergencyphone(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">דוא"ל אזרחי:</div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-email"
                    type="email"
                    placeholder="כתובת דואר אלקטרוני (אזרחית)"
                    defaultValue={email}
                    value={femail}
                    onChange={(e) => fsetEmail(e.target.value)}
                  />
                </div>
              </div>
              <br />
              {user && (user.Role === "DIRECT" || user.Role === "AUTHCO") && (
                <div className="fudunit">
                  <div className="fudTitles">מפקד גף: </div>
                  <div className="fudContent">
                    <select
                      className="fudinput"
                      id="form-hischll"
                      type="text"
                      placeholder="מפקד גף"
                      defaultValue={hisdirect}
                      value={hisdirect}
                      onChange={(e) => sethisdirect(e.target.value)}
                    >
                      <option disabled selected value>
                        {" "}
                        -- בחר --{" "}
                      </option>

                      {directs &&
                        directs.map((direct) => (
                          <option>{direct.NickName}</option>
                        ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className="FUDcolumn">
              <div className="fudunit">
                <div className="fudTitle">עיר מגורים: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-addresscity"
                    type="text"
                    placeholder="עיר מגורים"
                    defaultValue={addresscity}
                    value={faddresscity}
                    onChange={(e) => fsetAddresscity(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">כתובת מגורים: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-addressline"
                    type="text"
                    placeholder="כתובת מגורים"
                    defaultValue={addressline}
                    value={faddressline}
                    onChange={(e) => fsetAddressline(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">דרגה: </div>
                <div className="fudContent">
                  <select
                    className="fudinput"
                    id="form-rank"
                    type="text"
                    placeholder="דרגה"
                    defaultValue={frank}
                    value={frank}
                    onChange={(e) => fsetRank(e.target.value)}
                  >
                    <option disabled selected value>
                      {" "}
                      -- בחר --{" "}
                    </option>
                    <option> סג"מ </option>
                    <option> סגן </option>
                    <option> סרן </option>
                    <option> רס"ן </option>
                    <option> סא"ל </option>
                    <option> אל"מ </option>
                    <option> תא"ל </option>
                    <option> צוער </option>
                  </select>
                </div>
              </div>{" "}
              <br />
              {user && (user.Role === "DIRECT" || user.Role === "AUTHCO") && (
                <div className="fudunit">
                  <div className="fudTitles">מפקד יחידה: </div>
                  <div className="fudContent">
                    <select
                      className="fudinput"
                      id="form-hisauth"
                      type="text"
                      placeholder="מפקד יחידה"
                      defaultValue={hisauth}
                      value={hisauth}
                      onChange={(e) => sethisauth(e.target.value)}
                    >
                      <option disabled selected value>
                        {" "}
                        -- בחר --{" "}
                      </option>

                      {auths &&
                        auths.map((auth) => <option>{auth.NickName}</option>)}
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className="FUDcolumn">
              <div className="fudunit">
                <div className="fudTitle">יחידה: </div>
                <div className="fudContent">
                  <select
                    className="fudinput"
                    id="form-unit"
                    type="text"
                    placeholder="יחידה"
                    defaultValue={funit}
                    value={funit}
                    onChange={(e) => fsetUnit(e.target.value)}
                  >
                    <option disabled selected value>
                      {" "}
                      -- בחר --{" "}
                    </option>
                    <option> 506 </option>
                    <option> 509 </option>
                    <option> 528 </option>
                  </select>
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">סוג הצבה: </div>
                <div className="fudContent">
                  <select
                    className="fudinput"
                    id="form-addressline"
                    type="text"
                    placeholder="סוג הצבה"
                    defaultValue={fsoogHatsava}
                    value={fsoogHatsava}
                    onChange={(e) => fsetSoogHatsava(e.target.value)}
                  >
                    <option disabled selected value>
                      {" "}
                      -- בחר --{" "}
                    </option>
                    <option> סדיר </option>
                    <option> הצ"ח </option>
                    <option> מילואים </option>
                  </select>
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">מסלול: </div>
                <div className="fudContent">
                  <select
                    className="fudinput"
                    id="form-maslool"
                    type="text"
                    placeholder="מסלול"
                    defaultValue={fmaslool}
                    value={fmaslool}
                    onChange={(e) => fsetMaslool(e.target.value)}
                  >
                    <option disabled selected value>
                      {" "}
                      -- בחר --{" "}
                    </option>
                    <option> משימה </option>
                    <option> תעבורה </option>
                    <option> ורסטילי </option>
                    <option> הכשרה </option>
                  </select>
                </div>
              </div>

              <br />

              <div className="fudunit">
                <div className="fudTitle">דרג מקצועי: </div>
                <div className="fudContent">
                  <select
                    className="fudinput"
                    id="form-dereg"
                    type="text"
                    placeholder="דרג"
                    defaultValue={fdereg}
                    value={fdereg}
                    onChange={(e) => fsetDereg(e.target.value)}
                  >
                    <option disabled selected value>
                      {" "}
                      -- בחר --{" "}
                    </option>{" "}
                    <option> א' </option>
                    <option> ב' </option>
                    <option> ג' </option>
                    <option> ד' </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="FUD" style={{ paddingRight: "20%" }}>
            {user && (user.Role === "DIRECT" || user.Role === "AUTHCO") && (
              <div className="FUDcolumn30">
                <br />
                <div className="fudunit">
                  <div className="fudTitles">מקצוע: </div>
                  <div className="fudContent">
                    <select
                      className="fudinput"
                      id="form-prof"
                      type="text"
                      placeholder="מקצוע"
                      defaultValue={prof}
                      value={prof}
                      onChange={(e) => setprof(e.target.value)}
                    >
                      <option disabled selected value>
                        {" "}
                        -- בחר --{" "}
                      </option>

                      <option>בקרה</option>
                      <option>פיקוח</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            {user && (user.Role === "DIRECT" || user.Role === "AUTHCO") && (
              <div className="FUDcolumn30">
                <br />
                <div className="fudunit">
                  <div className="fudTitles">אוכלוסייה: </div>
                  <div className="fudContent">
                    <select
                      className="fudinput"
                      id="form-u"
                      type="text"
                      placeholder="אוכלוסייה"
                      defaultValue={u}
                      value={u}
                      onChange={(e) => setu(e.target.value)}
                    >
                      <option disabled selected value>
                        {" "}
                        -- בחר --{" "}
                      </option>

                      <option>קצינים</option>
                      <option>חוגרים</option>
                    </select>
                  </div>
                </div>
                <br />
              </div>
            )}
          </div>
        </form>
        {user && (user.Role === "DIRECT" || user.Role === "AUTHCO") && (
          <div
            style={{
              border: "1px dashed red",
              paddingRight: "15px",
              paddingBottom: "14px",
            }}
          >
            <h2 style={{ color: "red", fontSize: "15pt" }}>שים לב!!!</h2>
            <h2 style={{ fontSize: "10pt", fontWeight: 350 }}>
              בשינוי <span style={{ fontWeight: 900 }}>"תפקיד"</span> למשתמש,
              הינך משנה את כלל הרשאות הצפייה והעריכה שלו. יש לנהוג במשנה זהירות!
            </h2>
            <h2 style={{ fontSize: "10pt", fontWeight: 350 }}>
              בשינוי <span style={{ fontWeight: 900 }}>"מפקד הכשרה"</span>{" "}
              למשתמש, הינך מאפשר למפקד ההכשרה המוגדר לצפות בכלל משובי ההדרכה
              (בלבד) של אותו משתמש (היסטוריה מלאה).
            </h2>
            <h2 style={{ fontSize: "10pt", fontWeight: 350 }}>
              בשינוי <span style={{ fontWeight: 900 }}>"מפקד גף"</span> או{" "}
              <span style={{ fontWeight: 900 }}>"מפקד יחידה"</span>, הינך מאפשר
              למפקד הגף/יחידה המוגדר לצפות בכלל משובי ההדרכה והחוו"דים המקצועיים
              המוזנים על אותו משתמש.
            </h2>
          </div>
        )}
        <br />
        <div className="fudupdatebuttondiv">
          <button className="fudupdatebutton" onClick={updatefud}>
            עדכן פרטים
          </button>
        </div>
      </div>
      {externalma && falg && (
        <h2 style={{ textAlign: "center" }}>
          הפרטים עודכנו, ניתן לסגור חלונית זו
        </h2>
      )}
      <br />
      <br />
      <br />
    </>
  ) : (
    <h2>
      טוען את הפרטים האישיים הקיימים מהשרת לעריכה... (אם אתה מספיק לקרוא את
      ההודעה הזאת אז ייתכן שיש תקלה בשרת או בתקשורת איתו)
    </h2>
  );
}

export default UpdateFUD;
