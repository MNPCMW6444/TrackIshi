import React, {useState} from 'react';
import { useTable, useFilters, useSortBy } from "react-table";

export default function TACHSALTB(props) {

    const goten=props.data; 
      
      for(let i=0; i<goten.length;i++)
        {
          const finil = goten[i].BirthDate.substring(0,10);
          const day = finil.substring(5,7)
          const month = finil.substring(8,10);
          const year= finil.substring(0,4);
          const finili= day+"/"+month+"/"+year;
          goten[i].BirthDate=finili;
          let hebrewMaslool = "לא ידוע";
          switch(goten[i].Maslool){
              case "mesima": hebrewMaslool = "משימה";break;
              case "taavura": hebrewMaslool = "תעבורה";break;
              case "versatili": hebrewMaslool = "ורסטילי";break;
              default: break;
          }
          goten[i].Maslool=hebrewMaslool;
        }
      
      const data = React.useMemo(
          () => 
            goten,
          []
        );
    
      const columns = React.useMemo(
        () => [
            {  
                Header: "מספר אישי",
                accessor: "MA",
            },
            {
                Header: "שם פרטי",
                accessor: "FirstName",
            },
            {
                Header: "שם משפחה",
                accessor: "LastName",
            },
            {
                Header: "כינוי",
                accessor: "NickName",
            },
            {
                Header: "קורס",
                accessor: "CourseNo",
            },
            {
                Header: "מספר טלפון נייד",
                accessor: "MainPhone",
            },
            {
                Header: "מספר טלפון נוסף למקרה חירום",
                accessor: "EmergencyPhone",
            },
            {
                Header: "עיר מגורים",
                accessor: "AddressCity",
            },
            {
                Header: "כתובת",
                accessor: "AddressLine",
            },
            {
                Header: "דרגה",
                accessor: "Rank",
            },
            {
              Header: "מסלול",
              accessor: "Maslool",
            },
            {
              Header: "אימייל",
              accessor: "Email",
            },
            {
              Header: "תאריך לידה",
              accessor: "BirthDate",
            }
        ],
        []
      );
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter
      } = useTable({ columns, data }, useFilters);
      
      const [filterInput, setFilterInput] = useState("");

      const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("FirstName", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
        setFilterInput(value);
      };

    return (
        <div key={props.data} key={props.data}>
          <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search name"}
          />
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: 'solid 3px red',
                        background: 'aliceblue',
                        color: 'black',
                        fontWeight: 'bold',
                        paddingLeft: "20px",
                        paddingRight: "20px"
                      }}
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                            background: 'papayawhip',
                          }}
                        >
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    )
}
