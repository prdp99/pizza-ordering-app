import { Children } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children, mode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
