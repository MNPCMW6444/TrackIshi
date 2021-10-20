import Axios from "axios";
import React, { useContext, useEffect, useState} from "react";
import UserContext from "../../../../context/UserContext";
import domain from "../../../../util/domain";
import ErrorMessage from "../../misc/ErrorMessage";

function UpdateFUD(props) {
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
      const FUDRes = await Axios.get(`${domain}/auth/getFullDetails`);
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
      await Axios.put(`${domain}/auth/updateFullDetails`, updateFUDData);
      props.suc("good");
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

  

  return ready ? (
    <div className="update-form">
      <h3 className="h3FUDp">עדכון פרטים אישיים למספר אישי {user}:</h3><br />
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          clear={() => setErrorMessage(null)}
        />
      )}
      <form classNameName="form" onSubmit={updatefud}>
        <div className="FUDp">
          <div className="columnp">
            <label htmlFor="form-firstname">שם פרטי</label>
            <input
              id="form-firstname"
              type="text"
              placeholder="שם פרטי"
              defaultValue={firstname}
              value={ffirstname}
              onChange={(e) => fsetFirstname(e.target.value)}
            />
            <label htmlFor="form-lastname">שם משפחה</label>
            <input
              id="form-lastname"
              type="text"
              placeholder="שם משפחה"
              defaultValue={lastname}
              value={flastname}
              onChange={(e) => fsetLastname(e.target.value)}
            />
            <label htmlFor="form-nickname">כינוי</label>
            <input
              id="form-nickname"
              type="text"
              placeholder="כינוי"
              defaultValue={nickname}
              value={fnickname}
              onChange={(e) => fsetNickname(e.target.value)}
            />
            <label htmlFor="form-courseno">מספר קורס</label>
            <input
              id="form-courseno"
              type="number"
              placeholder="מספר קורס"
              defaultValue={courseno}
              value={fcourseno}
              onChange={(e) => fsetCourseno(e.target.value)}
            />
            <label htmlFor="form-birthdate">תאריך לידה</label>
            <input
              id="form-birthdate"
              type="date"
              placeholder="תאריך לידה"
              defaultValue={birthdate}
              value={fbirthdate}
              onChange={(e) => fsetBirthdate(e.target.value)}
            />
            <label htmlFor="form-email">כתובת דואר אלקטרוני (אזרחית)</label>
            <input
              id="form-email"
              type="email"
              placeholder="כתובת דואר אלקטרוני (אזרחית)"
              defaultValue={email}
              value={femail}
              onChange={(e) => fsetEmail(e.target.value)}
            />
          </div>
          <div className="FUDcolumnp">
            <label htmlFor="form-mainphone">מספר טלפון</label>
            <input
              id="form-mainphone"
              type="text"
              placeholder="מספר טלפון"
              defaultValue={mainphone}
              value={fmainphone}
              onChange={(e) => fsetMainphone(e.target.value)}
            />
            <label htmlFor="form-emergencyphone">מספר טלפון נוסף למקרה חירום</label>
            <input
              id="form-emergencyphone"
              type="text"
              placeholder="מספר טלפון נוסף למקרה חירום"
              defaultValue={emergencyphone}
              value={femergencyphone}
              onChange={(e) => fsetEmergencyphone(e.target.value)}
            />
            <label htmlFor="form-addresscity">עיר מגורים</label>
            <input
              id="form-addresscity"
              type="text"
              placeholder="עיר מגורים"
              defaultValue={addresscity}
              value={faddresscity}
              onChange={(e) => fsetAddresscity(e.target.value)}
            />
            <label htmlFor="form-addressline">כתובת מגורים</label>
            <input
              id="form-addressline"
              type="text"
              placeholder="כתובת מגורים"
              defaultValue={addressline}
              value={faddressline}
              onChange={(e) => fsetAddressline(e.target.value)}
            />
            <label htmlFor="form-rank">דרגה</label>
            <input
              id="form-rank"
              type="text"
              placeholder="דרגה"
              defaultValue={rank}
              value={frank}
              onChange={(e) => fsetRank(e.target.value)}
            />
            <br />
            <button className="btn-submit" type="submit">
              עדכן פרטים
            </button>
          </div>
        </div>
      </form>
    </div>):(<h2>טוען את הפרטים האישיים הקיימים שלך מהשרת...</h2>
  );
}

export default UpdateFUD;