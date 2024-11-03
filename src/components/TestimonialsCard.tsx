export const TestimonialsCard = ({ name, company, statement }: { name: string, company: string, statement: string }) => {
  return (
    
    <div className="p-9 rounded-lg border-[3px] border-solid border-gray-300 shadow-[0+7px_14px_#EAEAEA] max-w-xs">
      <p>"{statement}"</p>
      <p className="text-sm text-blue-950 font-semibold mt-3 tracking-tighter">{name} - {company}</p>
    </div>
    
  )
}
