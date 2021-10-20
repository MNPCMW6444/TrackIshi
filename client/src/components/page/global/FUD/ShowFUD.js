import Axios from "axios";
import React, { useEffect, useState} from "react";
import domain from "../../../../util/domain";

function ShowFUD() {

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
  const [ready, setReady] = useState(false);

  useEffect( () => {
    const getFUD = async () => {
      const FUDRes = await Axios.get(`${domain}/auth/getFullDetails`);
      try {setFirstname(FUDRes.data.FirstName);} catch (err){console.log(err);}
      try {setMa(FUDRes.data.MA);} catch (err){console.log(err);}
      try {setLastname(FUDRes.data.LastName);} catch (err){console.log(err);}
      try {setNickname(FUDRes.data.NickName);} catch (err){console.log(err);}
      try {setCourseno(FUDRes.data.CourseNo);} catch (err){console.log(err);}
      try {
        let finil = "DIDNOTDOWANAD";
        finil = (FUDRes.data.BirthDate).substring(0,10);
        const day = finil.substring(5,7)
        const month = finil.substring(8,10);
        const year= finil.substring(0,4);
        finil= day+"/"+month+"/"+year;
        setBirthdate(finil);
      } catch (err){console.log(err);}
      try {setEmail(FUDRes.data.Email);} catch (err){console.log(err);}
      try {setMainphone(FUDRes.data.MainPhone);} catch (err){console.log(err);}
      try {setEmergencyphone(FUDRes.data.EmergencyPhone);} catch (err){console.log(err);}
      try {setAddresscity(FUDRes.data.AddressCity);} catch (err){console.log(err);}
      try {setAddressline(FUDRes.data.AddressLine);} catch (err){console.log(err);}
      try {setRank(FUDRes.data.Rank);} catch (err){console.log(err);}
      setReady(true);
    }
    getFUD();
  }, []);

  return ready ? (
    <>
      <h3 className="h3FUD">פרטים אישיים:</h3>
      <br />
        <div className="FUD">
          <div className="column">
            <h4>מספר אישי: </h4><div>{ma}</div>
            <br />
            <h4>שם פרטי: </h4><div>{firstname}</div>
            <br />
            <h4>שם משפחה: </h4><div>{lastname}</div>
            <br />
            <h4>כינוי: </h4><div>{nickname}</div>
            <br />
            <h4>קורס: </h4><div>{courseno}</div>
            <br />
            <h4>תאריך לידה: </h4><div>{birthdate}</div>
            <br />
          </div>
          <div className="FUDcolumn">
            <h4>כתובת דואר אלקטרוני (אזרחית): </h4><div>{email}</div>
            <br />
            <h4>מספר טלפון: </h4><div>{mainphone}</div>
            <br />
            <h4>מספר טלפון נוסף למקרה חירום: </h4><div>{emergencyphone}</div>
            <br />
            <h4>עיר מוגרים: </h4><div>{addresscity}</div>
            <br />
            <h4>כתובת: </h4><div>{addressline}</div>
            <br />
            <h4>דרגה: </h4><div>{rank}</div>
            <br />
          </div>
        </div>
    </>):(<h2>טוען את הפרטים האישיים שלך מהשרת...</h2>
  );
}

export default ShowFUD;