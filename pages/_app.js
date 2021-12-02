import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {
    return <>
            <Navigation/>
            <Component {...pageProps} />
            <Footer/>
    </>
}

export default MyApp