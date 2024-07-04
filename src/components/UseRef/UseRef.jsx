import { useRef, useState } from "react"

function UseRef() {
  const [name, setName] = useState('')
  const inputName = useRef();

  const handleOnCLick = () => {
    setName(inputName.current.value);
  }
  return (
    <div className="p-5 flex justify-center items-center">

      <div className="w-50em p-10 flex flex-col justify-center items-center gap-5 bg-[#DAD3BE] rounded-lg shadow-lg">
        <h1 className="font-bold text-3xl text-[#254336] text-center">UseRef Hook Example</h1>
        <input type="text" placeholder="Enter your name" ref={inputName} className="w-[20em] h-[2em] p-5 outline-none bg-transparent border-2 border-slate-50 rounded-md text-black font-semibold"/>
        <span className="text-[#6B8A7A] font-medium text-2xl">Name is <span className="text-[#254336]">{name} </span></span>
        <button onClick={handleOnCLick} className="px-3 py-2 font-medium rounded-md bg-[#B7B597] ease-in text-white transition-all hover:shadow-md hover:scale-105 hover:transition-all hover:ease-in">Submit</button>
      </div>

    </div>
  )
}

export default UseRef