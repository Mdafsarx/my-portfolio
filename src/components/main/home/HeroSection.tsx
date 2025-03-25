import TextWriter from "@/components/common/TextWriter";
import React from "react";
import {
  BsDiscord,
  BsGithub,
  BsStackOverflow,
} from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { SiDailydotdev } from "react-icons/si";

const HeroSection = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-6xl font-semibold text-primary-100 bg-primary-100/20 rounded-md px-3 py-2.5 w-fit h-20">
        <TextWriter />
      </h1>

      <p className="max-w-md text-xl text-white">
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
    </div>
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
