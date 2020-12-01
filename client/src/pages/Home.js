import React from "react";
import { Category } from "../component/category";
import { Trending } from "../component/trending";
import Services from "../component/services";
import Footer from "../component/footer";

export function Home(props) {
  return (
    <>
      <Category />

      <Trending />

      <Services />

      <Footer />
    </>
  );
}
