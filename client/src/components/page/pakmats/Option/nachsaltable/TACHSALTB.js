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

        for(let i=0; i<goten.length;i++)
        {
          goten[i].isMesima=(goten[i].Maslool==="משימה")?"כן":"לא";
          goten[i].isTaavura=(goten[i].Maslool==="תעבורה")?"כן":"לא";
          goten[i].isVersatili=(goten[i].Maslool==="ורסטילי")?"כן":"לא";
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
            },
            {
              Header: "האם משימתי",
              accessor: "isMesima",
              show:false,
            },
            {
              Header: "האם תעבורתי",
              accessor: "isTaavura",
              show:false,
            },
            {
              Header: "האם ורסטילי",
              accessor: "isVersatili",
              show:false,
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
        setFilter,
        setAllFilters,
        allColumns,
        getToggleHideAllColumnsProps
      } = useTable({ columns, data, initialState: {
        hiddenColumns: columns.map(column => {
            if (column.show === false) return column.accessor || column.id;
        }),
    }, }, useFilters);
      
      const [filterInput, setFilterInput] = useState("");

      const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("MA", value);
        setFilterInput(value);
      };

      const [filterInput2, setFilterInput2] = useState("");

      const handleFilterChange2 = e => {
        const value = e.target.value || undefined;
        setFilter("FirstName", value);
        setFilterInput2(value);
      };

      const [filterInput3, setFilterInput3] = useState("");

      const handleFilterChange3 = e => {
        const value = e.target.value || undefined;
        setFilter("LastName", value);
        setFilterInput3(value);
      };

      const [filterInput4, setFilterInput4] = useState("");

      const handleFilterChange4 = e => {
        const value = e.target.value || undefined;
        setFilter("NickName", value);
        setFilterInput4(value);
      };

      const [filterInput5, setFilterInput5] = useState("");

      const handleFilterChange5 = e => {
        const value = e.target.value || undefined;
        setFilter("CourseNo", value);
        setFilterInput5(value);
      };

      const [mas1clicked, setMas1clicked] = useState(false);
      const [mas2clicked, setMas2clicked] = useState(false);
      const [mas3clicked, setMas3clicked] = useState(false);

      function checkLogic(status)
      {
        if(!status[0] && !status[1] && !status[2])
          return ["", "", ""];
  
        if(status[0] && !status[1] && !status[2])
          return ["כן","",""];
        if(!status[0] && status[1] && !status[2])
          return ["","כן",""];
        if(!status[0] && !status[1] && status[2])
          return ["", "", "כן"];
  
          if(status[0] && status[1] && !status[2])
          return ["","","לא"];
        if(status[0] && !status[1] && status[2])
          return ["","לא",""];
        if(!status[0] && status[1] && status[2])
          return ["לא", "", ""];
  
        if(status[0] && status[1] && status[2])
          return ["", "", ""];
      }

      const handleFilterChange6mesima = e => {
        const res=checkLogic([!mas1clicked, mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas1clicked)
          setMas1clicked(true);
        else
          setMas1clicked(false);
      };

      const handleFilterChange6taavura = e => {
        debugger;
        const res=checkLogic([mas1clicked, !mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas2clicked)
          setMas2clicked(true);
        else
          setMas2clicked(false);
      };

      const handleFilterChange6versatili = e => {
        const res=checkLogic([mas1clicked, mas2clicked, !mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas3clicked)
            setMas3clicked(true);
        else
          setMas3clicked(false);
    };


    {/****************
    המסגרת זה בגכלל מעקף הסתרת עומדות!!!!
    const [mas1clicked, setMas1clicked] = useState(false);
      const [mas2clicked, setMas2clicked] = useState(false);
      const [mas3clicked, setMas3clicked] = useState(false);

      function checkLogic(status)
      {
        if(!status[0] && !status[1] && !status[2])
          return ["", "", ""];
  
        if(status[0] && !status[1] && !status[2])
          return ["כן","",""];
        if(!status[0] && status[1] && !status[2])
          return ["","כן",""];
        if(!status[0] && !status[1] && status[2])
          return ["", "", "כן"];
  
          if(status[0] && status[1] && !status[2])
          return ["","","לא"];
        if(status[0] && !status[1] && status[2])
          return ["","לא",""];
        if(!status[0] && status[1] && status[2])
          return ["לא", "", ""];
  
        if(status[0] && status[1] && status[2])
          return ["", "", ""];
      }

      const handleFilterChange6mesima = e => {
        const res=checkLogic([!mas1clicked, mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas1clicked)
          setMas1clicked(true);
        else
          setMas1clicked(false);
      };

      const handleFilterChange6taavura = e => {
        debugger;
        const res=checkLogic([mas1clicked, !mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas2clicked)
          setMas2clicked(true);
        else
          setMas2clicked(false);
      };

      const handleFilterChange6versatili = e => {
        const res=checkLogic([mas1clicked, mas2clicked, !mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas3clicked)
            setMas3clicked(true);
        else
          setMas3clicked(false);
    };
    const [mas1clicked, setMas1clicked] = useState(false);
      const [mas2clicked, setMas2clicked] = useState(false);
      const [mas3clicked, setMas3clicked] = useState(false);

      function checkLogic(status)
      {
        if(!status[0] && !status[1] && !status[2])
          return ["", "", ""];
  
        if(status[0] && !status[1] && !status[2])
          return ["כן","",""];
        if(!status[0] && status[1] && !status[2])
          return ["","כן",""];
        if(!status[0] && !status[1] && status[2])
          return ["", "", "כן"];
  
          if(status[0] && status[1] && !status[2])
          return ["","","לא"];
        if(status[0] && !status[1] && status[2])
          return ["","לא",""];
        if(!status[0] && status[1] && status[2])
          return ["לא", "", ""];
  
        if(status[0] && status[1] && status[2])
          return ["", "", ""];
      }

      const handleFilterChange6mesima = e => {
        const res=checkLogic([!mas1clicked, mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas1clicked)
          setMas1clicked(true);
        else
          setMas1clicked(false);
      };

      const handleFilterChange6taavura = e => {
        debugger;
        const res=checkLogic([mas1clicked, !mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas2clicked)
          setMas2clicked(true);
        else
          setMas2clicked(false);
      };

      const handleFilterChange6versatili = e => {
        const res=checkLogic([mas1clicked, mas2clicked, !mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas3clicked)
            setMas3clicked(true);
        else
          setMas3clicked(false);
    };
    const [mas1clicked, setMas1clicked] = useState(false);
      const [mas2clicked, setMas2clicked] = useState(false);
      const [mas3clicked, setMas3clicked] = useState(false);

      function checkLogic(status)
      {
        if(!status[0] && !status[1] && !status[2])
          return ["", "", ""];
  
        if(status[0] && !status[1] && !status[2])
          return ["כן","",""];
        if(!status[0] && status[1] && !status[2])
          return ["","כן",""];
        if(!status[0] && !status[1] && status[2])
          return ["", "", "כן"];
  
          if(status[0] && status[1] && !status[2])
          return ["","","לא"];
        if(status[0] && !status[1] && status[2])
          return ["","לא",""];
        if(!status[0] && status[1] && status[2])
          return ["לא", "", ""];
  
        if(status[0] && status[1] && status[2])
          return ["", "", ""];
      }

      const handleFilterChange6mesima = e => {
        const res=checkLogic([!mas1clicked, mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas1clicked)
          setMas1clicked(true);
        else
          setMas1clicked(false);
      };

      const handleFilterChange6taavura = e => {
        debugger;
        const res=checkLogic([mas1clicked, !mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas2clicked)
          setMas2clicked(true);
        else
          setMas2clicked(false);
      };

      const handleFilterChange6versatili = e => {
        const res=checkLogic([mas1clicked, mas2clicked, !mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas3clicked)
            setMas3clicked(true);
        else
          setMas3clicked(false);
    };
    const [mas1clicked, setMas1clicked] = useState(false);
      const [mas2clicked, setMas2clicked] = useState(false);
      const [mas3clicked, setMas3clicked] = useState(false);

      function checkLogic(status)
      {
        if(!status[0] && !status[1] && !status[2])
          return ["", "", ""];
  
        if(status[0] && !status[1] && !status[2])
          return ["כן","",""];
        if(!status[0] && status[1] && !status[2])
          return ["","כן",""];
        if(!status[0] && !status[1] && status[2])
          return ["", "", "כן"];
  
          if(status[0] && status[1] && !status[2])
          return ["","","לא"];
        if(status[0] && !status[1] && status[2])
          return ["","לא",""];
        if(!status[0] && status[1] && status[2])
          return ["לא", "", ""];
  
        if(status[0] && status[1] && status[2])
          return ["", "", ""];
      }

      const handleFilterChange6mesima = e => {
        const res=checkLogic([!mas1clicked, mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas1clicked)
          setMas1clicked(true);
        else
          setMas1clicked(false);
      };

      const handleFilterChange6taavura = e => {
        debugger;
        const res=checkLogic([mas1clicked, !mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas2clicked)
          setMas2clicked(true);
        else
          setMas2clicked(false);
      };

      const handleFilterChange6versatili = e => {
        const res=checkLogic([mas1clicked, mas2clicked, !mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas3clicked)
            setMas3clicked(true);
        else
          setMas3clicked(false);
    };
    const [mas1clicked, setMas1clicked] = useState(false);
      const [mas2clicked, setMas2clicked] = useState(false);
      const [mas3clicked, setMas3clicked] = useState(false);

      function checkLogic(status)
      {
        if(!status[0] && !status[1] && !status[2])
          return ["", "", ""];
  
        if(status[0] && !status[1] && !status[2])
          return ["כן","",""];
        if(!status[0] && status[1] && !status[2])
          return ["","כן",""];
        if(!status[0] && !status[1] && status[2])
          return ["", "", "כן"];
  
          if(status[0] && status[1] && !status[2])
          return ["","","לא"];
        if(status[0] && !status[1] && status[2])
          return ["","לא",""];
        if(!status[0] && status[1] && status[2])
          return ["לא", "", ""];
  
        if(status[0] && status[1] && status[2])
          return ["", "", ""];
      }

      const handleFilterChange6mesima = e => {
        const res=checkLogic([!mas1clicked, mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas1clicked)
          setMas1clicked(true);
        else
          setMas1clicked(false);
      };

      const handleFilterChange6taavura = e => {
        debugger;
        const res=checkLogic([mas1clicked, !mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas2clicked)
          setMas2clicked(true);
        else
          setMas2clicked(false);
      };

      const handleFilterChange6versatili = e => {
        const res=checkLogic([mas1clicked, mas2clicked, !mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas3clicked)
            setMas3clicked(true);
        else
          setMas3clicked(false);
    };
    const [mas1clicked, setMas1clicked] = useState(false);
      const [mas2clicked, setMas2clicked] = useState(false);
      const [mas3clicked, setMas3clicked] = useState(false);

      function checkLogic(status)
      {
        if(!status[0] && !status[1] && !status[2])
          return ["", "", ""];
  
        if(status[0] && !status[1] && !status[2])
          return ["כן","",""];
        if(!status[0] && status[1] && !status[2])
          return ["","כן",""];
        if(!status[0] && !status[1] && status[2])
          return ["", "", "כן"];
  
          if(status[0] && status[1] && !status[2])
          return ["","","לא"];
        if(status[0] && !status[1] && status[2])
          return ["","לא",""];
        if(!status[0] && status[1] && status[2])
          return ["לא", "", ""];
  
        if(status[0] && status[1] && status[2])
          return ["", "", ""];
      }

      const handleFilterChange6mesima = e => {
        const res=checkLogic([!mas1clicked, mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas1clicked)
          setMas1clicked(true);
        else
          setMas1clicked(false);
      };

      const handleFilterChange6taavura = e => {
        debugger;
        const res=checkLogic([mas1clicked, !mas2clicked, mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas2clicked)
          setMas2clicked(true);
        else
          setMas2clicked(false);
      };

      const handleFilterChange6versatili = e => {
        const res=checkLogic([mas1clicked, mas2clicked, !mas3clicked]);
        setFilter("isMesima", res[0]);
        setFilter("isTaavura", res[1]);
        setFilter("isVersatili", res[2]);
        if(!mas3clicked)
            setMas3clicked(true);
        else
          setMas3clicked(false);
    };
    ******************/}

    

    return (
        <div key={props.data} key={props.data}>
          <br/><br/><br/>
          <div className="MasloolFilter">
            <button className="MasloolFilterBH" onClick={handleFilterChange6mesima}>יחידה:</button>
            <button className="MasloolFilterBSs" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas1clicked} onClick={handleFilterChange6mesima}>506</button>
            <button className="MasloolFilterBS" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas2clicked} onClick={handleFilterChange6taavura}>509</button>
            <button className="MasloolFilterBS" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas3clicked} onClick={handleFilterChange6versatili}>צוערים</button>
          </div><br/>
          <div className="MasloolFilter">
            <button className="MasloolFilterBH" onClick={handleFilterChange6mesima}>מסלול:</button>
            <button className="MasloolFilterBSs" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas1clicked} onClick={handleFilterChange6mesima}>משימה</button>
            <button className="MasloolFilterBS" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas2clicked} onClick={handleFilterChange6taavura}>תעבורה</button>
            <button className="MasloolFilterBS" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas3clicked} onClick={handleFilterChange6versatili}>ורסטילי</button>
          </div><br/>
          <div className="MasloolFilter">
            <button className="MasloolFilterBH" onClick={handleFilterChange6mesima}>הצבה:</button>
            <button className="MasloolFilterBSs" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas1clicked} onClick={handleFilterChange6mesima}>סדיר</button>
            <button className="MasloolFilterBS" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas2clicked} onClick={handleFilterChange6taavura}>הצ"ח</button>
            <button className="MasloolFilterBS" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas3clicked} onClick={handleFilterChange6versatili}>מילואים</button>
          </div><br/>
          <div className="MasloolFilter">
            <button className="MasloolFilterBH" onClick={handleFilterChange6mesima}>דרג מקצועי:</button>
            <button className="MasloolFilterBSs" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas1clicked} onClick={handleFilterChange6mesima}>א'</button>
            <button className="MasloolFilterBS" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas2clicked} onClick={handleFilterChange6taavura}>ב'</button>
            <button className="MasloolFilterBS" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas3clicked} onClick={handleFilterChange6versatili}>ג'</button>
            <button className="MasloolFilterBS" onClick={handleFilterChange6mesima}></button>
            <button className={"MasloolFilterB"+mas3clicked} onClick={handleFilterChange6versatili}>ד'</button>
          </div><br/><br/><br/>
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
            <tr><td><input
              style={{width:"90px"}}
              value={filterInput}
              onChange={handleFilterChange}
              placeholder={"לפי מספר אישי"}
            /></td>
            <td><input
              style={{width:"90px"}}
              value={filterInput2}
              onChange={handleFilterChange2}
              placeholder={"לפי שם פרטי"}
            /></td>
            <td><input
              style={{width:"90px"}}
              value={filterInput3}
              onChange={handleFilterChange3}
              placeholder={"לפי שם משפחה"}
            /></td>
            <td><input
              style={{width:"90px"}}
              value={filterInput4}
              onChange={handleFilterChange4}
              placeholder={"לפי כינוי"}
              /></td>
            <td><input
              style={{width:"90px"}}
              value={filterInput5}
              onChange={handleFilterChange5}
              placeholder={"לפי קורס"}
            /></td>
            <td></td></tr>
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
                            textAlign: "center",
                            fontWeight: "bold"
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
