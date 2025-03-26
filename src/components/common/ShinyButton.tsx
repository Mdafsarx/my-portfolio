import React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({ children }) => {
  return (
    <button
      className={
        "relative px-10 py-2.5 bg-primary-100/80 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_5px_#8E4BEB33,_0_0_25px_10px_#A06BFF33] active:scale-95 active:[0_0_15px_5px_#8E4BEB33,_0_0_25px_10px_#A06BFF33] group mt-auto"
      }
    >
      <span className="flex items-center gap-2 text-white font-bold">
        {children}
      </span>
    </button>
  );
};

export default ShinyButton;
