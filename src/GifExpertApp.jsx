import React, { useState } from "react";

function GifExpertApp() {
  //   const categories = ["One punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One punch", "Samurai X", "Dragon Ball"]);

  const handleAdd = () => {
    const newCategory = "Detective Conan";
    setCategories(cats => [...cats, newCategory]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </>
  );
}

export default GifExpertApp;
