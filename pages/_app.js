import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import ReactGA from 'react-ga'
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

function MyApp({Component, pageProps}) {
    return <>
            <div>
            <ReactGA.OutboundLink
                eventLabel="myLabel"
                to="http://www.example.com"
                target="_blank">
                My Link
                </ReactGA.OutboundLink>
            </div>
            <Navigation/>
            <Component {...pageProps} />
            <Footer/>
    </>
}

export default MyApp