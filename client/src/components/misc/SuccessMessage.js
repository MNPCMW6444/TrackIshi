import React, {useState} from "react";
import "./SuccessMessage.scss";

function SuccessMessage({ message, clear }) {
 
  const [stillRelevant, setStillRelevant] = useState(true);
  const [timeleft, setTimeleft] = useState(5);
  
  setTimeout(() => {
    if(timeleft <= 1)
    {
      clear();
      setStillRelevant(false);
    }
    else
      setTimeleft(timeleft-1);
  }, 1000);
 
  return (
    stillRelevant && <div className="success-message">
      <p>{message}</p>
      <button onClick={clear}>הבנתי ({timeleft})</button>
    </div>
  );
}

export default SuccessMessage;
