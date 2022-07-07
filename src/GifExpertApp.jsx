import React, { useState } from "react";
import { AddCategory, GrifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    const lower = newCategory.toLowerCase();

    const lowCategories = categories.map((cat) => cat.toLowerCase());

    if (lowCategories.includes(lower)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(e) => onAddCategory(e)} />

      {/* List of Gifs */}
      {categories.map((category) => (
        <GrifGrid key={category} category={category} />
      ))}
    </>
  );
};
