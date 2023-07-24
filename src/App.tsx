import React from "react";
import logo from "./logo.svg";
import { RouterProvider } from "react-router-dom";
import Navbar from "./common/navbar-component";
import { router } from "./router-helper";
import Contact from "./common/contact-component";
import Footer from "./common/footer-component";
function App() {
  return (
    <div className="bg-sky-100 p-5 md:p-8 lg:p-10 overflow-hidden">
      <div className="ml-30 mr-30 bg-white">
        <Navbar />
        <RouterProvider router={router} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
