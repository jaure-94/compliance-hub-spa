import { AccordionItem } from "@/components/AccordionItem";
import Image from "next/image";
import aboutUsImage from "@/assets/about-us-pic-edit.jpg";
import { SetStateAction, useState } from "react";

type Key = any;

const missionStatements = [
  {
    title: "Empowerment",
    statement: "Compliance Hub aims to equip businesses with the knowledge and tools they need to confidently navigate complex regulations and HR challenges."
  },
  {
    title: "Culture of Success",
    statement: "We believe that effective HR management is crucial for fostering a positive and engaged workforce, ultimately leading to business success."
  },
  {
    title: "Risk Mitigation",
    statement: "To us, it is important to proactively addressing potential compliance issues to avoid costly consequences."
  },
  {
    title: "Operational Optimization",
    statement: "We understand the value of streamlining HR processes and practices for improved efficiency and productivity."
  },
  {
    title: "Professionalism and Expertise",
    statement: "We pride ourselves with the depth of knowledge and experience Compliance Hub brings to the table."
  },
  {
    title: "Adaptability",
    statement: "We acknowledge the dynamic nature of compliance requirements and the need for ongoing support."
  },
]

export const About = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = (index: boolean) => {
    if (open === index) {
      return setOpen(false);
    }

    setOpen(index);
  }

  return (
    <section className="about-us-section" id="about">
      <div className="container">
        <div className="md:mt-10">
          <h2 className="about-us-heading text-left mt-4 mb-8 w-full">About Us</h2>
          <p className="about-us-catch-phrase lg:max-w-md">Partner with Compliance Hub to gain peace of mind...</p>
        </div>

        <div className="content flex flex-row justify-between gap-3 md:mt-8">
          <div className="max-w-md">
            <div>
              <p className="mt-8">Compliance Hub is a United Kingdom-based human resources
                and compliance services company that specializes
                in immigration, recruitment, employment compliance, and HR consultancy, providing
                unparalleled support tailored for care companies. We understand the unique challenges
                care providers face in managing sponsored workers and adhering to complex regulations.
                Our mission is to empower businesses to thrive in an ever changing regulatory landscape
                by providing expert compliance and HR solutions that mitigate risks, optimise operations,
                and foster a culture of success. 
              </p>
            </div>            
          </div>

          <div className="hidden md:block">
            <Image src={aboutUsImage} alt="Business Meeting" className="lg:w-[430px]" />
          </div>
        </div>

        <div className="mission mt-10 md:mt-20 border-2 border-gray-300 pt-3 pb-5 md:pt-7 md:pb-10">
          <div className="px-5 lg:px-10">
            <p className="text-xl font-light tracking-tighter text-[#001E80] lg:mb-4">Our mission statement encapsulates the following key aspects:</p>
            <ul className="flex flex-col gap-3 lg:gap-px justify-around">
              {missionStatements.map(({ title, statement }, index: number | boolean | Key | null | undefined) => (
                <AccordionItem
                  key={index}
                  open={index === open}
                  toggle={() => toggle(index)}
                  title={title}
                  statement={statement}
                />
              ))}                
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
