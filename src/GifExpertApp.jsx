import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp({ defaultCategories = [] }) {
  //   const categories = ["One punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ul>
        {categories.map((c) => (
          <GifGrid key={c} category={c} />
        ))}
      </ul>
    </>
  );
}

export default GifExpertApp;
