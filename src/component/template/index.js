import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";

function Template(){

  return(
    <>
        <Header/>
      <section>
        <Outlet/>
      </section>
        <Footer/>
    </>
  )

}

export default Template