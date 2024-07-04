import { useState } from "react"

function UseState() {

  const [count, setCount] = useState(0)

  const handleOnClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="w-full p-5 flex justify-center items-center">

      <div className="w-[30%] p-10 flex flex-col justify-center items-center gap-5 bg-[#DAD3BE] rounded-lg shadow-lg">
        <h1 className="font-bold text-3xl text-[#254336]">UseState Hook Example</h1>
        <span className="text-[#6B8A7A] font-medium text-2xl">Count is <span className="text-[#254336]">{count} </span></span>
        <button onClick={handleOnClick} className="px-3 py-2 font-medium rounded-md bg-[#B7B597] ease-in text-white transition-all hover:shadow-md hover:scale-105 hover:transition-all hover:ease-in">Count + 1</button>
      </div>
    </div>
  )
}

export default UseState