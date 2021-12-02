import 'tailwindcss/tailwind.css'
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

function MyApp({Component, pageProps}) {
    return <>
            <Navigation/>
            <Component {...pageProps} />
            <Footer/>
    </>
}

export default MyApp