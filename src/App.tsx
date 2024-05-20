import React from "react";
import "./components/Trip.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <ItemsList />
      <Footer></Footer>
    </div>
  );
}

export default App;
