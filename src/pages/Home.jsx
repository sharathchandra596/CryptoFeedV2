import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../contexts/CoinContext";
import Card from "../components/Card";

function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [dispalyCoin, setDispalyCoin] = useState([]);

  useEffect(() => {
    setDispalyCoin(allCoin);
  }, [allCoin]);
  return (
    <div className="home  p-3">
      <div className="text-white w-[50%] text-center m-auto">
        <h1 className="text-[50px]">Largest</h1>
        <h1 className="text-[50px]">Crypto Marketplace</h1>
        <p className="text-2xl">
          Welcome to the worlds largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
      </div>

      <div className="mt-4 text-center flex gap-4 justify-center">
        <input
          type="text"
          className=" w-1/2 h-8 rounded-lg bg-gray-100 outline-none p-2 text-xl px-4"
          placeholder="Eg: Bitcoin"
        />
        <button className="border p-1 text-white font-semibold  rounded-lg">
          Search
        </button>
      </div>

      <div className="cardBox flex flex-wrap gap-4 justify-center items-center m-3">
        {dispalyCoin.slice(0, 10).map((item, index) => (
          <Card
            key={index}
            name={item.name}
            img={item.image}
            rank={item.market_cap_rank}
            price={item.current_price}
            marketCap={item.market_cap}
            change24={item.price_change_percentage_24h}
            currency={currency}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
