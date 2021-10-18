import React from "react";

function OpinionDetails(props) {

  return (
    <table><tbody>
        <tr>
            <th>
                מספר אישי
            </th>
            <th>
                דרגה
            </th>
            <th>
                שם משפחה
            </th>
            <th>
                שם פרטי
            </th>
            <th>
                האם נחתם?
            </th>
        </tr>
        <tr>
            <td>
                {props.crewm.MA}
            </td>
            <td>
                {props.crewm.Rank}
            </td>
            <td>
                {props.crewm.LastName}
            </td>
            <td>
                {props.crewm.FirstName}
            </td>
            <td>
                {props.signed}
            </td>
        </tr>
        <tr>
            <th>
                תקופה
            </th>
            <th>
                תאריך מילוי
            </th>
            <th>
                מס' חודשים תחת פיקודך
            </th>
            <th colSpan="2">
                תפקיד / נע''ת
            </th>
        </tr>
        <tr>
            <td>
                {props.tkufa}
            </td>
            <td>
                {props.filldate}
            </td>
            <td>
                {props.monthsno}
            </td>
            <td colSpan="2">
                {props.position}
            </td>
        </tr>
    </tbody></table>
  );
}

export default OpinionDetails;