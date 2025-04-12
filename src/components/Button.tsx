import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick ?: () => void ;
  pointer ?: boolean;
}

const varientStyle = {
  primary: "bg-[#5046e4] text-white",
  secondary: "bg-[#e0e7ff] text-[#4b43b9]",
};

const defaultStyle = "flex items-center px-3 py-2 m-2 rounded-lg";

export const Button = ({ variant, text, endIcon, startIcon, onClick, pointer }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${varientStyle[variant]} ${defaultStyle} ${pointer? "cursor-pointer": ""}`}>
      <div className="pr-2">{startIcon}</div>
      {text}
      <div className="pl-2">{endIcon}</div>
    </button>
  );
};
