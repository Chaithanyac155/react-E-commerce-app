import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "./Context";
import { storeProducts } from "./data";

export default function ProductList() {
  let navigate = useNavigate();

  const { products = storeProducts, handleDetail, addToCart } = useContext(
    ProductContext
  );

  return (
    <div className="container py-4">
      <div className="row">
        {products.map((item) => {
          const { id, img, title, inCart, price } = item;
          return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 mb-5" key={id}>
              <div className="card bg-light text-center">
                <Link
                  to="/productdetails"
                  onClick={() => handleDetail(id)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="img-container">
                    <img src={img} className="card-img-top" alt="mobile" />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>
                      price: <span className="text-primary">${price}</span>
                    </p>
                  </div>
                </Link>
                <div className="card-footer" style={{ padding: "1px" }}>
                  <div
                    className={inCart ? "in_cart_footer" : "add_to_cart_footer"}
                  >
                    {inCart ? (
                      <button
                        onClick={() => navigate("/cart")}
                        className="cart_btn"
                      >
                        CHECK CART
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(id)}
                        className="cart_btn"
                      >
                        ADD TO CART
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
