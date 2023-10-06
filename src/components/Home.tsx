import { useState } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";

const Home = () => {
  const [isLoding, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 800);

  return (
    <>
      {isLoding ? (
        <Loading />
      ) : (
        <div className=" w-full h-screen flex justify-center items-center">
          <div className="flex flex-col h-1/2 justify-center items-center bg-black opacity-90 rounded-xl px-3 md:w-1/2 md:h-2/3 xl:w-1/2 xl:h-2/3">
            <h1 className="text-white text-3xl font-semibold p-8 text-center xl:text-5xl">
              Select Your Mess
            </h1>
            <div className="flex">
              <Link
                to={"/boys"}
                className="flex justify-center bg-white w-1/2 rounded-full m-8 border-4 border-blue-300"
              >
                <img
                  src={boy}
                  alt="boy"
                  className="w-[100px] h-[100px] p-4 md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] xl:p-6"
                />
              </Link>
              <Link
                to={"/girls"}
                className="flex justify-center bg-white w-1/2 rounded-full m-8 border-4 border-green-300"
              >
                <img
                  src={girl}
                  alt="girl"
                  className="w-[100px] h-[100px] p-4 md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] xl:p-6"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
