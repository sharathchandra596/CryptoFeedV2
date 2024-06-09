/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
function Card({name,img,rank,price,marketCap,change24,currency,coinId}) {
  return (
    <Link to={`/coin/${coinId}`} className=' w-53 bg-gray-400 rounded-2xl p-2  flex flex-col justify-center  items-center cursor-pointer hover:bg-slate-100  '>
        <h2 className='text-2xl  text-yellow-900 '>#{rank}</h2>
        <img className='w-[60px] text-center items-center' src={img} alt="" />
        <p className='text-xl font-serif'>{name}</p>

        <p>Price: {currency.symbol} {price.toLocaleString()}</p>
        <p>24hr change : <span className={`${change24>0? "text-green-800 font-bold" : "text-red-600 font-bold"}`}>{change24}%</span> </p>
        <p>Marketcap: {marketCap.toLocaleString()}</p>

    </Link>
  )
}

export default Card
