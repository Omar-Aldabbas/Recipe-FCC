import { useState } from "react";
import { Recipe } from "./Recipe";

export const Form = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShowen, setRecipeShowen] = useState(false);

  const addIngredient = (formData) => {
    const ingredient = formData.get("ingredient");
    setIngredients((prev) => Array.from(new Set([...prev, ingredient])));
  };

  return (
    <div className="container mx-auto p-10 flex flex-col items-center">
      <form
        action={addIngredient}
        className="flex flex-wrap justify-between items-center gap-4 py-6 px-6 w-full md:w-2/3 bg-white/70 backdrop-blur-lg rounded-xl shadow-xl border border-gray-200"
      >
        <input
          type="text"
          name="ingredient"
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
          className="rounded-lg border border-gray-300 text-lg p-3 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
          required
        />
        <button className="rounded-lg bg-blue-950 text-white font-semibold px-10 py-3 text-lg hover:bg-blue-900 hover:scale-105 shadow-md transition-all duration-200">
          + Add Ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <section className="w-full md:w-2/3 mt-12 text-left">
          <h1 className="text-3xl font-bold mb-6 text-blue-950">
            Ingredients on hand
          </h1>
          <ul className="rounded-xl bg-gradient-to-br from-blue-100/60 to-gray-100 border border-gray-300 backdrop-blur p-6 space-y-3 shadow-inner">
            {ingredients.map((ing, i) => (
              <li
                key={ing + i}
                className="text-lg font-medium text-slate-900 bg-white rounded-lg px-5 py-2 shadow-sm hover:shadow-md transition-all duration-150"
              >
                {ing}
              </li>
            ))}
          </ul>

          {ingredients.length > 3 && (
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">
              <div>
                <h3 className="text-2xl font-semibold text-blue-950 mb-2">
                  Ready for a recipe?
                </h3>
                <p className="text-slate-700">
                  Generate a recipe from your ingredients 🍳
                </p>
              </div>
              <button
                onClick={() => setRecipeShowen((prev) => !prev)}
                className="mt-4 md:mt-0 bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-200"
              >
                Get Recipe
              </button>
            </div>
          )}
        </section>
      )}

      {recipeShowen && <Recipe />}
    </div>
  );
};
