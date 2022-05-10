import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "./Context";

const ProductDetails = (props) => {
  let navigate = useNavigate();
  const { content, addToCart } = useContext(ProductContext);
  const {
    img,
    title,
    company,
    info,
    id,
    inCart,
    price
  } = content.detailProduct;

  return (
    <div className="container py-3 py-lg-5">
      <div className="row" key={id}>
        <div className="col-12 col-sm-12 col-md-12 py-3 py-md-0 py-lg-0 text-md-center col-lg-6">
          <img
            className="mobile_img  border border-5 border-info rounded-circle"
            src={img}
            alt="mobile"
            style={{ width: "450px", height: "350px" }}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-8 mx-auto text-lg-start col-lg-6 details">
          <p>
            Model : <span className="h5 ms-2">{title}</span>
          </p>
          <p>
            Made By : <span className="h5 ms-2">{company}</span>
          </p>
          <p>
            Price : <span className="h5 ms-2">${price}</span>
          </p>
          <p style={{ textAlign: "justify" }}>
            About Product:
            <span className="d-block">{info}</span>
          </p>
          <div className="d-block mb-2">
            <Link to="/">
              <button className="btn btn-warning me-4">Back To Products</button>
            </Link>

            {inCart ? (
              <button
                onClick={() => navigate("/cart")}
                className="btn btn-secondary"
              >
                CHECK CART
              </button>
            ) : (
              <button onClick={() => addToCart(id)} className="btn btn-info">
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
