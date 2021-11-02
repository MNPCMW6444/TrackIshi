import React, {useState} from "react";

function ErrorMessage({ message, clear }) {
 
  const [stillRelevant, setStillRelevant] = useState(true);
  const [timeleft, setTimeleft] = useState(5);
  
  setTimeout(() => {
    if(timeleft <= 1)
      {
        setStillRelevant(false);
        clear();
      }
    else
      setTimeleft(timeleft-1);
  }, 1000);
 
  return (
    stillRelevant && <><div className="error-message">
      <p className="error-message-p">{message}</p>
      <button className="error-message-button" onClick={clear}>הבנתי ({timeleft})</button>
    </div>
    <br/>
    </>
  );
}

export default ErrorMessage;
