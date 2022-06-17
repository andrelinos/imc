import { useEffect, useState } from "react";
import { Homem } from "./components/Homem";
import { Mulher } from "./components/Mulher";

export default function App() {
  const [tab, setTab] = useState(false);

  const [{ peso, altura }, setData] = useState({
    peso: "",
    altura: "",
  });

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-custom">
      <div
        className={`p-4 text-2xl font-bold text-center mb-1 ${
          tab ? "text-shadow-blue" : "text-shadow-pink"
        } mt-12`}
      >
        Calculadora de IMC
      </div>
      <div
        className="md:mx-auto md:w-96 bg-white p-6 rounded-sm shadow-drop-bottom
                      swing-in-top-fwd transition-all bg-opacity-70 z-10"
      >
        <div className="flex gap-4">
          <button
            className={`flex-1 p-2 rounded-sm hover:bg-pink-400 hover:text-white
             ${!tab ? "bg-pink-500 text-white" : "bg-gray-300 text-gray-400"}`}
            onClick={() => setTab(false)}
          >
            Mulher
          </button>
          <button
            className={`flex-1 p-2 rounded-sm hover:text-white hover:bg-blue-400 ${
              tab ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-400 "
            }`}
            onClick={() => setTab(true)}
          >
            Homem
          </button>
        </div>
        {!tab ? <Mulher /> : <Homem />}
      </div>
      <div className="fixed -bottom-8 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={`${!tab ? "#eeaeca" : "#94bbe9"}`}
            fillOpacity="0.4"
            d="M0,128L30,144C60,160,120,192,180,186.7C240,181,300,139,360,138.7C420,139,480,181,540,213.3C600,245,660,267,720,250.7C780,235,840,181,900,170.7C960,160,1020,192,1080,197.3C1140,203,1200,181,1260,192C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
