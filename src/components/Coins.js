import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const Coins = () => {
  const {coins} =useGlobalContext()
  
  return (
    <div className="flex flex-col justify-center">
      {coins.map((item, index) => {
        const {
          id,
          current_price,
          price_change_percentage_24h,
          market_cap,
          total_volume,
          image,
        } = item;
        return (
          <Link to={`/coin/${id}`} key={index}>
            <ul className="flex justify-between items-center mt-5  shadow-[0_3px_20px_10px_rgba(60,61,65,0.7)] px-2 py-3 rounded-sm">
              <li className="hidden sm:block">{index + 1}</li>
              <li className="w-20">
                <img src={image} className="w-10" />
              </li>
              <li>${current_price}</li>
              <li>{price_change_percentage_24h}%</li>
              <li>${total_volume}</li>
              <li className="hidden sm:block">${market_cap}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
