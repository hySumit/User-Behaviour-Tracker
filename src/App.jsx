import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Recommendations } from "./components/Recommendations";
import Product from "./components/Product";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Recommendations />
      <Product />
    </>
  );
}

export default App;
