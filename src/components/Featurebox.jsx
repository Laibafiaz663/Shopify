import React from "react";

function Featurebox(props) {
  return (
    <div className="feature-box-col">
      <div className="feature-icon">
        <i className={props.data.iconClass}></i>
      </div>
      <div className="feature-description">
        <strong className="feature-title">{props.data.title}</strong>
        <span className="feature-descriptions">{props.data.description}</span>
      </div>
    </div>
  );
}

export default Featurebox;
