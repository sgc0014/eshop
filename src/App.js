import React, { useState } from "react";
import "./App.css";
import useOuterClick from "./utils/useOuterClick";
import Navbar from "./component/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Category } from "./component/category";
import { Trending } from "./component/trending";
import Services from "./component/services";
import Footer from "./component/footer";
AOS.init();

function App() {
  const [mobileNav, setmobileNav] = useState(false);
  const [searchToggler, setsearchToggler] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");

  const innerRef = useOuterClick((ev) => {
    if (mobileNav) {
      setmobileNav(false);
    }
  });
  const searchRef = useOuterClick((ev) => {
    if (searchToggler) {
      setsearchToggler(false);
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setsearchTerm("");
  };

  return (
    <div className="App">
      <Navbar />

      <Category />

      <Trending />

      <Services />

      <Footer />
    </div>
  );
}

export default App;
