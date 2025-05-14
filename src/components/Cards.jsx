import React from "react";
import { useContext } from "react";
import { CartContext } from "../App"; //import context
import { ToastContext } from "../App"; //import context
import { Link } from "react-router-dom";

function Cards(props) {
  // console.log(props);
  const cartContext = useContext(CartContext); //use context
  // console.log(cartContext);
  const toastcontext = useContext(ToastContext);

  const handlecart = (pro) => {
    cartContext.setCart([...cartContext.cart, pro]);
    toastcontext.setToast("Product Added to Cart");
  };

  return (
    <>
      <div className="product-card-col mb-3">
        <div className="card">
          <img src={props.data.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="card-subtitle">{props.data.category}</span>
            <Link to={`/product/${props.data.id}`}>
              <h5 className="card-title">{props.data.title}</h5>
            </Link>
            <div className="prod-ratings">
              <div className="prod-ratings-icon">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </div>
              <strong>{props.data.rating}</strong>
            </div>
            <div className="prod-price-wrapper">
              <div className="prod-price">
                <span className="discounted-price">{props.data.price}</span>
                <div className="old-price-wrapper">
                  <span className="oldprice">{props.data.oldPrice}</span>
                  <strong className="discount">{props.data.discount}</strong>
                </div>
              </div>
              <button
                className="cart-btn"
                disabled={
                  cartContext.cart.find((a) => a.id == props.data.id)
                    ? true
                    : false
                }
                onClick={() => handlecart(props.data)}
              >
                <div className="cart-icon">
                  <i className="bi bi-cart"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
