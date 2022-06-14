import React, { useEffect, useState } from "react";
import GradeRow from "./GradesTable/GradeRow";
import Exp from "../../../global/charts/Exp";

export default function GradesTable(props) {
  const [shown4, setShown4] = useState(false);
  const [shown5, setShown5] = useState(false);
  const [shown6, setShown6] = useState(false);
  const [shown7, setShown7] = useState(false);
  const [shown8, setShown8] = useState(false);
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
            <th className="oth" onMouseOver={show4} onMouseLeave={nshow4}>
              למידה
              {shown4 && (
                <Exp
                  isShown={shown4}
                  hesber1="הטמעת הלמידה ותפעול מערכות"
                  hesber2="יכולת ללמוד תכנים מקצועיים (ידע מקצועי), מערכות טכנולוגיות"
                  hesber3="ואמצעי לחימה (תפעול מערכות) כמו גם להפנים מידע רב וליישמם"
                />
              )}
            </th>
            <GradeRow
              isGray={props.isGray}
              allDATA={props.allDATA}
              avgs={props.avgs}
              grade={props.c1}
              criteria="C1"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show5} onMouseLeave={nshow5}>
              תכנון
              {shown5 && (
                <Exp
                  isShown={shown5}
                  hesber1="יכולת תכנון, ניתוח ועיבוד מידע"
                  hesber2="התמקדות בעיקר, סינון מידע שאינו רלוונטי למשימה, חשיבה קדימה"
                  hesber3="ותכנון משימות תוך גזירת משמעויות והסקת מסקנות בקבועי זמן קצרים"
                />
              )}
            </th>
            <GradeRow
              isGray={props.isGray}
              allDATA={props.allDATA}
              avgs={props.avgs}
              grade={props.c2}
              criteria="C2"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show6} onMouseLeave={nshow6}>
              תפיסה מרחבית
              {shown6 && (
                <Exp
                  isShown={shown6}
                  hesber1="תפיסה מרחבית"
                  hesber2="יכולת לזהות, לתפוס ולעבד מידע הנוגע לצורה"
                  hesber3="ולמיקום של גירויים במרחב האווירי"
                />
              )}
            </th>
            <GradeRow
              isGray={props.isGray}
              allDATA={props.allDATA}
              avgs={props.avgs}
              grade={props.c3}
              criteria="C3"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show7} onMouseLeave={nshow7}>
              חלק"ש
              {shown7 && (
                <Exp
                  isShown={shown7}
                  hesber1="חלוקת קשב"
                  hesber2="חלוקת קשב ומשאבים בין מספר גורמים שונים"
                  hesber3="תחת עומס ולחץ של זמן, זיהוי הגירויים הרלוונטיים"
                />
              )}
            </th>
            <GradeRow
              isGray={props.isGray}
              allDATA={props.allDATA}
              avgs={props.avgs}
              grade={props.c4}
              criteria="C4"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show8} onMouseLeave={nshow8}>
              תקשורת
              {shown8 && (
                <Exp
                  isShown={shown8}
                  hesber1="תקשורת והעברת מסרים"
                  hesber2="כושר ביטוי גבוה ויכולת להעביר"
                  hesber3="מסרים באופן ברור, תכליתי ואסרטיבי"
                />
              )}
            </th>
            <GradeRow
              isGray={props.isGray}
              allDATA={props.allDATA}
              avgs={props.avgs}
              grade={props.c5}
              criteria="C5"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show9} onMouseLeave={nshow9}>
              עומס
              {shown9 && (
                <Exp
                  isShown={shown9}
                  hesber1="התמודדות עם עומס ולחץ"
                  hesber2="העבודה מתבצעת בסביבה רווית עומסים ולחצים,"
                  hesber3="יש לשמור על קור רוח, קשב וריכוז לאורך זמן"
                />
              )}
            </th>
            <GradeRow
              isGray={props.isGray}
              allDATA={props.allDATA}
              avgs={props.avgs}
              grade={props.c6}
              criteria="C6"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" rowSpan="3">
              יכולות פיקוד וניהול
            </th>
            <th className="oth" onMouseOver={show10} onMouseLeave={nshow10}>
              קבלת החלטות
              {shown10 && (
                <Exp
                  isShown={shown10}
                  hesber1="קבלת החלטות וגמישות תפקודית"
                  hesber2="קבלת החלטות באופן עצמאי ובקבועי זמן קצרים תוך הסתגלות לסביבה משתנה, הבנה של"
                  hesber3="מגוון האפשרויות והשיקולים וראיית התמונה הרחבה (אירוע מחולל/ בלתי צפוי/ בטיחות)"
                />
              )}
            </th>
            <GradeRow
              isGray={props.isGray}
              allDATA={props.allDATA}
              avgs={props.avgs}
              grade={props.c7}
              criteria="C7"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show11} onMouseLeave={nshow11}>
              הפעלה
              {shown11 && (
                <Exp
                  isShown={shown11}
                  hesber1="יכולת הפעלה ועבודה בצוות"
                  hesber2="ניהול וסנכרון בין גורמים שונים תוך יצירת"
                  hesber3="סביבת עבודה מכבדת ומשתפת ותפעול ממשקי עבודה"
                />
              )}
            </th>
            <GradeRow
              isGray={props.isGray}
              allDATA={props.allDATA}
              avgs={props.avgs}
              grade={props.c8}
              criteria="C8"
            />
          </tr>
          <tr className="rowWithHistory">
            <th className="oth" onMouseOver={show12} onMouseLeave={nshow12}>
              תחקור
              {shown12 && (
                <Exp
                  isShown={shown12}
                  hesber1="יכולת תחקור"
                  hesber2="היכולת לבחון את התהליכים לעומק,"
                  hesber3="להסיק מסקנות וללמוד מטעויות"
                />
              )}
            </th>
            <GradeRow
              isGray={props.isGray}
              allDATA={props.allDATA}
              avgs={props.avgs}
              grade={props.c9}
              criteria="C9"
            />
          </tr>
        </tbody>
      </table>
    </>
  );
}
