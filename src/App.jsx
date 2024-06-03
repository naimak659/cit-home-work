import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
    </>
  );
}

export default App;
