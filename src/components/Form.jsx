import { useState } from "react";

export const Form = () => {
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const ingredient = formData.get("ingredient").trim();
    if (!ingredient) return;

    setIngredients((prev) => [...prev, ingredient]);
    e.target.reset();
  };
  return (
    <>
        <form
      action=""
      onSubmit={handleSubmit}
      className="flex justify-center flex-wrap items-center gap-3 py-8 px-2 min-w-screen mt-6"
    >
      <input
        type="text"
        name="ingredient"
        aria-label="Add Ingredient"
        placeholder="e.g. oregano"
        className="rounded-sm border border-1 border-gray-500  md:max-w-1/4 text-md p-3 flex-grow"
      />
      <button className="flex-grow md:flex-initial rounded-sm bg-blue-950 text-white/90 font-semibold px-12 py-3 text-md hover:bg-slate-900 shadow-lg ">
        + Add Ingredient
      </button>
    </form>
    <ul>
        {ingredients.map((ing, i) => (
            <li key={ing + i}>{ing}</li>
        ))}
    </ul>
    </>
  );
};
