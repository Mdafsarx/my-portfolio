import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import ShinyButton from "./ShinyButton";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const StickyCard = () => {
  return (
    <div className="bg-gray-100 w-[350px] h-[650px] rounded-2xl p-7 flex flex-col items-center gap-5">
      <Image
        src={data.image}
        alt=""
        width={0}
        height={0}
        className="rounded-2xl w-60 h-72"
        unoptimized
      />
      <div className="text-center space-y-3 ">
        <h1 className="text-3xl font-semibold capitalize">{data?.name}</h1>
        <div className="space-y-3">
          {data?.contact.map((item, index) => (
            <p
              key={index}
              className="flex items-center gap-1 bg-gray-200 h-8 rounded-md text-white w-fit mx-auto"
            >
              <span className="bg-primary-100 h-full px-1 rounded-l-md flex items-center">
                {item.icon}
              </span>
              <span className="pr-2 pl-0.5">{item.value}</span>
            </p>
          ))}
        </div>
      </div>
      <ShinyButton className="flex items-center gap-2 font-semibold">
        Resume <BsDownload />
      </ShinyButton>
    </div>
  );
};

export default StickyCard;

const data = {
  image:
    "https://res.cloudinary.com/dbrceqag4/image/upload/v1742808494/H3gQyzjQNWcYB4RqhjHgnNIOI_nxwhxd.avif",
  name: "Md Afsar Mahmud",
  contact: [
    {
      type: "email",
      icon: <HiOutlineMail className="-mb-0.5 text-2xl" />,
      value: "mdafsar.dev@gmail.com",
    },
    {
      type: "phone",
      icon: <FiPhone className="-mb-0.5 text-xl" />,
      value: "+8801722877040",
    },
  ],
};
