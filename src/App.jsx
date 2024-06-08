import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Team from "./components/teamMember/Team";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Portfolio />
      <Team />
    </>
  );
}

export default App;
