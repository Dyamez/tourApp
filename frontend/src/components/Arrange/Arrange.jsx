import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Router from "../../router/Router";

export default function Arrange() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}
