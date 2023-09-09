import React from "react";

import Header from "./../Header/Header";
import Linkys from "./../Linkys/Linkys";
import Router from "../../router/Router";

export default function Arrange() {
  return (
    <>
      <Header />
      <Router />
      <Linkys />
    </>
  );
}
