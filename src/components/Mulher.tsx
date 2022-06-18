import { useEffect, useState } from "react";
import { ShowResult } from "./ShowResult";

export function Mulher() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [campoAltura, setCampoAltura] = useState(false);
  const [campoPeso, setCampoPeso] = useState(false);

  useEffect(() => {
    if (altura > 2.5) {
      const valor = altura / 100;

      if (valor > 2.5) {
        return setCampoAltura(true);
      } else {
        setAltura(valor);
        setCampoAltura(false);
      }
    }
  }, [peso, altura]);

  async function handleImcCalc() {
    if (!peso || peso > 500) {
      return setCampoPeso(true);
    } else {
      setCampoPeso(false);
    }

    if (!altura || altura > 250) {
      return setCampoAltura(true);
    } else {
      setCampoAltura(false);
    }

    const imc = (peso / (altura * altura)).toFixed(2);

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
                      focus-visible:ring-2 ring-pink-300"
              placeholder="Ex: 165"
              type="number"
              name="height"
              id="height"
              required={campoAltura}
              onChange={(e) => setAltura(Number(e.target.value))}
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
              focus-visible:ring-2 ring-pink-300"
              placeholder="Ex: 62"
              type="number"
              name="weight"
              id="weight"
              required={campoPeso}
              onChange={(e) => setPeso(Number(e.target.value))}
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
                  mt-4 rounded-sm bg-pink-300 hover:bg-pink-400
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
