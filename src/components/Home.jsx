import React, { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import ServiceHighlights from "./ServiceHighlights";
import { products } from "../data";
import Cards from "./Cards";
import PromoArea from "./PromoArea";
import Footer from "./Footer";
import Toast from "./Toast";

function Home() {
  const [productlist, setproductlist] = useState(products);
  // console.log(productlist);

  return (
    <>
      <Navbar />
      <Banner />
      <ServiceHighlights />
      <div className="card-wrapper">
        <div className="container">
          <div className="card-inner">
            <div className="row">
              {productlist.map((carddata, index) => {
                return (
                  <div className="col-md-3">
                    <Cards data={carddata} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <PromoArea />
      <Footer />
      <Toast />
    </>
  );
}

export default Home;
