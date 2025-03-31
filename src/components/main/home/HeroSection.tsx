"use client";
import SectionName from "@/components/common/SectionName";
import TextWriter from "@/components/common/TextWriter";
import Skills from "@/components/Skills";
import React from "react";
import { BsDiscord, BsGithub, BsStackOverflow } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { SiDailydotdev } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="h-[650px] flex flex-col gap-3">
      <SectionName name="Hey I'm" />

      <h1 className="text-6xl font-bold background-animation px-3 py-2 w-fit h-20 flex items-center">
        <span className="text-gradient-top">
          <TextWriter />
        </span>
      </h1>

      <p className="max-w-md text-xl text-white2 pt-2">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>

      <div className="flex items-center gap-4 pt-4">
        {socialMedia?.map((item) => (
          <a
            key={item?.link}
            className="tooltip text-2xl w-fit p-2 text-primary-100 border border-primary-100 hover:bg-primary-100/20 rounded-lg cursor-pointer"
            data-tip={item.link}
            href={item.link}
            target="_blank"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <Skills />
    </section>
  );
};

export default HeroSection;

const socialMedia = [
  {
    icon: <BsDiscord />,
    link: "https://discord.com/",
  },
  {
    icon: <BsGithub />,
    link: " https://github. com/",
  },
  {
    icon: <BsStackOverflow />,
    link: "https://stackoverflow.com/",
  },
  {
    icon: <ImLinkedin2 />,
    link: "https://www.linkedin.com/",
  },
  {
    icon: <SiDailydotdev />,
    link: "https://www.linkedin.com1/",
  },
];
