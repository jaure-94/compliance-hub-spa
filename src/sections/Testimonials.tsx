import { TestimonialsCard } from "@/components/TestimonialsCard";

const testimonialStatements = [
    {
      company: "BetterOasis Limited",
      statement: "The team at Compliance Hub conducted themselves professionally, they really engaged with our team well. They wanted to understand how we worked and their feedback has helped us as an organisation."
    },
    {
      company: "Smart Choice Healthcare Services",
      statement: "Leo at Compliance Hub was very easy going. He also spoke to us, not at us. The Compliance Hub team is very professional and answered everything we asked of them. They also gave us solutions on how to fix what needed doing on our Compliance."
    },
]

export const Testimonials = () => {
  return (
    <section className="bg-white pt-8 pb-10 md:pt-10 md:pb-24">
      <div className="container">
        <div className="flex flex-col justify-center">
          <h2 className="about-us-heading text-center mt-8 mb-10 w-full">Testimonials</h2>
          <p className="about-us-catch-phrase flex justify-center text-center lg:mx-80">Here's what our valued clients have to say about us...</p>
        </div>

        <div className="flex flex-col justify-center gap-8 md:flex-row md:flex-wrap mt-12">
          {testimonialStatements.map(({ company, statement }) => (
            <TestimonialsCard
              company={company}
              statement={statement}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
