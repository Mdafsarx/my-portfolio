import Gravity, { MatterBody } from "@/components/ui/Gravity";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import TailwindIcon from "./icons/TailwindIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import ReactIcon from "./icons/ReactIcon";
import NextjsIcon from "./icons/NextjsIcon";
import ReduxIcon from "./icons/ReduxIcon";
import SassIcon from "./icons/SassIcon";
import JestIcon from "./icons/JestIcon";
import MongoDBIcon from "./icons/MongoDBIcon";
import NodejsIcon from "./icons/NodejsIcon";
import ExpressIcon from "./icons/ExpressjsIcon";
import FirebaseIcon from "./icons/FirebaseIcon";
import MongooseIcon from "./icons/MongooseIcon";
import DockerIcon from "./icons/DockerIcon";
import GraphqlIcon from "./icons/GraphqlIcon";

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-10 mt-auto">
      {skillData?.map((data, i) => (
        <div
          key={i + "skill"}
          className="relative h-48  border border-primary-100 background-animation"
        >
          <h1 className="text-xl text-center pt-6 font-bold text-gradient-top">
            {data?.category}
          </h1>
          <Gravity gravity={{ x: 0, y: 1 }}>
            {data?.skills?.map((IconData) => {
              const Icon = IconData.icon;
              const randomX = Math.random() * 60 + 20;
              const randomY = Math.random() * 20 + 5;

              return (
                <MatterBody
                  key={IconData.name}
                  matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                  x={`${randomX}%`}
                  y={`${randomY}%`}
                >
                  <div>{Icon}</div>
                </MatterBody>
              );
            })}
          </Gravity>
        </div>
      ))}
    </div>
  );
}

const skillData = [
  {
    category: "Frontend",
    skills: [
      { icon: <HtmlIcon />, name: "HTML" },
      { icon: <CssIcon />, name: "CSS" },
      { icon: <TailwindIcon />, name: "Tailwind CSS" },
      { icon: <JavascriptIcon />, name: "JavaScript" },
      { icon: <TypescriptIcon />, name: "TypeScript" },
      { icon: <ReactIcon />, name: "React.js" },
      { icon: <NextjsIcon />, name: "Next.js" },
      { icon: <ReduxIcon />, name: "Redux" },
      { icon: <SassIcon />, name: "SASS" },
      { icon: <JestIcon />, name: "Jest" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { icon: <MongoDBIcon />, name: "MongoDB" },
      { icon: <NodejsIcon />, name: "Node.js" },
      { icon: <ExpressIcon />, name: "Express.js" },
      { icon: <FirebaseIcon />, name: "Firebase" },
      { icon: <MongooseIcon />, name: "Mongoose" },
      { icon: <DockerIcon />, name: "Docker" },
      { icon: <GraphqlIcon />, name: "GraphQL" },
    ],
  },
];
