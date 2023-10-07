import React, { useState } from "react";
import Footer from "./Footer";
import Loading from "./Loading";

interface TimeProp {
  gender: string;
}

const Timing: React.FC<TimeProp> = ({ gender }) => {
  const time = [
    { meal: "Breakfast", time: "07:30 AM - 08:45 AM" },
    { meal: "Lunch", time: "12:00 Noon - 02:00 PM" },
    { meal: "Snacks", time: "04:00PM  - 05:00 PM" },
    { meal: "Dinner", time: "07:30 PM - 10:00 PM" },
  ];
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 800);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="w-full text-center py-4 bg-gray-500 shadow-2xl">
            <h1 className="text-4xl font-semibold">Timming</h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-x-4 p-4">
            {time.map((item, index) => {
              return (
                <div key={index} className="bg-black w-[350px] p-4 rounded-lg m-3">
                  <h1 className="text-xl my-2 text-white font-bold">
                    {item.meal}:
                  </h1>
                  <p className="text-gray-300 text-center">
                   {item.time}
                  </p>
                </div>
              );
            })}
          </div>
          <Footer gndr={gender} />
        </div>
      )}
    </>
  );
};

export default Timing;
