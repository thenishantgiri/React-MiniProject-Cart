import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { productDetails } = props;
  return (
    <div className="cart">
      {productDetails.map((product) => {
        // we'll pass the attribute "productDetails' as props to the CartItem
        // we have added key to the props, in order to help react differentiate one cart item from another
        return (
          <CartItem
            productDetails={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Cart;
