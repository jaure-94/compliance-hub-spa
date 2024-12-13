import { TestimonialsCard } from "@/components/TestimonialsCard";

const testimonialStatements = [
  {
    name: "Anonymous",
    company: "BetterOasis Limited",
    statement:
      "Leo was a professional, he really engaged with the team well. He wanted to understand how we worked and his feedback has helped us as organisation.",
  },
  {
    name: "Anonymous",
    company: "Smart Choice Healthcare Services",
    statement:
      "Leo was very easy going. He also spoke to us, not at us. He is very professional and answered everything we asked him. He also gave us solutions on how to fix what needed doing on our Compliance.",
  },
  {
    name: "Letsile Tebogo",
    company: "Example Company",
    statement:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies velit in tempor ullamcorper. Curabitur in quam consectetur, lobortis tortor eget, dapibus quam.",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-white pt-8 pb-10 md:pt-10 md:pb-24">
        <div className="container">
            <div className="flex flex-col justify-center">
                <h2 className="about-us-heading text-center mt-8 mb-10 w-full">Testimonials</h2>
                <p className="about-us-catch-phrase flex justify-center text-center lg:mx-80">Here's what our valued clients have to say about us...</p>
            </div>

            <div className="flex flex-col justify-center gap-8 md:flex-row md:flex-wrap mt-12">
                {testimonialStatements.map(({ name, company, statement }) => (
                    <TestimonialsCard
                        name={name}
                        company={company}
                        statement={statement}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}
