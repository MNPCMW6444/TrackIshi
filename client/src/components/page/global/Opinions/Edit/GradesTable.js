import React from "react";
import GradeRow from "./GradesTable/GradeRow";

export default function GradesTable(props) {
  return (
    <>
      <table className="otable">
        <tbody>
          <tr className="tr">
            <th className="oth" colSpan="2">
              משוב אישי (כהערכה כוללת)
            </th>
            <th className="oth" colSpan="7">
              {"נכשל < - -  - > ממוצע < - -  - > מצוין"}
            </th>
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" rowSpan="6">
              למידה וקוגניציה
            </th>
            <th className="oth">למידה</th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c1}
              criteria="C1"
              who="C1"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth">תכנון</th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c2}
              criteria="C2"
              who="C2"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth">תפיסה מרחבית</th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c3}
              criteria="C3"
              who="C3"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth">חלק"ש</th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c4}
              criteria="C4"
              who="C4"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth">תקשורת</th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c5}
              criteria="C5"
              who="C5"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth">עומס</th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c6}
              criteria="C6"
              who="C6"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" rowSpan="3">
              יכולות פיקוד וניהול
            </th>
            <th className="oth">קבלת החלטות</th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c7}
              criteria="C7"
              who="C7"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth">הפעלה</th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c8}
              criteria="C8"
              who="C8"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth">תחקור</th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c9}
              criteria="C9"
              who="C9"
            />
          </tr>
        </tbody>
      </table>
    </>
  );
}
