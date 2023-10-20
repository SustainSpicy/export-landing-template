import { About } from "./components/about/About";
import Contact from "./components/contact/Contact";
import Fleets from "./components/fleets/Fleets";
import Footer from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/nav/Navbar";

import Quote from "./components/quote/Quote";
import Service from "./components/services/Service";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Fleets />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
