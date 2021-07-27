import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Footer from "../components/footer/footer";


function Portfolio({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Footer />
    </>

  );
}

export default Portfolio;
