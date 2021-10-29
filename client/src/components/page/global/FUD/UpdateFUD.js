import Axios from "axios";
import React, { useContext, useEffect, useState} from "react";
import UserContext from "../../../../context/UserContext";
import domain from "../../../../util/domain";
import ErrorMessage from "../../../messages/ErrorMessage";

function UpdateFUD(props) {
  const [ma, setMA] = useState();

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
  const [ready, setReady] = useState(false);


  const { user } = useContext(UserContext);

  const [ errorMessage, setErrorMessage ] = useState(null);

  useEffect( () => {
    const getFUD = async () => {
      const FUDRes = await Axios.get(`${domain}/user/getFullDetails`);
      try {setMA(FUDRes.data.MA);} catch (err){console.log(err);}
      try {setFirstname(FUDRes.data.FirstName);} catch (err){console.log(err);}
      try {setLastname(FUDRes.data.LastName);} catch (err){console.log(err);}
      try {setNickname(FUDRes.data.NickName);} catch (err){console.log(err);}
      try {setCourseno(FUDRes.data.CourseNo);} catch (err){console.log(err);}
      try {setBirthdate((FUDRes.data.BirthDate).substring(0,10));} catch (err){console.log(err);}
      try {setEmail(FUDRes.data.Email);} catch (err){console.log(err);}
      try {setMainphone(FUDRes.data.MainPhone);} catch (err){console.log(err);}
      try {setEmergencyphone(FUDRes.data.EmergencyPhone);} catch (err){console.log(err);}
      try {setAddresscity(FUDRes.data.AddressCity);} catch (err){console.log(err);}
      try {setAddressline(FUDRes.data.AddressLine);} catch (err){console.log(err);}
      try {setRank(FUDRes.data.Rank);} catch (err){console.log(err);}
      try {fsetFirstname(FUDRes.data.FirstName);} catch (err){console.log(err);}
      try {fsetLastname(FUDRes.data.LastName);} catch (err){console.log(err);}
      try {fsetNickname(FUDRes.data.NickName);} catch (err){console.log(err);}
      try {fsetCourseno(FUDRes.data.CourseNo);} catch (err){console.log(err);}
      try {fsetBirthdate((FUDRes.data.BirthDate).substring(0,10));} catch (err){console.log(err);}
      try {fsetEmail(FUDRes.data.Email);} catch (err){console.log(err);}
      try {fsetMainphone(FUDRes.data.MainPhone);} catch (err){console.log(err);}
      try {fsetEmergencyphone(FUDRes.data.EmergencyPhone);} catch (err){console.log(err);}
      try {fsetAddresscity(FUDRes.data.AddressCity);} catch (err){console.log(err);}
      try {fsetAddressline(FUDRes.data.AddressLine);} catch (err){console.log(err);}
      try {fsetRank(FUDRes.data.Rank);} catch (err){console.log(err);}
      setReady(true);
    }
    getFUD();
  }, []);

  async function updatefud(e) {
    e.preventDefault();
    const updateFUDData = {
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
      rank: frank
    };

    try {
      await Axios.put(`${domain}/user/updateFullDetails`, updateFUDData);
      props.suc("הפרטים עודכנו בהצלחה!");
      const done=props.whendone;
      done(false);
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
      }
      else
        console.log(err);
    }
    return;
  }

  

  return ready ? ( <>
    <div>
    <div className="fudheaderdiv"><h3 className="fudheader">עדכון פרטים אישיים למספר אישי {user.MA}:</h3></div><br />
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          clear={() => setErrorMessage(null)}
        />
      )}
      <form>
        <div className="FUD">
          <div className="FUDcolumn">
            <div className="fudunit">
              <div className="fudTitle">מספר אישי: </div>
              <div className="fudContent">{ma}</div>
            </div>
            <br />
            <div className="fudunit">
                <div className="fudTitle">מספר קורס: </div>
                <div className="fudContent">
                  <input className="fudinput"
                    id="form-courseno"
                    type="number"
                    placeholder="מספר קורס"
                    defaultValue={courseno}
                    value={fcourseno}
                    onChange={(e) => fsetCourseno(e.target.value)}
                  />
                </div>
            </div>
            <br/>
            <div className="fudunit">
              <div className="fudTitle">תאריך לידה: </div>
              <div className="fudContent">
                <input className="fudinput"
                  id="form-birthdate"
                  type="date"
                  placeholder="תאריך לידה"
                  defaultValue={birthdate}
                  value={fbirthdate}
                  onChange={(e) => fsetBirthdate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="FUDcolumn">
            <div className="fudunit">
              <div className="fudTitle">שם פרטי: </div>
              <div className="fudContent">
                <input className="fudinput"
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
                <input className="fudinput"
                  id="form-lastname"
                  type="text"
                  placeholder="שם משפחה"
                  defaultValue={lastname}
                  value={flastname}
                  onChange={(e) => fsetLastname(e.target.value)}
                />
              </div>
            </div>
            <br/>
            <div className="fudunit">
              <div className="fudTitle">כינוי: </div>
              <div className="fudContent">
                <input className="fudinput"
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
            <br />
          </div>
          <div className="FUDcolumn">
            <div className="fudunit">
              <div className="fudTitle">מספר טלפון: </div>
              <div className="fudContent">
                <input className="fudinput"
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
              <div className="fudTitle">מספר טלפון למקרה חירום: </div>
              <div className="fudContent">
                <input className="fudinput"
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
                <div className="fudTitle">כתובת דוא"ל אזרחי:</div>
                <div className="fudContent">
                  <input className="fudinput"
                    id="form-email"
                    type="email"
                    placeholder="כתובת דואר אלקטרוני (אזרחית)"
                    defaultValue={email}
                    value={femail}
                    onChange={(e) => fsetEmail(e.target.value)}
                  />
                </div>
            </div>
          </div>
          <div className="FUDcolumn">
            <div className="fudunit">
              <div className="fudTitle">עיר מגורים: </div>
              <div className="fudContent">
                <input className="fudinput"
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
                <input className="fudinput"
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
                <input className="fudinput"
                  id="form-rank"
                  type="text"
                  placeholder="דרגה"
                  defaultValue={rank}
                  value={frank}
                  onChange={(e) => fsetRank(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <br/>
      <br/>
      <div className="fudupdatebuttondiv"><button className="fudupdatebutton" onClick={updatefud}>
        עדכן פרטים
      </button></div>
    </div><br/><br/><br/></>):(<h2>טוען את הפרטים האישיים הקיימים שלך מהשרת...</h2>
    
  );
}

export default UpdateFUD;