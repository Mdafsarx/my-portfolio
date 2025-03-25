import React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({ children, className }) => {
  return (
    <button
      className={
        "relative px-10 py-2.5 bg-primary-100 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_10px_#8E4BEB66] active:scale-95 active:shadow-[0_0_10px_5px_#8E4BEB33] group mt-auto"
      }
    >
      <span className={className}>{children}</span>
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary-100/20 to-primary-100/20" />
    </button>
  );
};

export default ShinyButton;
