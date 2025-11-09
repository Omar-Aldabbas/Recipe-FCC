import { useState } from "react";
import { RecipeReady } from "./RecipeReady";
import { IngredientsList } from "./IngredientsList";
import { getRecipeFromHF } from "../api/huggingfaceKiwi";
import { Recipe } from "./Recipe";

export const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShowen, setRecipeShowen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [recipe, setRecipe] = useState("");

  const handleRecipe = async () => {
    try {
      setIsLoading((prev) => !prev);
      const data = await getRecipeFromHF(ingredients);
      setIsLoading((prev) => !prev);

      setRecipe(data);
      setRecipeShowen(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const resetPage = () => {
    setIngredients([]);
    setRecipe("");
    setRecipeShowen(false);
  };
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
      {recipe ? (
        <button
          onClick={resetPage}
          className="mt-4 bg-black text-white font-bold px-8 py-3 rounded-lg shadow-md border border-gray-300 hover:bg-gray-900 hover:scale-105 transition-all duration-200"
        >
          Reset All
        </button>
      ) : (
        ""
      )}
      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} />}

      {ingredients.length > 3 && <RecipeReady getRecipe={handleRecipe} />}

      {/* {recipeShowen && <Recipe />} */}
      {isLoading ? "Generating" : recipeShowen && <Recipe recipe={recipe} />}
    </div>
  );
};
