import React from "react";
import GradeRow from "./GradesTable/GradeRow";

export default function GradesTable(props) {
  return (
    <table className="otable">
      <tbody>
        <tr className="otr">
          <th className="oth" colSpan="2">
            משוב אישי(כהערכה כוללת)
          </th>
          <th className="oth" colSpan="2">
            נכשל
          </th>
          <th className="oth" colSpan="3">
            ממוצע
          </th>
          <th className="oth" colSpan="2">
            מצוין
          </th>
        </tr>
        <tr className="otr">
          <th className="oth" rowSpan="6">
            למידה וקוגניציה
          </th>
          <th className="oth">למידה</th>
          <GradeRow grade={props.c1} />
        </tr>
        <tr className="otr">
          <th className="oth">תכנון</th>
          <GradeRow grade={props.c2} />
        </tr>
        <tr className="otr">
          <th className="oth">תפיסה מרחבית</th>
          <GradeRow grade={props.c3} />
        </tr>
        <tr className="otr">
          <th className="oth">חלק"ש</th>
          <GradeRow grade={props.c4} />
        </tr>
        <tr className="otr">
          <th className="oth">תקשורת</th>
          <GradeRow grade={props.c5} />
        </tr>
        <tr className="otr">
          <th className="oth">עומס</th>
          <GradeRow grade={props.c6} />
        </tr>
        <tr className="otr">
          <th className="oth" rowSpan="3">
            יכולות פיקוד וניהול
          </th>
          <th className="oth">קבלת החלטות</th>
          <GradeRow grade={props.c7} />
        </tr>
        <tr className="otr">
          <th className="oth">הפעלה</th>
          <GradeRow grade={props.c8} />
        </tr>
        <tr className="otr">
          <th className="oth">תחקור</th>
          <GradeRow grade={props.c9} />
        </tr>
      </tbody>
    </table>
  );
}
