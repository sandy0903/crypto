import React, {useEffect, useState} from 'react'
import Coins from "./Coins"
const Home = () => {


  return (
    <div className='w-3/4 mx-auto text-center text-white '>

        <ul className='flex justify-between items-center mt-5  shadow-[0_3px_20px_10px_rgba(60,61,65,0.7)] px-2 py-3 rounded-sm'>
            <li className='hidden sm:block'>#</li>
            <li>Coin</li>
            <li >Price</li>
            <li className='hidden sm:block'>24h</li>
            <li className="hidden sm:block">Volume</li>
            <li className='hidden sm:block'>Mkt Cap</li>



        </ul>
        <Coins/>


    </div>
  )
}

export default Home