import React from "react";
import laptop from "../assets/images/laptop.png";

function Banner() {
  return (
    <>
      <div className="banner-wrapper mb-4">
        <div className="banner-first-inner">
          <div className="container">
            <div className="banner-inner">
              <div className="row">
                <div className="col-md-6">
                  <div className="banner-col">
                    <strong className="banner-amount">Starting At $999</strong>
                    <h1>The best notebook collection 2024</h1>
                    <strong className="banner-offer">
                      Exclusive offer <small>-10%</small> off this week
                    </strong>
                    <button>Shop Now</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner-col">
                    <figure>
                      <img src={laptop} />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
