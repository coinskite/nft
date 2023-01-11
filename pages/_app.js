import Footer from "../comp/Footer";
import Nav from "../comp/Nav";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
