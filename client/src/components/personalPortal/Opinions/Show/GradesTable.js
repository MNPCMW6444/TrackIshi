import React from 'react';
import GradeRow from './GradesTable/GradeRow';

export default function GradesTable(props) {
    return (
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
                <GradeRow grade={props.c1} />
            </tr>
            <tr>
                <th>
                    תכנון  
                </th>
                <GradeRow grade={props.c2} />
            </tr>
            <tr>
                <th>
                    תפיסה מרחבית
                </th>
                <GradeRow grade={props.c3} />
            </tr>
            <tr>
                <th>
                    חלק"ש
                </th>
                <GradeRow grade={props.c4} />
            </tr>
            <tr>
                <th>
                    תקשורת
                </th>
                <GradeRow grade={props.c5} />
            </tr>
            <tr>
                <th>
                    עומס
                </th>
                <GradeRow grade={props.c6} />
            </tr>
            <tr>
                <th rowSpan="3">
                    יכולות פיקוד וניהול
                </th>
                <th>
                    קבלת החלטות
                </th>
                <GradeRow grade={props.c7} />
            </tr>
            <tr>
                <th>
                    הפעלה
                </th>
                <GradeRow grade={props.c8} />
            </tr>
            <tr>
                <th>
                    תחקור
                </th>
                <GradeRow grade={props.c9} />
            </tr>
        </tbody></table>
    )
}


