import React, { useEffect, useState } from "react";
import GradeRow from "./GradesTable/GradeRow";
import Exp from "../../../global/charts/Exp";

export default function GradesTable(props) {
  const [shown4, setShown4] = useState(false);
  const [shown5, setShown5] = useState(false);
  const [shown6, setShown6] = useState(false);
  const [shown7, setShown7] = useState(false);
  const [shown8, setShown8] = useState(false);
  const [shown55, setShown55] = useState(false);
  const [shown9, setShown9] = useState(false);
  const [shown10, setShown10] = useState(false);
  const [shown11, setShown11] = useState(false);
  const [shown12, setShown12] = useState(false);

  function show4() {
    setShown4(true);
  }
  function show5() {
    setShown5(true);
  }
  function show6() {
    setShown6(true);
  }
  function show7() {
    setShown7(true);
  }
  function show8() {
    setShown8(true);
  }
  function show55() {
    setShown55(true);
  }
  function show9() {
    setShown9(true);
  }
  function show10() {
    setShown10(true);
  }
  function show11() {
    setShown11(true);
  }
  function show12() {
    setShown12(true);
  }

  function nshow4() {
    setShown4(false);
  }
  function nshow5() {
    setShown5(false);
  }
  function nshow6() {
    setShown6(false);
  }
  function nshow7() {
    setShown7(false);
  }
  function nshow8() {
    setShown8(false);
  }
  function nshow55() {
    setShown55(false);
  }
  function nshow9() {
    setShown9(false);
  }
  function nshow10() {
    setShown10(false);
  }
  function nshow11() {
    setShown11(false);
  }
  function nshow12() {
    setShown12(false);
  }

  return (
    <>
      <table className="otable">
        <tbody>
          <tr className="tr">
            <th className="oth" colSpan="2">
              הערכה ע״פ מיומנויות הבקרה
            </th>
            <th className="oth" colSpan="7">
              {"נכשל < - -  - > ממוצע < - -  - > מצוין"}
            </th>
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" rowSpan="7">
              למידה וקוגניציה
            </th>

            <th className="oth" onMouseOver={show4} onMouseLeave={nshow4}>
              מיצוי אמל״ח
              {shown4 && (
                <Exp
                  isShown={shown4}
                  hesber1="שימוש ומיצוי מלא של אמל״ח הליבה"
                  hesber2="תמונ״א | קשר | גלקסיה"
                  hesber3=""
                />
              )}
            </th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c1}
              criteria="C1"
              who="C1"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show5} onMouseLeave={nshow5}>
              שאיבת מידע
              {shown5 && (
                <Exp
                  isShown={shown5}
                  hesber1="שאיבה והיתוך מידע"
                  hesber2="מערכות | מודיעין | קשר | זירה מבצעית"
                  hesber3=""
                />
              )}
            </th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c2}
              criteria="C2"
              who="C2"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show6} onMouseLeave={nshow6}>
              קריאה ועיבוד תמונ״א
              {shown6 && (
                <Exp
                  isShown={shown6}
                  hesber1="קריאה ועיבוד תמונ״א"
                  hesber2="גיאומטריה | מרחב וזמן | סיווג"
                  hesber3=""
                />
              )}
            </th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c3}
              criteria="C3"
              who="C3"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show7} onMouseLeave={nshow7}>
              שיטת עבודה
              {shown7 && (
                <Exp
                  isShown={shown7}
                  hesber1="שיטת עבודה סדורה"
                  hesber2="בד״ח | צוות | רוחבית"
                  hesber3=""
                />
              )}
            </th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c4}
              criteria="C4"
              who="C4"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show8} onMouseLeave={nshow8}>
              נדב״ר
              {shown8 && (
                <Exp
                  isShown={shown8}
                  hesber1="נדב״ר תכליתי חודר תודעה"
                  hesber2="טונציה | תו״ל תקשורת"
                  hesber3=""
                />
              )}
            </th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c5}
              criteria="C5"
              who="C5"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show55} onMouseLeave={nshow55}>
              העברת מידע
              {shown55 && (
                <Exp
                  isShown={shown55}
                  hesber1="העברת מידע באופן מדויק ומתוזמן"
                  hesber2="מבצעים | בקרה | שליטה"
                  hesber3=""
                />
              )}
            </th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c55}
              criteria="C55"
              who="C55"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show9} onMouseLeave={nshow9}>
              מודעות מצבית
              {shown9 && (
                <Exp
                  isShown={shown9}
                  hesber1="מודעות מצבית, תגובה והתמודדות"
                  hesber2="כשלון | עומס | מנטליות"
                  hesber3=""
                />
              )}
            </th>
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
              קבלת החלטות
            </th>
            <th className="oth" onMouseOver={show10} onMouseLeave={nshow10}>
              קבלת החלטות
              {shown10 && (
                <Exp
                  isShown={shown10}
                  hesber1="קבלת החלטות בקבועי זמן קצרים ובמידע חסר"
                  hesber2="תעדוף | סימון מידע קריטי | מחוץ למרחב האחריות"
                  hesber3=""
                />
              )}
            </th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c7}
              criteria="C7"
              who="C7"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show11} onMouseLeave={nshow11}>
              בקרת תהליך וביצוע
              {shown11 && (
                <Exp
                  isShown={shown11}
                  hesber1="בקרת תהליך ובקרה על ביצוע"
                  hesber2="פקודה | מטרה | משימה"
                  hesber3=""
                />
              )}
            </th>
            <GradeRow
              setnewgrade={props.setnewgrade}
              allDATA={props.allDATA}
              grade={props.c8}
              criteria="C8"
              who="C8"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show12} onMouseLeave={nshow12}>
              הפקדת לקחים בזמ״א
              {shown12 && (
                <Exp
                  isShown={shown12}
                  hesber1="הפקת לקחים והטמעתם בזמ״א"
                  hesber2="אישי | עמדה | מכלול"
                  hesber3=""
                />
              )}
            </th>
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
