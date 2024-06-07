import { useContext } from "react";
import { CoinContext } from "../contexts/CoinContext";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandelar = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="flex justify-between items-center p-4 border-b border-white">
      <h1 className="text-4xl font-sans text-white from-neutral-100">
        CryptoFeed
      </h1>
      <ul className="flex gap-4 list-none text-xl text-white font-semibold">
        <li className=" cursor-pointer hover:text-gray-400">Home</li>
        <li className=" cursor-pointer hover:text-gray-400">Features</li>
        <li className=" cursor-pointer hover:text-gray-400">Pricing</li>
        <li className=" cursor-pointer hover:text-gray-400">Blog</li>
      </ul>
      <div className="flex gap-6 items-center">
        <select
          onChange={currencyHandelar}
          className=" outline-none w-[70px] h-[30px] text-center text-xl font-medium m-2 bg-transparent border  rounded-lg text-white"
        >
          <option className=" bg-purple-700  " value="usd">
            USD
          </option>
          <option className=" bg-purple-700  " value="eur">
            EUR
          </option>
          <option className=" bg-purple-700  " value="inr">
            INR
          </option>
        </select>

        <button className=" w-[100px]  h-[30px] text-xl font-semibold text-black rounded-xl bg-white  border hover:bg-transparent hover:text-white">
          SignUp
        </button>
      </div>
    </div>
  );
}

export default Navbar;
