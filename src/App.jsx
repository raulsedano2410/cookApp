import "./App.css";
import Home from "./view/Home/Home";
import AboutUs from "./view/AboutUs/AboutUs";
import Services from "./view/Services/Services";
import Customers from "./view/Customers/Customers";
import ContactUs from "./view/ContactUs/ContactUs";
import Footer from "./view/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import StateCompo from "./context/StateCompo";

import TestDB from "./components/Testdb/TestDB";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <StateCompo>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className="container-sections">
              <nav className="nav">
                <Navbar />
              </nav>
              <section className="home">
                <Home />
              </section>
              <section className="about-us">
                <AboutUs />
              </section>
              <section className="services">
                <Services />
              </section>
              <section className="customers">
                <Customers />
              </section>
              {
                /* <section className='contact-us'>
                                                                    <ContactUs />
                                                                    </section> */
              }
              <section className="footer">
                <Footer />
              </section>
            </div>
          }
        />
        <Route path="/myspace/" element={<TestDB />} />
      </Routes>
    </StateCompo>
  );
}

export default App;
