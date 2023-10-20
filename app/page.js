import { ABOUT } from "./components/about/ABOUT";
import Contact from "./components/contact/Contact";
import Fleets from "./components/fleets/Fleets";
import { HERO } from "./components/hero/HERO";
import { NAVBAR } from "./components/nav/NAVBAR";
import Quote from "./components/quote/Quote";
import Service from "./components/services/Service";

export default function Home() {
  return (
    <main className="">
      {/* <NAVBAR/> */}
      <HERO />
      <ABOUT />
      <Service />
      <Fleets />
      <Quote />
      <Contact />
    </main>
  );
}
