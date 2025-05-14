import { useContext } from "react";
import { CartContext } from "../App";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const handleincrement = (id) => {
    const obj = cart.find((item) => item.id === id);
    if (obj.qty >= 10) return;

    const findIndex = cart.findIndex((item) => item.id === id);
    const updatedQty = { ...obj, qty: obj.qty + 1 };
    cart[findIndex] = updatedQty;

    setCart([...cart]);
  };

  const handledecrement = (id) => {
    const obj = cart.find((item) => item.id == id);
    if (obj.qty <= 1) return;
    const findindex = cart.findIndex((item) => item.id == id);
    const updateqty = { ...obj, qty: obj.qty - 1 };
    cart[findindex] = updateqty;
    setCart([...cart]);
  };
  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />
      <div className="cart-wrapper">
        <div className="container">
          <div className="cart-inner">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Description</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                          src={item.image}
                          alt="cart"
                        />
                      </td>
                      <td>
                        <div className="detail-of-product">
                          <h5>{item.title}</h5>
                          <div className="cart-prod-prices">
                            <strong>{item.price}</strong>
                            <p>{item.discount}</p>
                          </div>
                          <div className="quantity">
                            <button onClick={() => handledecrement(item.id)}>
                              -
                            </button>
                            <span>{item.qty}</span>
                            <button onClick={() => handleincrement(item.id)}>
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="delete">
                          <strong>{item.price * item.qty}</strong>
                          <button onClick={() => handleDelete(item.id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className=" total-price mt-4">
              <h4>Total Price:</h4>
              <h4>${totalAmount.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
