//? this code for managing a shopping cart with book-related functionality, including item addition, modification, removal, and item count calculation. It utilizes React Router for navigation with routes such as Home, Book Info, Cart, and Books. It also includes a navigation bar for user interaction

//! IMPORT STYLES
import "./styles.css";
//! REACT IMPORTS
import React, { useState, useEffect } from "react";
//! PAGE IMPORTS
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import Books from "./pages/Books";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
//! CONSTANT IMPORT
import { books } from "./data";

function App() {

  //? useState for the item's in the cart
  const [cart, setCart] = useState([]);

  //? adds a book to the cart with a quantity of 1
  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  //? changes the quantity of a specific book in the cart
  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: quantity,
            }
          : item
      )
    );
  }

  //? removes an item from the cart
  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  //? calculates and returns the total number of items in the cart
  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
