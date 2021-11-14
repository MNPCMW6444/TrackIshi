import React from "react";
import GradeRow from "./GradesTable/GradeRow";

export default function FgradeTable(props) {
  return (
    <table className="otable">
      <tbody>
        <tr className="otr">
          <th className="oth">נכשל</th>
          <th className="oth">נמוך</th>
          <th className="oth">מתחת לממוצע</th>
          <th className="oth">ממוצע</th>
          <th className="oth">מעל הממוצע</th>
          <th className="oth">טוב מאוד</th>
          <th className="oth">מצוין</th>
        </tr>
        <tr className="rowWithHistory">
          <GradeRow
            grade={props.grade}
            setnewgrade={props.setnewgrade}
            criteria="M1"
            allDATA={props.allDATA}
            who="final"
          />
        </tr>
      </tbody>
    </table>
  );
}
