import { useMemo, useState } from "react"

function UseMemo() {
  const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0)

  function Cube(number) {
    console.log('Calculated...');
    return Math.pow(number, 3);
  }

  const result = useMemo(() => Cube(number), [number])

  return (
    <div className="p-5 flex justify-center items-center">

      <div className="w-50em p-10 flex flex-col justify-center items-center gap-5 bg-[#DAD3BE] rounded-lg shadow-lg">
        <h1 className="font-bold text-3xl text-[#254336] text-center">UseMemo Hook Example</h1>

        <input type="number" placeholder="Enter any number" value={number} onChange={(e) => setNumber(e.target.value)} className="w-[20em] h-[2em] p-5 outline-none bg-transparent border-2 border-slate-50 rounded-md text-black font-semibold" />
        <span className="text-[#6B8A7A] font-medium text-2xl">Cube of numer is <span className="text-[#254336]">{result} </span></span>

        <span className="text-[#6B8A7A] font-medium text-2xl">Count is <span className="text-[#254336]">{count} </span></span>
        <button className="px-3 py-2 font-medium rounded-md bg-[#B7B597] ease-in text-white transition-all hover:shadow-md hover:scale-105 hover:transition-all hover:ease-in" onClick={() => setCount(count + 1)}>Count + 1 </button>
      </div>

    </div>
  )
}

export default UseMemo