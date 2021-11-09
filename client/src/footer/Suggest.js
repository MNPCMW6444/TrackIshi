import Axios from "axios";
import React, { useEffect, useState } from "react";
import domain from "../util/domain";
import ErrorMessage from "../components/messages/ErrorMessage";

function Suggest(props) {
  const [ready, setReady] = useState(false);

  const [fname, setfName] = useState();
  const [name, setName] = useState();
  const [fcontent, setfContent] = useState();

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getFUD = async () => {
      const FUDRes = await Axios.get(`${domain}/user/getFullDetails`);
      try {
        setfName(FUDRes.data.NickName);
        setName(FUDRes.data.NickName);
      } catch (err) {
        console.log(err);
      }
      setReady(true);
    };
    getFUD();
  }, []);

  async function sendSuggest(e) {
    e.preventDefault();

    if (!fname || fname === "התחבר לאיתור שם אוטומטי" || !fcontent)
      setErrorMessage("חסר שם או פירוט");

    const suggestDetails = {
      Name: fname,
      Content: fcontent,
    };

    try {
      await Axios.post(`${domain}/footer/suggest`, suggestDetails);
      props.suc("ההצעה נשלחה בהצלחה!");
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

  async function cancel(e) {
    e.preventDefault();
    const done = props.whendone;
    done(false);
    return;
  }

  return (
    <>
      <div>
        <div className="fudheaderdiv">
          <h3 className="fudheader">הצע שיפור:</h3>
        </div>
        <br />
        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            clear={() => setErrorMessage(null)}
          />
        )}
        <form>
          <div className="footerlabel">שם המציע: </div>
          {ready ? (
            <div className="footerinput">
              <input
                className="footerinputshort"
                id="form-name"
                type="text"
                placeholder="שם המציע"
                defaultValue={ready ? name : "התחבר למילוי שם אוטומטי"}
                value={fname}
                onChange={(e) => setfName(e.target.value)}
              />{" "}
            </div>
          ) : (
            <div className="footerinput">
              <input
                className="footerinputshort"
                id="form-name"
                type="text"
                placeholder="שם המציע"
                defaultValue={ready ? name : "התחבר למילוי שם אוטומטי"}
                value={fname}
                onChange={(e) => setfName(e.target.value)}
              />{" "}
            </div>
          )}
          <br />
          <br />
          <div className="footerlabel">פירוט ההצעה: </div>
          <div className="footerinput">
            <textarea
              className="footerinputlong"
              id="form-content"
              type="text"
              placeholder="פירוט ההצעה"
              value={fcontent}
              onChange={(e) => setfContent(e.target.value)}
            />{" "}
          </div>
        </form>
        <br />
        <br />
        <div className="footerbuttonwarapper">
          <div className="footersend">
            <button className="footersendbutton" onClick={sendSuggest}>
              שלח
            </button>
          </div>
          <div className="footercancel">
            <button className="footercancelbutton" onClick={cancel}>
              בטל
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {!ready && (
        <h5>
          טוען את השם שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז ייתכן
          שיש תקלה בשרת או בתקשורת איתו), בעקרון אעינת השם אינה הכרחית לשליחת
          הדיווח, ניתן להזין שם ידנית)
        </h5>
      )}
    </>
  );
}

export default Suggest;
