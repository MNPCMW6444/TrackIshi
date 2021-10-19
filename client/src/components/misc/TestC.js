import React from 'react'
import { Chart } from 'react-charts'

export default function TestC() {
    
    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [["2018", 6], ["2019", 7], ["2020", 8], ["2021", 6], ["2022", 6]]
          },
        ],
        []
      );
     
    const axes = React
    .useMemo(
    () => [
        { primary: true, type: 'ordinal', position: 'bottom' },
        { type: 'linear', position: 'left', min: 4, max: 10}
    ],
    []
    );
     

    return (
        <div
            style={{
            width: '400px',
            height: '300px'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
}

 
 