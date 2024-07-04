import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1)
    }, 2000)
  }, [count])

  return (
    <div className="p-5 flex justify-center items-center">

      <div className="w-50em p-10 flex flex-col justify-center items-center gap-5 bg-[#DAD3BE] rounded-lg shadow-lg">
        <h1 className="font-bold text-[2em] text-[#254336] items-center text-center">UseEffect Hook Example</h1>
        <span className="text-[#6B8A7A] font-medium text-[1.5em]">Count is <span className="text-[#254336]">{count} </span></span>
      </div>
    </div>
  )
}

export default UseEffect