import { FaCalendarAlt } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full py-2 bg-black flex justify-center items-center gap-x-16">
      <div className="py-2 flex flex-col items-center text-white text-2xl cursor-pointer hover:text-blue-300">
        <BsFillCalendarCheckFill />
        <p className="text-white text-xs p-1">Today</p>
      </div>
      <div className="py-2  flex flex-col items-center text-white text-2xl cursor-pointer hover:text-blue-300">
        <FaCalendarAlt />
        <p className="text-white text-xs p-1">Tommorrow</p>
      </div>
      <div className="py-2 flex flex-col items-center text-white text-2xl cursor-pointer">
        <AiOutlineClockCircle />
        <p className="text-white text-xs p-1 hover:text-blue-300">Time</p>
      </div>
    </div>
  );
};

export default Footer;
