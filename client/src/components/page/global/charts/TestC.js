import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Label } from 'recharts';

export default function TestC() {
    
  const data = [{tkufa:"1.2018", overGrade:6}, {tkufa:"2.2018", overGrade:10}, {tkufa:"1.2019", overGrade:7}, {tkufa:"2.2019", overGrade:4}, {tkufa:"1.2020", overGrade:5}, {tkufa:"2.2020", overGrade:7}, {tkufa:"1.2021", overGrade:8}, {tkufa:"2.2021", data:8} ]
  

    return (
        <div className="Chart" style={{direction:"ltr", float:"right"}}>
          <LineChart width={730} height={250} data={data} >
            <CartesianGrid horizontal={true} vertical={false} horizontalPoints={[0,5*33-4*33,6*33-4*33,7*33-4*33,8*33-4*33,9*33-4*33,]} />
            <XAxis dataKey="tkufa" padding={{ right: 20 , left:20}}/>
            <YAxis type="number" domain={[4, 10]} padding={{ bottom: 5 , top:5}} height={50} ><Label value="סולם חיל האוויר" angle={-90} position="insideLift"/></YAxis>
            <Legend verticalAlign="bottom" height={36}/>
            <Line name="ציון מסכם" type="monotone" dataKey="overGrade" stroke="#8884d8" />
          </LineChart>
        </div>
    )
}

 
 