import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Team from "./components/teamMember/Team";
import Exprience from "./components/CustomerExprience/Exprience";
import BlogCard from "./components/BlogPost/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Portfolio />
      <Team />
      <Exprience />
      <BlogCard />
      <Footer />
    </>
  );
}

export default App;
