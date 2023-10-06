import { FaCalendarAlt } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

interface FooterProps {
  gndr: string;
}

const Footer: React.FC<FooterProps> = ({ gndr }) => {
  return (
    <div className="fixed bottom-0 w-full bg-black flex justify-center items-center gap-x-10">
      <Link to={"/"}>
        <div
          className="py-2 flex flex-col items-center text-white text-2xl cursor-pointer hover:text-blue-300"
          onClick={() => {}}
        >
          <AiFillHome />
          <p className="text-white text-xs p-1">Home</p>
        </div>
      </Link>
      <Link to={`/${gndr}/today`}>
        <div
          className="py-2 flex flex-col items-center text-white text-2xl cursor-pointer hover:text-blue-300"
          onClick={() => {}}
        >
          <BsFillCalendarCheckFill />
          <p className="text-white text-xs p-1">Today</p>
        </div>
      </Link>
      <Link to={`/${gndr}/tomorrow`}>
        <div
          className="py-2  flex flex-col items-center text-white text-2xl cursor-pointer hover:text-blue-300"
          onClick={() => {}}
        >
          <FaCalendarAlt />
          <p className="text-white text-xs p-1">Tommorrow</p>
        </div>
      </Link>
      <div
        className="py-2 flex flex-col items-center text-white text-2xl cursor-pointer"
        onClick={() => {}}
      >
        <AiOutlineClockCircle />
        <p className="text-white text-xs p-1 hover:text-blue-300">Time</p>
      </div>
    </div>
  );
};

export default Footer;
