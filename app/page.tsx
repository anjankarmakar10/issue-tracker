import { Metadata } from "next";
import About from "./About";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};
