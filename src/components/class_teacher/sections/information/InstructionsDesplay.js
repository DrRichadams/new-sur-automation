import React from "react";
import "./styles/information.css";

const InstructionsDisplay = ({ contents }) => {
  return (
    <div className="instructions_details_container">
      <div className="idc_title">{contents.title}</div>
      <div className="idc_contents">
        {/* <p>( a ): Something here</p>
        <p>( b ): Another thing here</p> */}
        {contents.details.map((detail) => (
          <p key={Math.random()}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default InstructionsDisplay;
