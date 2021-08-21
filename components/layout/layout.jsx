import Navigations from "../navigation/navigations";
import { Fragment } from "react";
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>{`Pramod's Portfolio`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf" />
        <meta name="description" content="Pramod bhusal portfolio website. Engineering graduate from Tribhuwan university Nepal"/>
        <meta  name="keywords" content="Pramod , bhusal, portfolio, engineer, developer"/>
        <meta name="author" content="Pramod bhusal"/>
      </Head>
      <header>
        <Navigations />
      </header>

      <main className="main">{children}</main>
    </Fragment>
  );
}
