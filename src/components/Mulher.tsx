export function Mulher() {
  return (
    <div>
      <span>Mulher</span>
      <div>
        <span>Idade</span>
        <span>
          <input placeholder="Ex: 35" type="text" name="age" id="age" />
          anos
        </span>
      </div>
      <div>
        <span>Altura</span>
        <span>
          <input placeholder="Ex: 165" type="text" name="height" id="height" />{" "}
          centímetros
        </span>
      </div>
      <div>
        <span>Peso</span>
        <span>
          <input placeholder="Ex: 62" type="text" name="weight" id="weight" />{" "}
          kilos
        </span>
      </div>
      <button>Calcular</button>
    </div>
  );
}
