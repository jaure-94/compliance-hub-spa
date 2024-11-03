import AuditingIcon from "@/assets/business-icon-auditing.svg";
import DocumentationIcon from "@/assets/business-icon-documentation.svg";
import CultureIcon from "@/assets/business-icon-culture.svg";
import PeopleIcon from "@/assets/business-icon-people.svg";
import PerformanceIcon from "@/assets/business-icon-performance.svg";
import RecruitmentIcon from "@/assets/business-icon-recruitment.svg";
import Image from "next/image";

const servicesList = [
  {
    title: "Compliance Auditing",
    icon: <AuditingIcon className="h-10 lg:h-14" />,
    popular: true,
    description: "We conduct comprehensive audits of your immigration, recruitment, and employment practices. We also provide expert guidance on sponsor license management and right to work checks."
  },
  {
    title: "Talent Acquisition & Retention",
    icon: <RecruitmentIcon className="h-10 lg:h-14" />,
    popular: false,
    description: "From crafting compelling job descriptions to implementing retention strategies that foster employee engagement and loyalty, we are your partners in building a workforce that propels your business forward."
  },
  {
    title: "Performance Management",
    icon: <PerformanceIcon className="h-10 lg:h-14" />,
    popular: false,
    description: "We help you implement effective performance management systems tailored to your business needs, ensuring clear expectations, ongoing feedback, and fair evaluations, ultimately maximizing productivity and employee engagement."
  },
  {
    title: "Employee Relations",
    icon: <PeopleIcon className="h-10 lg:h-14" />,
    popular: false,
    description: "We assist you in building positive employee relations and creating a harmonious workplace where everyone feels valued and supported. Our experts can guide you in conflict resolution, communication strategies, and fostering a culture of respect and collaboration."
  },
  {
    title: "Workplace Culture & Well-being",
    icon: <CultureIcon className="h-10 lg:h-14" />,
    popular: false,
    description: "Investing in a positive workplace culture and the well-being of your employees is not just a trend—it's a strategic imperative for long-term success. Our HR consultancy services specialize in cultivating a thriving work environment where employee well-being is prioritized and organizational culture flourishes."
  },
  {
    title: "Documentation & Templates",
    icon: <DocumentationIcon className="h-10 lg:h-14" />,
    popular: false,
    description: "We equip you with essential HR documentation and templates, including contracts, handbooks, policies, and performance review forms, ensuring compliance and streamlining your HR processes."
  },
]

export const Services = () => {
  return (
    <section className="flex justify-center pt-10 pb-20 bg-[#030132]" id="services">
      <div className="container">
        <h2 className="heading-section-light text-center mt-8 mb-16 w-full">Our Audit & HR Consultancy Services</h2>
        <div className="flex flex-col justify-center gap-8 md:flex-row md:flex-wrap">
          {servicesList.map(({ title, icon, popular, description }) => (
            <div className="p-9 bg-blue-950 rounded-lg max-w-xs">
              <div className="h-10 mb-2 lg:mb-4 lg:h-14">
                {icon}
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="text-sm tracking-normal text-white/85 mt-5">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
