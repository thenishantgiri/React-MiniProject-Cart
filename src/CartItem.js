import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 99999,
      title: "iPhone",
      qty: "1",
      image: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  // we're using arrow functions to bind the value of this to the instance of the class
  increaseQuantity = () => {
    console.log("this", this);
  };

  render() {
    const { price, title, qty, image } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" src={image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs.{price}</div>
          <div style={{ color: "#777" }}>{qty}</div>
          <div className="cart-item-actions">
            {/* button */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/497/497496.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 130,
    width: 130,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
