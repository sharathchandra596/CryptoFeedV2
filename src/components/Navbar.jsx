

function Navbar() {
  return (
    <div className="flex justify-between items-center p-7 border-b border-white">
     <h1 className="text-5xl font-sans text-white from-neutral-100">CryptoFeed</h1>
      <ul className="flex gap-4 list-none text-2xl text-white font-semibold">
        <li className=" cursor-pointer hover:text-gray-300" >Home</li>
        <li className=" cursor-pointer hover:text-gray-300" >Features</li>
        <li className=" cursor-pointer hover:text-gray-300" >Pricing</li>
        <li className=" cursor-pointer hover:text-gray-300" >Blog</li>
      </ul>
      <div className="flex gap-6 items-center">
        <select className=" outline-none w-[90px] h-[40px] text-center text-2xl font-medium m-2 bg-transparent border  rounded-lg text-white" >
            <option className=" bg-purple-700  "  value="usd">USD</option>
            <option className=" bg-purple-700  " value="eur">EUR</option>
            <option className=" bg-purple-700  " value="inr">INR</option>
        </select>

        <button className=" w-[150px]  h-[40px] text-2xl font-semibold text-black rounded-xl bg-white  border hover:bg-transparent hover:text-white">SignUp</button>
      </div>
    </div>
  )
}

export default Navbar
