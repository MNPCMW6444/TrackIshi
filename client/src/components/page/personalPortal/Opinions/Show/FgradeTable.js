import React from 'react'
import GradeRow from './GradesTable/GradeRow'

export default function FgradeTable(props) {
    return (
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
                <GradeRow grade={props.grade} />
            </tr>
        </tbody></table>
    )
}
