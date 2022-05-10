import React, { useState, useEffect } from "react";
import { storeProducts } from "./data";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  const [content, setContent] = useState({
    products: [],
    detailProduct: [],
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  });

  useEffect(() => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    let subTotal = 0;
    content.cart.map((item) => (subTotal += item.total));
    const temptax = subTotal * 0.1;
    const tax = parseFloat(temptax.toFixed(2));
    const total = subTotal + tax;
    setContent({
      products: products,
      cart: [...content.cart],
      detailProduct: content.detailProduct,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  }, [content.products, content.cart, content.detailProduct]);

  const getItem = (id) => {
    const product = storeProducts.find((item) => item.id === id);
    return product;
  };
  const handleDetail = (id) => {
    setContent({
      detailProduct: getItem(id),
      cart: content.cart
    });
  };

  const addToCart = (id) => {
    let tempProducts = [...storeProducts];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setContent({
      products: [...tempProducts],
      cart: [product, ...content.cart],
      detailProduct: content.detailProduct
    });
  };

  const increment = (id) => {
    let tempCart = [...content.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setContent({
      cart: [...tempCart]
    });
  };
  const decrement = (id) => {
    let tempCart = [...content.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setContent({
        cart: [...tempCart]
      });
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...storeProducts];
    let tempCart = [...content.cart];
    const index = tempProducts.indexOf(getItem(id));
    const removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    tempCart = tempCart.filter((item) => item.id !== id);
    setContent({
      cart: [...tempCart],
      products: [...tempProducts]
    });
  };

  const clearCart = () => {
    let tempProducts = [...storeProducts];
    tempProducts.map((item) => (item.inCart = false));
    tempProducts.map((item) => (item.count = 0));
    tempProducts.map((item) => (item.total = 0));
    setContent({
      cart: [],
      products: [...tempProducts]
    });
  };

  return (
    <ProductContext.Provider
      value={{
        content: content,
        handleDetail,
        addToCart,
        increment,
        decrement,
        removeItem,
        clearCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
