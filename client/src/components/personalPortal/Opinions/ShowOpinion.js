import Axios from "axios";
import React, { useEffect, useState} from "react";
import domain from "../../../util/domain";

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
            if(dereg==1)
                setIsDeregA("selected");
            else if(dereg==2)
                setIsDeregB("selected");
                else if(dereg==3)
                setIsDeregC("selected");
                else if(dereg==4)
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
        setReady(true);
    } 
    getOpinion();
  }, [again]);
    
  return ready ? (
    <>
        <h3 className="h3Opinion">טופס מישוב והערכה לרמת בקרה של {crewm.NickName} המתקופה {tkufa}:</h3>
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
                <th>
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
                <td>
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

    </>):(<h2>טוען את החוו"ד שלך מהשרת...</h2>
  );
}

export default ShowOpinion;