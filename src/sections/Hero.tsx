import ArrowIcon from "@/assets/arrow-right.svg";
import landingImage from "@/assets/ch-landing-mobile-blue.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="hero-section lg:min-h-[95vh]" id="home">
      <div className="container">
        <div className="md:flex lg:justify-between">
          <div className="md:w-[478px] lg:w-[700px]">
            <div className="tag md:text-sm">Secure your business's future & thrive:</div>
            <h1 className="heading-primary md:text-4xl lg:text-6xl">Expert compliance auditing & HR consultancy services.</h1>
            <p className="text-lg lg:text-lg text-[#010D3E] tracking-tight mt-6 lg:mt-14">At Compliance Hub, we help care providers navigate UK immigration, employment law, and optimize HR practices. Secure your business with a comprehensive compliance audit and HR consultancy services.</p>
            <div className="flex gap-1 items-center mt-[20px] md:mt-[25px] lg:mt-24">
              <a href="#about">
                <button className="btn btn-primary">Learn more</button>
              </a>
              <a href="#contact">
                <button className="btn btn-text gap-1 hover:gap-2 hover:font-bold">
                  <span>Get in touch</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-14 md:ml-16 md:h-[350px] lg:ml-12">
            <Image src={landingImage} alt="Handshake Image" className="md:w-[400px] lg:w-[550px]"/>
          </div>
        </div>
      </div>
    </section>
  )
};
