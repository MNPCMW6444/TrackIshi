import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Label } from 'recharts';

export default function Lchart(props) {
    
  const data = props.data;
  

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

 
 