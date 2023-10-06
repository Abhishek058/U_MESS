import { useState } from "react";

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

  return (
    <div className="HomeMain w-full h-screen flex justify-center items-center">
      <div className="flex flex-col h-2/3 items-center bg-black opacity-90 rounded-lg py-8 px-3">
        <h1 className="text-white text-3xl font-semibold p-8 text-center xl:text-5xl">
          Select Your Mess
        </h1>
        <div className="m-12">
          <select
            id="menu"
            className="outline-none border-none rounded-md h-10 w-56 overflow-hidden"
            value={mess}
            onChange={(e) => {
              setMess(e.target.value);
            }}
          >
            {hostel.map((item) => {
              return <option>{item.name}</option>;
            })}
          </select>
        </div>

        <button className="bg-green-500 px-6 py-2 rounded-md m-10 font-semibold hover:bg-green-400 hover:scale-125 hover:text-white transition-all duration-300">
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
