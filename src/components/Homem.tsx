import { useEffect, useState } from "react";
import { ShowResult } from "./ShowResult";

export function Homem() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(0);
  const [campoAltura, setCampoAltura] = useState(false);
  const [campoPeso, setCampoPeso] = useState(false);

  function handleImcCalc() {
    if (!peso || Number(peso) > 500) {
      setCampoPeso(true);
    } else {
      setCampoPeso(false);
    }

    if (!altura || Number(altura) > 2.5) {
      setCampoAltura(true);
    } else {
      setCampoAltura(false);
    }

    const alt = Number(altura.replace(",", "."));
    const pes = Number(peso.replace(",", "."));

    const imc = (pes / (alt * alt)).toFixed(2);

    setResultado(Number(imc));
  }

  return (
    <div className="flex flex-col w-full py-4 gap-5 text-gray-500">
      <div className="flex flex-col">
        <span>Altura</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-sm mr-2 required:border-red-500
                      invalid:border-red-500 focus:outline-none relative
                      focus-visible:ring-2 ring-blue-400"
              placeholder="Ex: 1.65"
              type="text"
              name="height"
              id="height"
              required={campoAltura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-400 md:w-24">
            centímetros
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span>Peso</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-sm mr-2 required:border-red-500
              invalid:border-red-500 focus:outline-none relative
              focus-visible:ring-2 ring-blue-400"
              placeholder="Ex: 62"
              type="text"
              name="weight"
              id="weight"
              required={campoPeso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-400 md:w-24">
            Kilos
          </span>
        </div>
      </div>
      <div>
        <button
          className="w-full text-center p-3 font-bold text-white transition-all
                  mt-4 rounded-sm bg-blue-400 hover:bg-blue-500
                  cursor-pointer select-none"
          onClick={handleImcCalc}
        >
          Calcular
        </button>
      </div>
      <ShowResult imc={resultado} />
    </div>
  );
}
