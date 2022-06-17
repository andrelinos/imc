import { useEffect, useState } from "react";

interface Props {
  imc: number;
}

export function ShowResult({ imc }: Props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (imc > 0) {
      if (imc >= 40) return setMessage("Obesidade grau 3");
      if (imc >= 34.9) return setMessage("Obesidade grau 2");
      if (imc >= 29.9) return setMessage("Obesidade grau 1");
      if (imc >= 24.9) return setMessage("Sobrepeso");
      if (imc >= 18.6) return setMessage("Peso normal");
      if (imc < 18.5) return setMessage("Abaixo do peso");
    }
  }, [imc]);

  console.log(imc);

  return (
    <div className="flex w-full flex-col h-12">
      {message && message}
      {message && (
        <span>
          Seu IMC é de <strong>{imc}</strong>
        </span>
      )}
    </div>
  );
}
