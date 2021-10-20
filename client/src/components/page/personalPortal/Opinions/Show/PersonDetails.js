import React from 'react'

export default function PersonDetails(props) {
    return (
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
                    {props.ma}
                </td>
                <td>
                    {props.darga}
                </td>
                <td>
                    {props.lastn}
                </td>
                <td>
                    {props.firstn}
                </td>
            </tr>
        </tbody></table>
    )
}
