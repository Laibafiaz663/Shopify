import React, { useState } from "react";
import Featurebox from "./Featurebox";
import { features } from "../data";

function ServiceHighlights() {
  const [featuredata] = useState(features);

  return (
    <div className="feature-box-wrapper mb-5">
      <div className="container">
        <div className="feature-box-inner">
          <div className="row">
            {featuredata.map((f, index) => (
              <div className="col-md-3" key={index}>
                <Featurebox data={f} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHighlights;
