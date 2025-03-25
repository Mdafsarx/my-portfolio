"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TextWriter() {
  return (
    <Typewriter
      words={[
        "Frontend Developer",
        "Backend Developer",
        "MernStack Developer",
        "Next.js Developer",
        "React Developer",
        "Javascript Developer",
      ]}
      loop={Infinity}
      cursor
      cursorStyle=""
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  );
}
