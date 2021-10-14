import Axios from "axios";
import React, { useEffect, useState} from "react";
import domain from "../../../util/domain";
import Paragraph from "../../global/Paragraph";

function ShowOpinion(opinionid) {

  const [crewm, setCrewm] = useState();
  const [signed, setSigned] = useState();
  const [tkufa, setTkufa] = useState();
  const [filldate, setFfilldate] = useState();
  const [monthsno, setMonthsno] = useState();
  const [position, setPosition] = useState();
  const [commandor, setCommandor] = useState();
  const [authorizer, setAuthorizer] = useState();
  const [c1, setC1] = useState();
  const [c2, setC2] = useState();
  const [c3, setC3] = useState();
  const [c4, setC4] = useState();
  const [c5, setC5] = useState();
  const [c6, setC6] = useState();
  const [c7, setC7] = useState();
  const [c8, setC8] = useState();
  const [c9, setC9] = useState();
  const [m1, setM1] = useState();
  const [m2, setM2] = useState();
  const [tp, setTp] = useState();
  const [fp, setFp] = useState();

  const [maslool, setMaslool] = useState();
  const [isMesima, setIsMesima] = useState("");
  const [isTaavura, setIsTaavura] = useState("");
  const [isVersatili, setIsVersatili] = useState("");

  const [sooghatsava, setSooghatsava] = useState();
  const [isSadir, setIsSadir] = useState("");
  const [isHatsach, setIsHatsach] = useState("");
  const [isMill, setIsMill] = useState("");

  const [dereg, setDereg] = useState();
  const [isDeregA, setIsDeregA] = useState("");
  const [isDeregB, setIsDeregB] = useState("");
  const [isDeregC, setIsDeregC] = useState("");
  const [isDeregD, setIsDeregD] = useState("");

  const [c14, setC14] = useState("");
  const [c15, setC15] = useState("");
  const [c16, setC16] = useState("");
  const [c17, setC17] = useState("");
  const [c18, setC18] = useState("");
  const [c19, setC19] = useState("");
  const [c110, setC110] = useState("");

  const [c24, setC24] = useState("");
  const [c25, setC25] = useState("");
  const [c26, setC26] = useState("");
  const [c27, setC27] = useState("");
  const [c28, setC28] = useState("");
  const [c29, setC29] = useState("");
  const [c210, setC210] = useState("");

  const [c34, setC34] = useState("");
  const [c35, setC35] = useState("");
  const [c36, setC36] = useState("");
  const [c37, setC37] = useState("");
  const [c38, setC38] = useState("");
  const [c39, setC39] = useState("");
  const [c310, setC310] = useState("");

  const [c44, setC44] = useState("");
  const [c45, setC45] = useState("");
  const [c46, setC46] = useState("");
  const [c47, setC47] = useState("");
  const [c48, setC48] = useState("");
  const [c49, setC49] = useState("");
  const [c410, setC410] = useState("");

  const [c54, setC54] = useState("");
  const [c55, setC55] = useState("");
  const [c56, setC56] = useState("");
  const [c57, setC57] = useState("");
  const [c58, setC58] = useState("");
  const [c59, setC59] = useState("");
  const [c510, setC510] = useState("");

  const [c64, setC64] = useState("");
  const [c65, setC65] = useState("");
  const [c66, setC66] = useState("");
  const [c67, setC67] = useState("");
  const [c68, setC68] = useState("");
  const [c69, setC69] = useState("");
  const [c610, setC610] = useState("");

  const [c74, setC74] = useState("");
  const [c75, setC75] = useState("");
  const [c76, setC76] = useState("");
  const [c77, setC77] = useState("");
  const [c78, setC78] = useState("");
  const [c79, setC79] = useState("");
  const [c710, setC710] = useState("");

  const [c84, setC84] = useState("");
  const [c85, setC85] = useState("");
  const [c86, setC86] = useState("");
  const [c87, setC87] = useState("");
  const [c88, setC88] = useState("");
  const [c89, setC89] = useState("");
  const [c810, setC810] = useState("");

  const [c94, setC94] = useState("");
  const [c95, setC95] = useState("");
  const [c96, setC96] = useState("");
  const [c97, setC97] = useState("");
  const [c98, setC98] = useState("");
  const [c99, setC99] = useState("");
  const [c910, setC910] = useState("");

  const [m14, setM14] = useState("");
  const [m15, setM15] = useState("");
  const [m16, setM16] = useState("");
  const [m17, setM17] = useState("");
  const [m18, setM18] = useState("");
  const [m19, setM19] = useState("");
  const [m110, setM110] = useState("");

  const [m2n, setM2n] = useState("");
  const [m2g, setM2g] = useState("");
  const [m2b, setM2b] = useState("");
  const [m2a2, setM2a2] = useState("");
  const [m2a1, setM2a1] = useState("");

  const [ready, setReady] = useState(false);
  const [again, setAgain] = useState(false);
  

  useEffect( () => {
    const getOpinion = async () => {
        const OpinionRes = await Axios.get(`${domain}/auth/getOpinion/${opinionid}`);
        let c=OpinionRes.data.CrewM;
        try {setCrewm(c);} catch (err){console.log(err);}
        let m =c.Maslool;
        try {setMaslool(m);} catch (err){console.log(err);}
        let s =c.SoogHatsava;
        try {setSooghatsava(s);} catch (err){console.log(err);}
        let d =c.Dereg;
        try {setDereg(d);} catch (err){console.log(err);}
        try{
            if(dereg===1)
                setIsDeregA("selected");
            else if(dereg===2)
                setIsDeregB("selected");
                else if(dereg===3)
                setIsDeregC("selected");
                else if(dereg===4)
                setIsDeregD("selected");
                else setAgain(!again);
            }catch(err){console.log(err);}
            
        try{
            if(maslool==="mesima")
                setIsMesima("selected");
            if(maslool==="taavura")
                setIsTaavura("selected");
            if(maslool==="versatili")
                setIsVersatili("selected");}catch(err){console.log(err);}
        try{
            if(sooghatsava==="sadir")
                setIsSadir("selected");
            if(sooghatsava==="hatsach")
                setIsHatsach("selected");
            if(sooghatsava==="mill")
                setIsMill("selected");}catch(err){console.log(err);}
        let siginit = (OpinionRes.data.Signed)?("כן"):("לא");
        try {setSigned(siginit);} catch (err){console.log(err);}
        let tkufaNum = OpinionRes.data.Tkufa;
        let TkufaYear = (tkufaNum%2===0)?(tkufaNum/2):(tkufaNum/2+0.5);
        let tkufainYear = (tkufaNum%2===0)?("2"):("1");
        let yearString = TkufaYear.toString();
        let countD=0;
        for(let i=0; i<4-yearString.length;i++)
        countD++;
        let addex="";
        for(let i=0; i<countD;i++)
        addex=addex+"0";
        let finilTkuda=tkufainYear+"."+addex+yearString;
        try {setTkufa(finilTkuda);} catch (err){console.log(err);}
        try {
        let finil = "DIDNOTDOWANAD";
        finil = (OpinionRes.data.fillDate).substring(0,10);
        const day = finil.substring(5,7)
        const month = finil.substring(8,10);
        const year= finil.substring(0,4);
        finil= day+"/"+month+"/"+year;
        setFfilldate(finil);
        } catch (err){console.log(err);}
        try {setMonthsno(OpinionRes.data.MonthsNo);} catch (err){console.log(err);}
        try {setPosition(OpinionRes.data.Position);} catch (err){console.log(err);}
        try {setCommandor(OpinionRes.data.Commandor);} catch (err){console.log(err);}
        try {setAuthorizer(OpinionRes.data.Authorizer);} catch (err){console.log(err);}
        try {setC1(OpinionRes.data.C1);} catch (err){console.log(err);}
        try {setC2(OpinionRes.data.C2);} catch (err){console.log(err);}
        try {setC3(OpinionRes.data.C3);} catch (err){console.log(err);}
        try {setC4(OpinionRes.data.C4);} catch (err){console.log(err);}
        try {setC5(OpinionRes.data.C5);} catch (err){console.log(err);}
        try {setC6(OpinionRes.data.C6);} catch (err){console.log(err);}
        try {setC7(OpinionRes.data.C7);} catch (err){console.log(err);}
        try {setC8(OpinionRes.data.C8);} catch (err){console.log(err);}
        try {setC9(OpinionRes.data.C9);} catch (err){console.log(err);}
        try {setM1(OpinionRes.data.M1);} catch (err){console.log(err);}
        try {setM2(OpinionRes.data.M2);} catch (err){console.log(err);}
        try {setTp(OpinionRes.data.Tp);} catch (err){console.log(err);}
        try {setFp(OpinionRes.data.Fp);} catch (err){console.log(err);}
        let tparr=tp;
        let fparr=fp;
        let tpp="";
        let fpp="";
        if(!fparr || !tparr)
            setAgain(!again);
        try {
            for (let i=0;i<tparr.length;i++)
                tpp=tpp+tparr[i]+"\n";
        }catch(err){console.log(err);}
        try {
            for (let i=0;i<fparr.length;i++)
                fpp=fpp+fparr[i]+"\n";
        }catch(err){console.log(err);}
        try {setTp(tpp);} catch (err){console.log(err);}
        try {setFp(fpp);} catch (err){console.log(err);}
        setReady(true);
    } 
    getOpinion();
  }, [again]);
    
  return ready ? (
    <div className="opinion">
        <br /><br /><br /><br /><br /><br />
        <h3 className="h3Opinion">טופס מישוב והערכה לרמת הבקרה של {crewm.NickName} - תקופה {tkufa}:</h3>
        <br />
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
                    {crewm.MA}
                </td>
                <td>
                    {crewm.Rank}
                </td>
                <td>
                    {crewm.LastName}
                </td>
                <td>
                    {crewm.FirstName}
                </td>
                <td>
                    {signed}
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
                    תפקיד / נע"ת
                </th>
            </tr>
            <tr>
                <td>
                    {tkufa}
                </td>
                <td>
                    {filldate}
                </td>
                <td>
                    {monthsno}
                </td>
                <td colSpan="2">
                    {position}
                </td>
            </tr>
        </tbody></table>
        <br />
        <table><tbody>
            <tr>
                <th>
                    מסלול
                </th>
                <td className={isMesima}>
                    משימה
                </td>
                <td className={isTaavura}>
                    תעבורה
                </td>
                <td className={isVersatili}>
                    ורסטילי
                </td>
            </tr>
            <tr>
                <th>
                    סוג הצבה
                </th>
                <td className={isSadir}>
                    סדיר
                </td>
                <td className={isHatsach}>
                    הצ"ח
                </td>
                <td className={isMill}>
                    מילואים
                </td>
            </tr>
            <tr>
                <th>
                    דרג
                </th>
                <td className={isDeregA}>
                    א'
                </td>
                <td className={isDeregB}>
                    ב'
                </td>
                <td className={isDeregC}>
                    ג'
                </td>
                <td className={isDeregD}>
                    ד'
                </td>
            </tr>
        </tbody></table>
        <br />
        <h4>פרטי המעריך - מפקד גף</h4>
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
            </tr>
            <tr>
                <td>
                    {"8652646"}
                </td>
                <td>
                    {"רס''ן"}
                </td>
                <td>
                    {"ביטון"}
                </td>
                <td>
                    {"אור"}
                </td>
            </tr>
        </tbody></table>
        <br />
        <h4>פרטי המאשר - מפקד יחידה</h4>
        <h5>(ומעריך בתנאי שהבקר מוסמך...)</h5>
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
            </tr>
            <tr>
                <td>
                    {7652676}
                </td>
                <td>
                    {"סא''ל"}
                </td>
                <td>
                    {"ולדמן"}
                </td>
                <td>
                    {"רועי"}
                </td>
            </tr>
        </tbody></table>
        <br />
        <table><tbody>
            <tr>
                <th colSpan="2">
                    משוב אישי(כהערכה כוללת)
                </th>
                <th colSpan="2">
                    נכשל
                </th>
                <th colSpan="3">
                ממוצע
                </th>
                <th colSpan="2">
                מצוין
                </th>
            </tr>
            <tr>
                <th rowSpan="6">
                    למידה וקוגניציה
                </th>
                <th>
                    למידה
                </th>
                <td className={c14}>
                    4
                </td>
                <td className={c15}>
                    5
                </td>
                <td className={c16}>
                    6
                </td>
                <td className={c17}>
                    7
                </td>
                <td className={c18}>
                    8
                </td>
                <td className={"selected"}>
                    9
                </td>
                <td className={c110}>
                    10
                </td>
            </tr>
            <tr>
                <th>
                    תכנון  
                </th>
                <td className={c24}>
                    4
                </td>
                <td className={c25}>
                    5
                </td>
                <td className={c26}>
                    6
                </td>
                <td className={"selected"}>
                    7
                </td>
                <td className={c28}>
                    8
                </td>
                <td className={c29}>
                    9
                </td>
                <td className={c210}>
                    10
                </td>
            </tr>
            <tr>
                <th>
                    תפיסה מרחבית
                </th>
                <td className={c34}>
                    4
                </td>
                <td className={c35}>
                    5
                </td>
                <td className={c36}>
                    6
                </td>
                <td className={c37}>
                    7
                </td>
                <td className={c38}>
                    8
                </td>
                <td className={"selected"}>
                    9
                </td>
                <td className={c310}>
                    10
                </td>
            </tr>
            <tr>
                <th>
                    חלק"ש
                </th>
                <td className={c44}>
                    4
                </td>
                <td className={c45}>
                    5
                </td>
                <td className={c46}>
                    6
                </td>
                <td className={c47}>
                    7
                </td>
                <td className={"selected"}>
                    8
                </td>
                <td className={c49}>
                    9
                </td>
                <td className={c410}>
                    10
                </td>
            </tr>
            <tr>
                <th>
                    תקשורת
                </th>
                <td className={c54}>
                    4
                </td>
                <td className={c55}>
                    5
                </td>
                <td className={c56}>
                    6
                </td>
                <td className={c57}>
                    7
                </td>
                <td className={"selected"}>
                    8
                </td>
                <td className={c59}>
                    9
                </td>
                <td className={c510}>
                    10
                </td>
            </tr>
            <tr>
                <th>
                    עומס
                </th>
                <td className={c64}>
                    4
                </td>
                <td className={"selected"}>
                    5
                </td>
                <td className={c66}>
                    6
                </td>
                <td className={c67}>
                    7
                </td>
                <td className={c68}>
                    8
                </td>
                <td className={c69}>
                    9
                </td>
                <td className={c610}>
                    10
                </td>
            </tr>
            <tr>
                <th rowSpan="3">
                    יכולות פיקוד וניהול
                </th>
                <th>
                    קבלת החלטות
                </th>
                <td className={c74}>
                    4
                </td>
                <td className={c75}>
                    5
                </td>
                <td className={c76}>
                    6
                </td>
                <td className={c77}>
                    7
                </td>
                <td className={c78}>
                    8
                </td>
                <td className={c79}>
                    9
                </td>
                <td className={"selected"}>
                    10
                </td>
            </tr>
            <tr>
                <th>
                    הפעלה
                </th>
                <td className={c84}>
                    4
                </td>
                <td className={c85}>
                    5
                </td>
                <td className={c86}>
                    6
                </td>
                <td className={c87}>
                    7
                </td>
                <td className={c88}>
                    8
                </td>
                <td className={c89}>
                    9
                </td>
                <td className={"selected"}>
                    10
                </td>
            </tr>
            <tr>
                <th>
                    תחקור
                </th>
                <td className={c94}>
                    4
                </td>
                <td className={c95}>
                    5
                </td>
                <td className={c96}>
                    6
                </td>
                <td className={c97}>
                    7
                </td>
                <td className={c98}>
                    8
                </td>
                <td className={"selected"}>
                    9
                </td>
                <td className={c910}>
                    10
                </td>
            </tr>
        </tbody></table>
        <br />
        <h4>ציון מסכם:</h4>
        <table><tbody>
            <tr>
                <th>
                    נכשל
                </th>
                <th>
                    נמוך
                </th>
                <th>
                    מתחת לממוצע
                </th>
                <th>
                    ממוצע
                </th>
                <th>
                    מעל הממוצע
                </th>
                <th>
                    טוב מאוד
                </th>
                <th>
                    מצוין
                </th>
            </tr>
            <tr>
                <td className={m14}>
                    4
                </td>
                <td className={m15}>
                    5
                </td>
                <td className={m16}>
                    6
                </td>
                <td className={m17}>
                    7
                </td>
                <td className={"selected"}>
                    8
                </td>
                <td className={m19}>
                    9
                </td>
                <td className={m110}>
                    10
                </td>
            </tr>
        </tbody></table>
        <br />
        <h4>פוטנציאל להובלה:</h4>
        <table><tbody>
            <tr>
                <th>
                    נמוך
                </th>
                <th>
                    בינוני
                </th>
                <th>
                    גבוה
                </th>
                <th>
                    גבוה מאוד
                </th>
                <th rowSpan="2" className={m2n}>
                    לא רלוונטי
                </th>
            </tr>
            <tr>
                <td className={m2g}>
                    ג
                </td>
                <td className={m2b}>
                    ב
                </td>
                <td className={"selected"}>
                    א-2
                </td>
                <td className={m2a1}>
                    א-1
                </td>
            </tr>
        </tbody></table>
        <br />
        <h4>הערכה מילולית מסכמת:</h4>
        <br />
        <h5>יעדים לתקופה הקרובה:</h5>
        <br />
        <Paragraph text={tp} />
        <br />
        <h5>סיכום המשוב:</h5>
        <br />
        <Paragraph text={fp} />
        <br /><br /><br /><br /><br /><br /><br />
    </div>):(<h2>טוען את החוו"ד שלך מהשרת...</h2>
  );
}

export default ShowOpinion;