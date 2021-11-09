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
          <td className="otd">{props.crewm && props.crewm.MA}</td>
          <td className="otd">{props.crewm && props.crewm.Rank}</td>
          <td className="otd">{props.crewm && props.crewm.LastName}</td>
          <td className="otd">{props.crewm && props.crewm.FirstName}</td>
          <td className="otd">{props.signed}</td>
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
          <td className="otd">{props.tkufa}</td>
          <td className="otd">{props.filldate}</td>
          <td className="otd">{props.monthsno}</td>
          <td className="otd" colSpan="2">
            {props.position}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default OpinionDetails;
