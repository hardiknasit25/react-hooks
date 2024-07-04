import UseCallback from "./components/UseCallback/UseCallback";
import UseEffect from "./components/UseEffect/UseEffect";
import UseMemo from "./components/UseMemo/UseMemo";
import UseRef from "./components/UseRef/UseRef";
import UseState from "./components/Usestate/UseState";

export default function App() {
  return (
    <div className="flex flex-wrap p-5 justify-start items-center">
      <UseState/>
      <UseEffect/>
      <UseRef/>
      <UseMemo/>
      <UseCallback/>
    </div>
  )
}