import Gravity, { MatterBody } from "@/components/ui/Gravity";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Skills() {
  const icons = [
    {
      icon: <FaTelegram className="text-5xl" />,
    },
    {
      icon: <FaFacebook className="text-5xl" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-10 mt-auto">
      <div className="relative h-48  border border-primary-100 bg-primary-100/25 rounded-lg">
        <Gravity gravity={{ x: 0, y: 1 }}>
          {icons.map((IconData, index) => {
            const Icon = IconData.icon;
            const randomX = Math.random() * 60 + 20;
            const randomY = Math.random() * 20 + 5;

            return (
              <MatterBody
                key={index}
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
    </div>
  );
}
