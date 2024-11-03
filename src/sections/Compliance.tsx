import { ListItem } from "@/components/ListItem";
import { AccordionTick } from "@/components/AccordionTick";
import { useState } from "react";

const auditServices = [
  {
    service: "Sponsorship License Management"
  },
  {
    service: "Right to Work Checks"
  },
  {
    service: "Working Time Regulations"
  },
  {
    service: "Pay and Benefits"
  },
  {
    service: "Record keeping"
  }
]

const complianceBenefits = [
  {
    title: "Mitigate risks",
    statement: "Identify potential vulnerabilities in your sponsorship license management, right to work checks, and employment practices."
  },
  {
    title: "Ensure compliance",
    statement: "Stay up-to-date with the latest regulations and avoid costly penalties."
  },
  {
    title: "Protect your reputation",
    statement: "Demonstrate your commitment to ethical and legal employment practices."
  },
  {
    title: "Optimise operations",
    statement: "Streamline your HR processes for efficiency and effectiveness."
  }
]

export const Compliance = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }

    setOpen(index);
  }

  return (
    <section className="py-10 md:py-20">
      <div className="container flex flex-col justify-center">
        <div>
          <h2 className="about-us-heading mt-4 mb-8 w-full">Compliance Auditing</h2>
          <p className="about-us-catch-phrase lg:max-w-lg">We specialize in auditing businesses to ensure compliance...</p>
        </div>

        <div className="max-w-full">
          <p className="mt-8">Compliance auditing is like a check-up for a business to make sure it's following all
            the rules and regulations that apply to it. We specialize in auditing businesses to ensure compliance with
            immigration, recruitment, and employment regulations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-30 mt-14 p-5 md:p-10 border-2 border-gray-300">
          <div>
            <p className="text-xl font-light tracking-tighter text-[#001E80] lg:mb-2">Our audit includes:</p>
            <ul className="flex flex-col gap-3 lg:gap-px justify-around">
              {auditServices.map(({ service }, index) => (
                <ListItem
                  key={index}
                  title={service}
                />
              ))} 
            </ul>
          </div>

          <div>
            <p className="text-xl font-light tracking-tighter text-[#001E80] lg:mb-2">The <span className="text-[#49af48] font-semibold">benefits</span> of conducting regular compliance audits include:</p>
            <ul className="flex flex-col gap-3 lg:gap-px justify-around">
            {complianceBenefits.map(({ title, statement }, index) => (
                <AccordionTick
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
  )
}
