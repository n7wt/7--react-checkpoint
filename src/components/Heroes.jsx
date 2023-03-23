import { useState } from "react";

function Heroes() {
  const [name, setName] = useState([
    "Шерлок Холмс",
    "Доктор Ватсон",
    "Профессор Мариарти",
    "Миссис ХАдсон",
    "Ирен Фдлер",
  ]);

  function handleDelete(id) {
    setName(
      name.filter((item, idx) => {
        return idx !== id;
      })
    );
  }

  return (
    <ul>
      {name.map((item, idx) => {
        return <li onClick={() => handleDelete(idx)}>{item}</li>;
      })}
    </ul>
  );
}

export default Heroes;
