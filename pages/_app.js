import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Works from "../Components/Works";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Works/>
      <Footer />
    </>
  );
}

export default MyApp;
