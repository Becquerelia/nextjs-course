import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <style jsx>{`
        header {
          padding: 20px;
        }
      `}</style>
    </>
  );
}

export default MyApp;
