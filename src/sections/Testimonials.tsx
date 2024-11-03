import { TestimonialsCard } from "@/components/TestimonialsCard";

const testimonialStatements = [
    {
        name: "Leo Kaluza",
        company: "Example Company",
        statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies velit in tempor ullamcorper. Curabitur in quam consectetur, lobortis tortor eget, dapibus quam."
    },
    {
        name: "Fred Kurley",
        company: "Example Company",
        statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies velit in tempor ullamcorper. Curabitur in quam consectetur, lobortis tortor eget, dapibus quam."
    },
    {
        name: "Letsile Tebogo",
        company: "Example Company",
        statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies velit in tempor ullamcorper. Curabitur in quam consectetur, lobortis tortor eget, dapibus quam."
    },
    {
        name: "JJ Redick",
        company: "Example Company",
        statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies velit in tempor ullamcorper. Curabitur in quam consectetur, lobortis tortor eget, dapibus quam."
    },
    {
        name: "Lebron James",
        company: "Example Company",
        statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies velit in tempor ullamcorper. Curabitur in quam consectetur, lobortis tortor eget, dapibus quam."
    },
    {
        name: "Dalton Knecht",
        company: "Example Company",
        statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies velit in tempor ullamcorper. Curabitur in quam consectetur, lobortis tortor eget, dapibus quam."
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
