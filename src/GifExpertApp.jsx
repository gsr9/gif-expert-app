import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

function GifExpertApp() {
  //   const categories = ["One punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One punch", "Samurai X", "Dragon Ball"]);


  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ul>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </>
  );
}

export default GifExpertApp;
