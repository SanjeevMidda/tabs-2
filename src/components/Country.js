import React, { useState } from "react";

const Country = ({ borderColor, text, contentText }) => {
  const [status, setStatus] = useState(false);

  return (
    <div
      className="country-container"
      style={{
        borderTop: status
          ? `3px solid ${borderColor}`
          : `1px solid ${borderColor}`,
        height: status ? "60%" : "20px",
      }}
    >
      <h3 onClick={() => setStatus(!status)}>{text}</h3>

      {status ? <p>{contentText}</p> : <p></p>}
    </div>
  );
};

export default Country;
