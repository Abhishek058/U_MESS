import React from "react";
import Footer from "./Footer";
import breakFastImg from "../assets/breakfast.png";
import lunchImg from "../assets/lunch.png";
import snackImg from "../assets/snacks.png";
import dinnerImg from "../assets/dinner.png";
import Loading from "./Loading";

interface TomorrowProps {
  menu: {
    breakfast?: string;
    lunch?: string;
    snack?: string;
    dinner?: string;
  }[];
  gender: string;
}

const Tomorrow: React.FC<TomorrowProps> = ({ menu, gender }) => {
  const date = new Date();

  const TomorrowMenu = menu[date.getDay()];

  const menuItem = [
    { type: "breakfast", img: breakFastImg, text: TomorrowMenu.breakfast },
    { type: "lunch", img: lunchImg, text: TomorrowMenu.lunch },
    { type: "snack", img: snackImg, text: TomorrowMenu.snack },
    { type: "dinner", img: dinnerImg, text: TomorrowMenu.dinner },
  ];

  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 800);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="w-full text-center py-4 bg-gray-500 shadow-2xl">
            <h1 className="text-4xl font-semibold">Tomorrow's Menu</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            {menuItem.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-start w-[350px] bg-gray-700 gap-x-6 m-3 p-4 rounded-lg"
                >
                  <img src={item.img} alt={item.type} className="w-[70px]" />
                  <p className="w-full text-center text-lg text-white">
                    {item.text}
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

export default Tomorrow;
