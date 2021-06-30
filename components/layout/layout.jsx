import Navigations from "../navigation/navigations";
import { Fragment } from "react";

export default function Layout({ children }) {
  return (
    <Fragment>
      <header>
        <Navigations />
      </header>

      <main className="main">{children}</main>
    </Fragment>
  );
}
