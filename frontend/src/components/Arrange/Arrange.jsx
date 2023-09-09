import React from "react";

import Header from "./../Header/Header";
import Linkys from "./../Linkys/Linkys";
import Footer from "./../Footer/Footer";
import Router from "../../router/Router";

export default function Arrange() {
  return (
    <>
      <Header />
      <Router />
      <Linkys />
      <Footer />
    </>
  );
}
