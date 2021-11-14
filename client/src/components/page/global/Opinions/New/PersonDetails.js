import React from 'react'

export default function PersonDetails(props) {
    return (
        <table className="otable"><tbody>
            <tr className="otr">
                <th  className="oth">
                    מספר אישי
                </th>
                <th  className="oth">
                    דרגה
                </th>
                <th  className="oth">
                    שם משפחה
                </th>
                <th  className="oth">
                    שם פרטי
                </th>
            </tr>
            <tr>
                <td  className="otd">
                    {props.ma}
                </td>
                <td  className="otd">
                    {props.darga}
                </td>
                <td  className="otd">
                    {props.lastn}
                </td>
                <td  className="otd">
                    {props.firstn}
                </td>
            </tr>
        </tbody></table>
    )
}
