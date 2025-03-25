"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineViewColumns } from "react-icons/hi2";
import { PiDetectiveFill } from "react-icons/pi";
import { BiHome } from "react-icons/bi";

const navigation = [
  { name: "Home", icon: <BiHome /> },
  { name: "About", icon: <PiDetectiveFill /> },
  { name: "Project", icon: <HiOutlineViewColumns /> },
  { name: "Skills", icon: <LiaLaptopCodeSolid /> },
  { name: "Education", icon: <LuGraduationCap /> },
  { name: "contact", icon: <MdOutlineEmail /> },
];

export const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <header className="bg-[#6a6b6b66]  rounded-lg w-fit mx-auto px-4 h-12 flex items-center mb-20">
      <nav className="flex items-center gap-8">
        {navigation.map((item) => {
          const isSelected = item.name === selectedLink;
          return (
            <a
              key={item.name}
              className={`relative cursor-pointer ${
                isSelected ? "text-[#7043EC]" : "text-white"
              }`}
              onClick={() => setSelectedLink(item.name)}
            >
              <span className={`text-2xl`}>{item.icon}</span>
              {isSelected && (
                <motion.div className="absolute -bottom-2 -left-1">
                  <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                    <motion.path
                      d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                      stroke="#7043EC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{
                        strokeDasharray: 84.20591735839844,
                        strokeDashoffset: 84.20591735839844,
                      }}
                      animate={{
                        strokeDashoffset: 0,
                      }}
                      transition={{
                        duration: 1,
                      }}
                    />
                  </svg>
                </motion.div>
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
