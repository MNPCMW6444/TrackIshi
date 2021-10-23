import React, { useEffect, useState} from "react";

export default function GradeRow(props) {

    const [o4, setO4] = useState("");
    const [o5, setO5] = useState("");
    const [o6, setO6] = useState("");
    const [o7, setO7] = useState("");
    const [o8, setO8] = useState("");
    const [o9, setO9] = useState("");
    const [o10, setO10] = useState("");

    useEffect(() => {
        try {
            switch (props.grade){
                case 4: setO4("selected");break;
                case 5: setO5("selected");break;
                case 6: setO6("selected");break;
                case 7: setO7("selected");break;
                case 8: setO8("selected");break;
                case 9: setO9("selected");break;
                case 10: setO10("selected");break;
                default:;
        }} catch (err) {console.log(err);}
    }, [props.grade]);
    
    return (
        <>
            <td className={"o"+o4}>
                4
            </td>
            <td className={"o"+o5}>
                5
            </td>
            <td className={"o"+o6}>
                6
            </td>
            <td className={"o"+o7}>
                7
            </td>
            <td className={"o"+o8}>
                8
            </td>
            <td className={"o"+o9}>
                9
            </td>
            <td className={"o"+o10}>
                10
            </td>
        </>
    )
}
