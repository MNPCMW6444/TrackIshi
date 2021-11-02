import React, {useState} from "react";

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
    stillRelevant && <><div className="success-message">
      <p className="success-message-p">{message}</p>
      <button className="success-message-button" onClick={clear}>הבנתי ({timeleft})</button>
    </div>
    <br /></>
  );
}

export default SuccessMessage;
