import React from "react";
import Head from "next/head";

function PageLayout({children}) {
  return (
    <>
      <Head>
        <title>Learning NextJS</title>
        <meta
          name="description"
          content="Creating an app for learning NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>News-App</header>
      <main>
        {children}
      </main>
      <style jsx>{`
        header {
          padding: 20px;
        }
      `}</style>
    </>
  );
}

export default PageLayout;
