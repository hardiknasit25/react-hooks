import UseEffect from "./components/UseEffect/UseEffect";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef/UseRef";
import UseState from "./components/Usestate/UseState";

export default function App() {
  return (
    <div className="h-full w-fullp-5">
      <UseState/>
      <UseEffect/>
      <UseRef/>
      <UseMemo/>
    </div>
  )
}