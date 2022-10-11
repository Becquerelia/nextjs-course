import React from "react";
import Head from "next/head";

function PageLayout({children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
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
    </>
  );
}

export default PageLayout;
