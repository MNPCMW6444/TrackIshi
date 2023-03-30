import React from "react";

function OpinionDetails(props) {
  return (
    <table className="otable">
      <tbody>
        <tr className="otr">
          <th className="oth">מספר אישי</th>
          <th className="oth">דרגה</th>
          <th className="oth">שם משפחה</th>
          <th className="oth">שם פרטי</th>
          <th className="oth">האם נחתם?</th>
        </tr>
        <tr className="otr">
          <td className="otd">{props.wascrewm && props.wascrewm.MA}</td>
          <td className="otd">{props.wascrewm && props.wascrewm.Rank}</td>
          <td className="otd">{props.wascrewm && props.wascrewm.LastName}</td>
          <td className="otd">{props.wascrewm && props.wascrewm.FirstName}</td>
          <td className="otd">
            <select
              className="opinionInput"
              value={props.signed}
              onChange={(e) => props.fsigned(e.target.value)}
            >
              <option disabled selected value>
                {" "}
                -בחר-{" "}
              </option>
              <option key={"לא"} value={"לא"}>
                {"לא"}
              </option>
              <option key={"כן"} value={"כן"}>
                {"כן"}
              </option>
            </select>
          </td>
        </tr>
        <tr className="otr">
          <th className="oth">תקופה</th>
          <th className="oth">תאריך מילוי</th>
          <th className="oth">מס' חודשים תחת פיקודך</th>
          <th className="oth" colSpan="2">
            תפקיד / נע''ת
          </th>
        </tr>
        <tr className="otr">
          <td className="otd">
            <input
              className="opinionInput"
              defaultValue={props.wasTkufa}
              placeholder="בפורמט  X.XXXX"
              value={props.tkufa}
              onChange={(e) => props.ftkufa(e.target.value)}
            ></input>
          </td>
          <td className="otd">
            <input
              /* type="date" */
              className="opinionInput"
              defaultValue={props.wasfilldate}
              value={props.filldate}
              placeholder="בפורמט  DD/MM/YYYY"
              onChange={(e) => props.ffilldate(e.target.value)}
            ></input>
          </td>
          <td className="otd">
            {" "}
            <input
              className="opinionInput"
              defaultValue={props.wasmonthsno}
              value={props.monthsno}
              placeholder="לדוגמא: 11"
              onChange={(e) => props.fmonthsno(e.target.value)}
            ></input>
          </td>
          <td className="otd" colSpan="2">
            <input
              className="opinionInput"
              defaultValue={props.wasposition}
              value={props.position}
              placeholder='לדוגמא רש"צ מערכות'
              onChange={(e) => props.fposition(e.target.value)}
            ></input>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default OpinionDetails;
