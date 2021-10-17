import React, { useEffect, useState} from "react";

export default function PotentialTable(props) {

    const [m4, setM4] = useState("");
    const [m3, setM3] = useState("");
    const [m2, setM2] = useState("");
    const [m1, setM1] = useState("");
    const [m0, setM0] = useState("");

    useEffect(() => {
        try {
            switch (props.grade){
                case 4: setM4("selected");break;
                case 3: setM3("selected");break;
                case 2: setM2("selected");break;
                case 1: setM1("selected");break;
                case 0: setM0("selected");break;
                default:;
        }} catch (err) {console.log(err);}
    }, [props.grade]);

    return (
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
                <th rowSpan="2" className={m0}>
                    לא רלוונטי
                </th>
            </tr>
            <tr>
                <td className={m4}>
                    ג
                </td>
                <td className={m3}>
                    ב
                </td>
                <td className={m2}>
                    א-2
                </td>
                <td className={m1}>
                    א-1
                </td>
            </tr>
        </tbody></table>
    )
}
