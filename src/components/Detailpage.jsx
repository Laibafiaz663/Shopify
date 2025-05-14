import React from "react";
import { useParams } from "react-router";
import { products } from "../data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { CartContext } from "../App"; //import context
import { ToastContext } from "../App"; //import context
import Toast from "./Toast";
import Cards from "./Cards";

function Detailpage() {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const toastcontext = useContext(ToastContext);
  const handlecart = (pro) => {
    setCart([...cart, pro]);
    toastcontext.setToast("Product Added to Cart");
  };
  const foundproduct = products.find((a) => a.id == id);
  return (
    <>
      <Navbar />
      <div className="detailpage-wrapper">
        <div className="container">
          <div className="detail-page-inner">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-col">
                  <img
                    src={foundproduct.image}
                    className="card-img-top big-img"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-col detail-col-des">
                  <h2>{foundproduct.title}</h2>
                  <div className="prod-ratings">
                    <div className="prod-ratings-icon big-img-icon">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                    </div>
                    <strong>{foundproduct.rating}</strong>
                  </div>
                  <span className="card-subtitle">{foundproduct.category}</span>
                  <div className="detail-page-buttons">
                    <button
                      className="cart-btn"
                      disabled={
                        cart.find((a) => a.id == foundproduct.id) ? true : false
                      }
                      onClick={() => handlecart(foundproduct)}
                    >
                      <div className="cart-icon">
                        <i className="bi bi-cart"></i>
                      </div>
                      <span className="hover-label">Buy Now</span>
                    </button>

                    <button className="cart-btn">
                      <div className="cart-icon">
                        <i className="bi bi-bag-fill"></i>
                      </div>
                      <span className="hover-label">Buy Now</span>
                    </button>

                    <button className="cart-btn">
                      <div className="cart-icon">
                        <i className="bi bi-heart"></i>
                      </div>
                      <span className="hover-label">Add to Wishlist</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Similar Products Section */}
        {foundproduct && (
          <div className="similar-products-section mt-5">
            <div className="container">
              <h3 className="mb-4">Similar Products</h3>
              <div className="row">
                {products
                  .filter(
                    (item) =>
                      item.category === foundproduct.category &&
                      item.id !== foundproduct.id
                  )
                  .map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>
                      <Cards data={item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <Toast />
    </>
  );
}

export default Detailpage;
