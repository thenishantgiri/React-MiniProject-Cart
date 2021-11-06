import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

import firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        // {
        //   title: "MacBook Pro",
        //   price: 245000,
        //   qty: 1,
        //   img: "https://t4.ftcdn.net/jpg/01/93/97/61/240_F_193976127_Y0QpwEf8mSk74vfCGdXCFA6zyXfMxj8L.jpg",
        //   id: 1,
        // },
        // {
        //   title: "iPhone",
        //   price: 99999,
        //   qty: 1,
        //   img: "https://t3.ftcdn.net/jpg/03/95/79/12/240_F_395791244_Y78KXtZUeSOFjjOPX6gsMSHlR1ajAouZ.jpg",
        //   id: 2,
        // },
        // {
        //   title: "iWatch",
        //   price: 49999,
        //   qty: 1,
        //   img: "https://t4.ftcdn.net/jpg/03/68/78/73/240_F_368787316_Y8DQNkThcfroHZqcKbweB2eDCB8ITUzs.jpg",
        //   id: 3,
        // },
      ],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // for fetching data once
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();

    //       data["id"] = doc.id;
    //       return data;
    //     });

    //     this.setState({ products, loading: false });
    //   });

    // for fetching data everytime the some change happens (add listener #socket)
    this.db.collection("products").onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data["id"] = doc.id;
        return data;
      });

      this.setState({
        products,
        loading: false,
      });
    });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products: products,
    // });

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({ qty: products[index].qty + 1 })
      .then(() => {
        console.log("Updated successfully");
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) return;

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({ qty: (products[index].qty -= 1) })
      .then(() => {
        console.log("Updated successfully");
      })
      .catch((err) => {
        console.error("Error: ", err);
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

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal += product.price * product.qty;
    });

    return cartTotal;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 900,
        qty: 3,
        title: "Washing Machine",
      })
      .then((docRef) => {
        console.log("Product has been added", docRef);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a Product
        </button> */}
        <Cart
          productDetails={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>loading products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
