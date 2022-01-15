import React, { useState } from "react";
import Report from "./footer/Report";
import Suggest from "./footer/Suggest";
import SuccessMessage from "../src/components/messages/SuccessMessage";

export default function Footer() {
  const [reportB, setReportB] = useState(false);
  const [suggestB, setSuggestB] = useState(false);

  const [successMessager, setSuccessMessager] = useState(null);

  return (
    <div className="footerdiv">
      {!reportB && !suggestB && (
        <p className="footer">
          חווה בעיה במערכת?
          <button
            className="justALinkNotButton"
            onClick={() => {
              setReportB(true);
            }}
          >
            <span className="justALinkLink">דווח עליה כאן</span>
          </button>
        </p>
      )}
      {!suggestB && !reportB && (
        <p className="footer">
          חושב שאפשר לשפר משהו במערכת?
          <button
            className="justALinkNotButton"
            onClick={() => {
              setSuggestB(true);
            }}
          >
            <span className="justALinkLink">הצע את השיפור כאן</span>
          </button>
        </p>
      )}
      <div className="footerdivitself">
        {reportB && <Report suc={setSuccessMessager} whendone={setReportB} />}
        {suggestB && (
          <Suggest suc={setSuccessMessager} whendone={setSuggestB} />
        )}
        {successMessager && (
          <SuccessMessage
            message={successMessager}
            clear={() => setSuccessMessager(null)}
          />
        )}
        <br />
        <br />
        <br />
        <div className="version">גרסה 0.5</div>
        <br />
        <br />
        <div className="author">
          <a href="mailto:s8370716@iaf.idf.il?subject=%D7%98%D7%A8%D7%A7%20%D7%90%D7%99%D7%A9%D7%99">
            מפתח: מיכאל נסייר
          </a>
        </div>
        <br />
        <div className="author">
          <a href="mailto:s8041154@iaf.idf.il?subject=%D7%98%D7%A8%D7%A7%20%D7%90%D7%99%D7%A9%D7%99">
            קפ"ט: חן מארק
          </a>
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br /> <br /> <br />
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
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
    </div>
  );
}
