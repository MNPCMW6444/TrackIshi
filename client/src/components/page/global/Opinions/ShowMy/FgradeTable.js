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
            isGray={props.isGray}
            grade={props.grade}
            criteria="M1"
            allDATA={props.allDATA}
            avgs={props.avgs}
          />
        </tr>
      </tbody>
    </table>
  );
}
