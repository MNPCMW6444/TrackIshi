import React, { useState } from "react";

export default function CheckBox(props) {
  const [c, setC] = useState(props.is !== undefined && props.is);
  return (
    <div>
      <input
        type="checkbox"
        checked={c}
        onClick={() => {
          setC(props.is !== undefined && props.is);
        }}
      ></input>
    </div>
  );
}
