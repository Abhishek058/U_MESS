import { useEffect, useState } from "react";
import Loading from "./Loading";
import { hostel } from "../mess";
import { Link } from "react-router-dom";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";

const Home = () => {
  const hostel = [
    { name: "Select Hostel. . . ." },
    { name: "Magllen" },
    { name: "Darwin" },
    { name: "Archemedes" },
    { name: "Pie" },
    { name: "IBN" },
    { name: "Nightangle" },
  ];

  const [mess, setMess] = useState("Select Hostel. . . .");
  const [isLoding, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {});

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="flex flex-col h-1/2 justify-center items-center bg-black opacity-90 rounded-xl px-3">
        <h1 className="text-white text-3xl font-semibold p-8 text-center xl:text-5xl">
          Select Your Mess
        </h1>
        <div className="flex">
          <Link
            to={"/boys"}
            className="flex justify-center bg-white w-1/2 rounded-full m-8"
          >
            <img src={boy} alt="boy" className="w-[100px] h-[100px] p-4" />
          </Link>
          <Link
            to={"/girls"}
            className="flex justify-center bg-white w-1/2 rounded-full m-8"
          >
            <img src={girl} alt="girl" className="w-[100px] h-[100px] p-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
