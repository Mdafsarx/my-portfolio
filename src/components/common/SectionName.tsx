import React from "react";
interface SectionName {
  name: string;
}

const SectionName: React.FC<SectionName> = ({ name }) => {
  return (
    <h3 className="text-xl font-medium background-animation  w-fit px-2 py-1">
      <span className="text-gradient-top-right">{name}</span>
    </h3>
  );
};

export default SectionName;
