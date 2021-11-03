import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
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

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

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

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          productDetails={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
