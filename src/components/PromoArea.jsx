import React from "react";
import banner from "../assets/images/banner.webp";

const PromoArea = () => {
  return (
    <>
      <div className="promoarea-wrapper">
        <div className="promoarea-inner">
          <div className="row">
            <div className="col-md-6">
              <div className="imagecol promo-col">
                <img src={banner} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="promoarea-content promo-col">
                <div className="promocontent-col">
                  <h2>Don't miss the offers!</h2>
                  <strong>Grab it now</strong>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoArea;
