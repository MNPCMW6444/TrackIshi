import React, { useEffect, useState} from "react";

function ClassesTable(props) {

  const [isMesima, setIsMesima] = useState("");
  const [isTaavura, setIsTaavura] = useState("");
  const [isVersatili, setIsVersatili] = useState("");

  const [isSadir, setIsSadir] = useState("");
  const [isHatsach, setIsHatsach] = useState("");
  const [isMill, setIsMill] = useState("");

  const [isDeregA, setIsDeregA] = useState("");
  const [isDeregB, setIsDeregB] = useState("");
  const [isDeregC, setIsDeregC] = useState("");
  const [isDeregD, setIsDeregD] = useState("");

  useEffect( () => {
    const getOpinion = async () => {
        try{
            if(props.dereg===1)
                setIsDeregA("selected");
            else if(props.dereg===2)
                setIsDeregB("selected");
                else if(props.dereg===3)
                setIsDeregC("selected");
                else if(props.dereg===4)
                setIsDeregD("selected");
            }catch(err){console.log(err);}
            
        try{
            if(props.maslool==="mesima")
                setIsMesima("selected");
            if(props.taavura)
                setIsTaavura("selected");
            if(props.versatili)
                setIsVersatili("selected");}catch(err){console.log(err);}
        try{
            if(props.sooghatsava==="sadir")
                setIsSadir("selected");
            if(props.sooghatsava==="hatsach")
                setIsHatsach("selected");
            if(props.sooghatsava==="mill")
                setIsMill("selected");}catch(err){console.log(err);}
    } 
    getOpinion();
  }, [props.dereg, props.maslool, props.sooghatsava, props.taavura, props.versatili]);
  

  return (
    <table className="otable"><tbody>
            <tr className="otr">
                <th className="oth">
                    מסלול
                </th>
                <td className={"o"+isMesima}>
                    משימה
                </td>
                <td className={"o"+isTaavura}>
                    תעבורה
                </td>
                <td className={"o"+isVersatili}>
                    ורסטילי
                </td>
            </tr>
            <tr className="otr">
                <th className="oth">
                    סוג הצבה
                </th>
                <td className={"o"+isSadir}>
                    סדיר
                </td>
                <td className={"o"+isHatsach}>
                    הצ"ח
                </td>
                <td className={"o"+isMill}>
                    מילואים
                </td>
            </tr>
            <tr className="otr">
                <th className="oth">
                    דרג
                </th>
                <td className={"o"+isDeregA}>
                    א'
                </td>
                <td className={"o"+isDeregB}>
                    ב'
                </td>
                <td className={"o"+isDeregC}>
                    ג'
                </td>
                <td className={"o"+isDeregD}>
                    ד'
                </td>
            </tr>
        </tbody></table>
  );
}

export default ClassesTable;