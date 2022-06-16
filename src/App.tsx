import { useEffect, useState } from "react";
import { Homem } from "./components/Homem";
import { Mulher } from "./components/Mulher";

const indice = [
  '<span id="subPeso">Abaixo do peso</span>',
  '<span id="pesoNormal">Peso normal</span>',
  '<span id="sobPreso">Sobrepeso</span>',
  '<span id="obsGrau1">Obesidade grau 1</span>',
  '<span id="obsGrau2">Obesidade grau 2</span>',
  '<span id="obsGrau3">Obesidade grau 3</span>',
];

export default function App() {
  const [tab, setTab] = useState(false);

  const [{ peso, altura }, setData] = useState({
    peso: "",
    altura: "",
  });

  function handleSetDataFromInput() {
    setData((data) => ({ peso: "", altura: "" }));
  }

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div>
        <div>
          <button onClick={() => setTab(!tab)}>Mulher</button>
          <button onClick={() => setTab(!tab)}>Homem</button>
        </div>
        {!tab ? <Mulher /> : <Homem />}
      </div>
    </div>
  );
}
