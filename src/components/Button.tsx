import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Button = (props: {
  variant: "primary" | "secondary" | "text";
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, children, variant, iconBefore, iconAfter, ...rest } = props;

  return (
    <button className={twMerge(
      "h-11 w-fit px-6 gap-2 rounded-xl border border-blue-500 inline-flex items-center transition duration-500 relative",
      variant === "primary" && "bg-orange-600 text-white gap-2",
      variant === "secondary" && "hover:bg-orange-600 hover:border-orange-600 hover:text-white",
      variant === "text" && "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-[1px] after:w-0 after:absolute after:top-full after:bg-blue-500 hover:after:w-full hover:text-blue-500 hover:transition-all hover:duration-500",
      className
    )} {...rest}>
      {iconBefore && <span>{iconBefore}</span>}
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  )
}

export default Button