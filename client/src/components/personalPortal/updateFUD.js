import Axios from "axios";
import React, { useContext, useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import domain from "../../util/domain";
import ErrorMessage from "../misc/ErrorMessage";
import "../auth/AuthForm.scss";

function UpdateFUD() {
  const [oldFUD, setOldFUD] = useState();
  const [firstname, setFirstname] = useState("שם פרטי");
  const [lastname, setLastname] = useState("שם משפחה");
  const [nickname, setNickname] = useState("כינוי");
  const [courseno, setCourseno] = useState("מספר קורס");
  const [birthdate, setBirthdate] = useState("תאריך לידה");
  const [email, setEmail] = useState("כתובת דואר אלקטרוני");
  const [mainphone, setMainphone] = useState("מספר טלפון");
  const [emergencyphone, setEmergencyphone] = useState("מספר טלפון נוסף למקרה חירום");
  const [addresscity, setAddresscity] = useState("עיר מגורים");
  const [addressline, setAddressline] = useState("כתובת מגורים");
  const [rank, setRank] = useState("דרגה");

  const [errorMessage, setErrorMessage] = useState(null);

  const { user } = useContext(UserContext);

  useEffect( () => {
    const readFUD = async () => {
      const getFUD = async () => {
        console.log("calls");
        const FUDRes = await Axios.get(`${domain}/auth/getFullDetails`);
        console.log("finished");
        setOldFUD(FUDRes.data);
      }
      await getFUD();
      console.log("oldFUD IS "+oldFUD);
      if (oldFUD)
      {
        try {setFirstname(oldFUD.FirstName);} catch (err){console.log(err);}
        try {setLastname(oldFUD.Lastname);} catch (err){console.log(err);}
        try {setNickname(oldFUD.Nickname);} catch (err){console.log(err);}
        try {setCourseno(oldFUD.Courseno);} catch (err){console.log(err);}
        try {setBirthdate(oldFUD.Birthdate);} catch (err){console.log(err);}
        try {setEmail(oldFUD.Email);} catch (err){console.log(err);}
        try {setMainphone(oldFUD.Mainphone);} catch (err){console.log(err);}
        try {setEmergencyphone(oldFUD.Emergencyphone);} catch (err){console.log(err);}
        try {setAddresscity(oldFUD.Addresscity);} catch (err){console.log(err);}
        try {setAddressline(oldFUD.Addressline);} catch (err){console.log(err);}
        try {setAddressline(oldFUD.Addressline);} catch (err){console.log(err);}
      }
      else
        console.log("ERROR GETTING DETAILS");
    }
    readFUD();
  }, []);

  async function updatefud(e) {
    e.preventDefault();

    const updateFUDData = {
      firstname: firstname,
      lastname: lastname,
      nickname: nickname,
      courseno: courseno,
      birthdate: birthdate,
      email: email,
      mainphone: mainphone,
      emergencyphone: emergencyphone,
      addresscity: addresscity,
      addressline: addressline,
      rank: rank
    };

    try {
      await Axios.put(`${domain}/auth/updateFullDetails`, updateFUDData);
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
      }
      return;
    }

  }

  return (
    user ? <div className="update-form">
      <h2>עדכון פרטים אישיים למספר אישי {user}</h2>
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          clear={() => setErrorMessage(null)}
        />
      )}
      <form className="form" onSubmit={updatefud}>
        <label htmlFor="form-firstname">שם פרטי</label>
        <input
          id="form-firstname"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="form-lastname">שם משפחה</label>
        <input
          id="form-lastname"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <label htmlFor="form-nickname">כינוי</label>
        <input
          id="form-nickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <label htmlFor="form-courseno">מספר קורס</label>
        <input
          id="form-courseno"
          type="number"
          value={courseno}
          onChange={(e) => setCourseno(e.target.value)}
        />
        <label htmlFor="form-birthdate">תאריך לידה</label>
        <input
          id="form-birthdate"
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <label htmlFor="form-email">כתובת דואר אלקטרוני</label>
        <input
          id="form-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="form-mainphone">מספר טלפון</label>
        <input
          id="form-mainphone"
          type="text"
          value={mainphone}
          onChange={(e) => setMainphone(e.target.value)}
        />
        <label htmlFor="form-emergencyphone">מספר טלפון נוסף למקרה חירום</label>
        <input
          id="form-emergencyphone"
          type="text"
          value={emergencyphone}
          onChange={(e) => setEmergencyphone(e.target.value)}
        />
        <label htmlFor="form-addresscity">עיר מגורים</label>
        <input
          id="form-addresscity"
          type="text"
          value={addresscity}
          onChange={(e) => setAddresscity(e.target.value)}
        />
        <label htmlFor="form-addressline">כתובת מגורים</label>
        <input
          id="form-addressline"
          type="text"
          value={addressline}
          onChange={(e) => setAddressline(e.target.value)}
        />
        <label htmlFor="form-rank">דרגה</label>
        <input
          id="form-rank"
          type="text"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
        />
        <button className="btn-submit" type="submit">
          עדכן פרטים
        </button>
      </form>
    </div>
    : <p>please login</p>
  );
}

export default UpdateFUD;