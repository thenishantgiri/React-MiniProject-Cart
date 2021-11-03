import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "MacBook Pro",
          price: 245000,
          qty: 1,
          img: "https://t4.ftcdn.net/jpg/01/93/97/61/240_F_193976127_Y0QpwEf8mSk74vfCGdXCFA6zyXfMxj8L.jpg",
          id: 1,
        },
        {
          title: "iPhone",
          price: 99999,
          qty: 1,
          img: "https://t3.ftcdn.net/jpg/03/95/79/12/240_F_395791244_Y78KXtZUeSOFjjOPX6gsMSHlR1ajAouZ.jpg",
          id: 2,
        },
        {
          title: "iWatch",
          price: 49999,
          qty: 1,
          img: "https://t4.ftcdn.net/jpg/03/68/78/73/240_F_368787316_Y8DQNkThcfroHZqcKbweB2eDCB8ITUzs.jpg",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (productDetails) => {
    console.log("update increase");
    const { products } = this.state;
    const index = products.indexOf(productDetails);

    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (productDetails) => {
    const { products } = this.state;
    const index = products.indexOf(productDetails);

    if (products[index].qty === 0) return;

    products[index].qty -= 1;

    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const newList = products.filter((product) => product.id !== id);

    this.setState({ products: newList });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          // we'll pass the attribute "productDetails' as props to the CartItem
          // we have added key to the props, in order to help react differentiate one cart item from another
          return (
            <CartItem
              productDetails={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteItem={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
