"use client";

import { useEffect, useState } from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Footer } from "@/sections/Footer";
import { Contact } from "@/sections/Contact";
import { About } from "@/sections/About";
import { Compliance } from "@/sections/Compliance";
import { Loader } from "@/components/Loader";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fakeDtaFetch = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 50);
    }

    fakeDtaFetch();
  }, [])

  return ( isLoading ? ( <Loader /> ) : (
      <>
        <Header />
        <Hero />
        <About />
        <Services />
        <Compliance />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    )
  );
}
