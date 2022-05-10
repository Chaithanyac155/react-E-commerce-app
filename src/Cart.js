import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./Context";
import Counter from "./Counter";

const Cart = () => {
  const {
    content,
    increment,
    decrement,
    removeItem,
    clearCart,
    handleDetail
  } = useContext(ProductContext);

  return (
    <div
      className="container-fluid py-4"
      style={{ height: content.cart.length > 1 ? "auto" : "100vh" }}
    >
      <div className="container">
        <div className="row justify-content-between">
          {content.cart.length > 0 ? (
            <div className="col-sm-12 col-md-7 col-lg-7">
              {content.cart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="d-flex flex-column d-lg-flex flex-lg-row  align-items-center justify-content-evenly bg-light col-12 mb-4 border rounded"
                  >
                    <div className="cart_img py-4 mx-auto col-sm-12 col-md-6">
                      <Link
                        to="/productdetails"
                        onClick={() => handleDetail(item.id)}
                      >
                        <img
                          src={item.img}
                          className="rounded"
                          alt="mobile"
                          width="100%"
                          height="100%"
                        />
                      </Link>
                    </div>

                    <div className="d-flex flex-column mx-auto col-11 col-sm-12 col-md-8 col-lg-6">
                      <h5 className="d-flex justify-content-between">
                        <span className="fw-light">productname: </span>
                        {item.title}
                      </h5>
                      <h5 className="d-flex justify-content-between">
                        <span className="fw-light">price: </span> ${item.price}
                      </h5>
                      <div className="d-flex py-4 justify-content-between">
                        <Counter
                          item={item}
                          increment={increment}
                          decrement={decrement}
                        />
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="btn btn-danger"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="text-center" style={{ margin: "10vh 0" }}>
                <p className="h3 text-muted">your cart is currently empty!</p>
                <Link to="/">
                  <button className="btn btn-info mt-2">SHOP NOW</button>
                </Link>
              </div>
            </div>
          )}
          <div className="col-sm-12 col-md-5 col-lg-4">
            <div
              className="border rounded py-5 px-3"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <h5 className="d-flex justify-content-between">
                <span className="fw-light">total cart price: </span>$
                {content.cartSubTotal}
              </h5>
              <h5 className="d-flex justify-content-between">
                <span className="fw-light">tax: </span>${content.cartTax}
              </h5>
              <hr />
              <h5 className="d-flex justify-content-between">
                <span className="fw-light">total: </span>${content.cartTotal}
              </h5>
            </div>
            <div className="d-flex mt-3 justify-content-between">
              {content.cart.length > 0 && (
                <button
                  type="button"
                  onClick={() => clearCart()}
                  className="btn btn-secondary px-md-2 px-lg-3"
                >
                  CLEAR CART
                </button>
              )}
              <button
                type="button"
                onClick={() => clearCart()}
                disabled={content.cart.length > 0 ? false : true}
                className="btn btn-warning px-md-2 px-lg-3"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
