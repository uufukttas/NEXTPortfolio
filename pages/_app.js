import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        ReactGA.initialize('G-RKS4T2VK5M');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return <>
            <Navigation/>
            <Component {...pageProps} />
            <Footer/>
    </>
}

export default MyApp