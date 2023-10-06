import React from "react";
import Footer from "./Footer";

interface TodayProps {
  menu: {
    breakFast?: string;
    lunch?: string;
    snack?: string;
    dinner?: string;
  }[];
}

const Today: React.FC<TodayProps> = ({ menu }) => {
  const date = new Date();

  const todayMenu = menu[date.getDay()];

  return (
    <div>
      <div>Breakfast: {todayMenu.breakFast}</div>
      <div>Lunch: {todayMenu.lunch}</div>
      <div>Snacks: {todayMenu.snack}</div>
      <div>Dinner: {todayMenu.dinner}</div>
      <Footer />
    </div>
  );
};

export default Today;
