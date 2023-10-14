import Image from "next/image";
import heroImg from "@/public/images/hero.png";

import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { BsFillShareFill } from "react-icons/bs";

export default function Hero() {
  const icons = [
    {
      id: 1,
      icon: <FaTwitter />,
    },
    {
      id: 2,
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      icon: <FaFacebookF />,
    },
    {
      id: 4,
      icon: <BsFillShareFill />,
    },
  ];

  return (
    <section className="bghero hero-h  flex items-center text-slate-800">
      <div className="max-w-7xl mx-auto p-8 md:p-12 flex items-center gap-12 flex-col md:flex-row">
        <div className="flex-1 relative h-[415px] rounded-lg shadow-md shadow-[#ff9124] overflow-hidden hidden lg:block">
          <Image src={heroImg} fill alt="Hero Image" />
        </div>
        <div className="flex-1 flex flex-col flex-shrink">
          <h1 className="text-4xl md:text-5xl font-bold md:leading-snug mb-4">
            Best Issue Tracking <br /> Software for 2023
          </h1>
          <p className="md:text-lg mb-5">
            Empower your team with the best issue tracking software of 2023.
            Streamline problem-solving and project management with our intuitive
            platform.
          </p>
          <div className="flex gap-7">
            {icons.map((icon) => (
              <div
                key={icon.id}
                className=" h-[40px] w-[40px] md:h-[60px] md:w-[60px] rounded-full hover:-translate-y-1 transition-all duration-500 bg-white cursor-pointer grid place-content-center text-xl md:text-3xl hover:text-blue-500"
              >
                {icon.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
