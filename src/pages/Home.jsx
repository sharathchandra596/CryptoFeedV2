

function Home() {
  return (
    <div className="home mt-6 p-3">
        <div className="text-white w-[50%] text-center m-auto" >
          <h1 className="text-[60px]">Largest</h1>
          <h1  className="text-[60px]">Crypto Marketplace</h1>
          <p className="text-3xl">Welcome to the worlds largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        </div>

        <div className="mt-4 text-center flex gap-4 justify-center">
          <input type="text" className=" w-1/2 h-12 rounded-lg bg-gray-100 outline-none p-2 text-2xl px-4" placeholder="Eg: Bitcoin" />
          <button className="text-2xl border p-1 text-white font-semibold  rounded-lg">Search</button>
        </div>

        <div className="table">
          <div className="table-laout">
            
          </div>
        </div>

    </div>
  )
}

export default Home
