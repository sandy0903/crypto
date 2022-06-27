import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
//  const [coinId, setCoinId]=useState("bitcoin")

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h"
      );
      const data = await res.json();
      data && setCoins(data);
    };
    fetchData();
  }, []);
  
// const changeCoinId= async (newCoin)=>{
//     try {
//         const res= await fetchCoin(newCoin)
//         const data=await res.json()
//         return data
//     } catch (error) {
//         console.log("Error change CoinID:", error)

//     }

// }
  return (
    <AppContext.Provider value={{ coins, fetchCoin }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
