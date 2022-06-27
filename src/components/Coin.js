import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Coin = () => {
  const [coin, setCoin] = useState();
  const { coinId } = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      const coin = await res.json();
      coin && setCoin(coin);
    };
    fetchCoin();
  }, [coinId]);

  console.log(coin);
  return (
    <div className="md:w-1/2 w-11/12 mx-auto text-white">
      {coin ? (
        <>
          <h1 className="font-bold uppercase w-full text-center py-3 shadow-[0_3px_20px_10px_rgba(60,61,65,0.7)] my-4 rounded-md">
            {coin.name}
          </h1>
          <div className=" rounded-md px-2 py-3 shadow-[0_3px_20px_10px_rgba(60,61,65,0.7)] mb-4">
            <p className="bg-indigo-800 rounded-sm w-[fit-content] mb-2 px-2">
              Rank #{coin.market_cap_rank}
            </p>
            <div className="flex items-center justify-between">
              <div class="flex items-center">
                <div className="">
                  <img src={coin.image && coin.image.thumb} />
                </div>
                <p className="md:block hidden font-bold ml-2">{coin.name}</p>
                <p className="font-bold ml-2 uppercase">{coin.symbol}/USD</p>
              </div>
              <h1 className="font-bold text-3xl pr-5">
                ${coin.market_data.current_price.usd}
              </h1>
            </div>
          </div>
          <div className="text-center rounded-md px-2 py-3 shadow-[0_3px_20px_10px_rgba(60,61,65,0.7)] mb-4 grid md:grid-cols-6 grid-cols-4 gap-1">
            <div className="text-sm">
              <p className="bg-slate-700 mb-2">1h</p>
              {coin.market_data?.price_change_percentage_1h_in_currency ? (
                <p>
                  {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
            </div>
            <div className="text-sm">
              <p className="bg-slate-700 mb-2">24h</p>
              {coin.market_data?.price_change_percentage_24h_in_currency ? (
                <p>
                  {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
            </div>
            <div className="text-sm">
              <p className="bg-slate-700 mb-2">7d</p>
              {coin.market_data?.price_change_percentage_7d_in_currency ? (
                <p>
                  {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
            </div>
            <div className="text-sm">
              <p className="bg-slate-700 mb-2">14d</p>
              {coin.market_data?.price_change_percentage_14d_in_currency ? (
                <p>
                  {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
            </div>
            <div className="text-sm md:block hidden">
              <p className="bg-slate-700 mb-2">30d</p>
              {coin.market_data?.price_change_percentage_30d_in_currency ? (
                <p>
                  {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
            </div>
            <div className="text-sm md:block hidden">
              <p className="bg-slate-700 mb-2">1y</p>
              {coin.market_data?.price_change_percentage_1y_in_currency ? (
                <p>
                  {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </p>
              ) : null}
            </div>
          </div>
          <div className=" rounded-md px-2 py-3 shadow-[0_3px_20px_10px_rgba(60,61,65,0.7)] mb-4 block md:flex items-center justify-between text-sm">
            <div className=" w-full md:w-1/2 mr-2 flex flex-col justify-between">
              <h4 className=" mb-2 pb-2 border-blue-100 border-b">24 Hour Low
              {coin.market_data?.low_24h ? (
                <span className="ml-2">${coin.market_data.low_24h.usd.toLocaleString()}</span>
              ) : null}
              </h4>
              <h4 className=" mb-2 pb-2 border-blue-100 border-b">24 Hour High
              {coin.market_data?.high_24h ? (
                <span className="ml-2">${coin.market_data.high_24h.usd.toLocaleString()}</span>
              ) : null}
              </h4>
            </div>
            <div className="w-full md:w-1/2 md:text-right md:ml-2">
              <h4 className=" mb-2 pb-2 border-blue-100 border-b">Market Cap
              {coin.market_data?.market_cap ? (
                <span className="ml-2">${coin.market_data.market_cap.usd.toLocaleString()}</span>
              ) : null}
              </h4>
              <h4 className=" mb-2 pb-2 border-blue-100 border-b">Circulating Supply
              {coin.market_data ? (
                <span className="ml-2">{coin.market_data.circulating_supply}</span>
              ) : null}
              </h4>
            </div>
          </div>
          <div className="rounded-md text-justify px-2 py-3 shadow-[0_3px_20px_10px_rgba(60,61,65,0.7)] mb-4  text-sm">
            <h4 className="font-bold mb-2">About</h4>
            <p className="leading-4" dangerouslySetInnerHTML={{
                            __html: (coin.description ? coin.description.en : ''),
                        }}>
                        </p>
          </div>
        </>
      ) : (
        <h1 className="font-bold">Loading</h1>
      )}
    </div>
  );
};

export default Coin;
