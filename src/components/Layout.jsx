import React from "react";
import Head from "./Head";
import Nav from "./Nav";
import Menu from "./menu";
import Scrolltotop from "./Scrolltotop";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <Head />
      <Nav />
      <Menu />
      <div>{children}</div>
      <Footer />
      <Scrolltotop />
    </>
  );
}

export default Layout;
