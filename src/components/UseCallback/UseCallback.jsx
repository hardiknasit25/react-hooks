import { useCallback, useState } from "react"
import Temp from "./Temp.jsx"

function UseCallback() {
  const [count, setCount] = useState(0)

  const newFn = useCallback(()=> {}, [])
 
  return (
    <div className="p-5 flex justify-center items-center">
      <Temp newFn={newFn}/>
      <div className="w-50em p-10 flex flex-col justify-center items-center gap-5 bg-[#DAD3BE] rounded-lg shadow-lg">
        <h1 className="font-bold text-3xl text-[#254336] text-center">UseCallback Hook Example</h1>
        <span className="text-[#6B8A7A] font-medium text-2xl">Count is <span className="text-[#254336]">{count} </span></span>
        <button className="px-3 py-2 font-medium rounded-md bg-[#B7B597] ease-in text-white transition-all hover:shadow-md hover:scale-105 hover:transition-all hover:ease-in" onClick={() => setCount(count + 1)}>Count + 1 </button>
      </div>

    </div>
  )
}

export default UseCallback