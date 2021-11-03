import React from "react";

const CartItem = (props) => {
  const { price, title, qty, img } = props.productDetails;
  const {
    productDetails,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct,
  } = props;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt="" src={img} />
      </div>

      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs. {price}</div>
        <div style={{ color: "#777" }}>{qty}</div>

        <div className="cart-item-actions">
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
            onClick={() => onIncreaseQuantity(productDetails)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            onClick={() => onDecreaseQuantity(productDetails)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/497/497496.png"
            onClick={() => onDeleteProduct(productDetails.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
