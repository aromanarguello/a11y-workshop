import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to our shop!</h1>
      <h1 className="subtitle">This is a super awesome store!</h1>
      {/* eslint-disable-next-line */}
      <img
        style={{ width: "50px", height: "50px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      />
      <div class="header">
        <div>Home</div>
        <div>Shop</div>
        <div>Cart</div>
      </div>
      <p>Item Name:</p>
      <input />
      <button>Search!</button>
    </div>
  );
}

export default App;
