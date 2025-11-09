import { useState } from "react";
import { RecipeReady } from "./RecipeReady";
import { IngredientsList } from "./IngredientsList";
import { getRecipeFromHF } from "../api/huggingfaceKiwi";
import { Recipe } from "./Recipe";

export const Main = () => {
  const [ingredients, setIngredients] = useState(["onion", "ground beef", "bread", "some veggies"]);
  const [recipeShowen, setRecipeShowen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState("");

  const handleRecipe = async () => {
    if (!ingredients.length) return;
    setIsLoading(true);
    try {
      const data = await getRecipeFromHF(ingredients);
      setRecipe(data || "No recipe found.");
      setRecipeShowen(true);
    } catch (err) {
      console.log(err.message);
      setRecipe("Error generating recipe. Try again.");
    } finally {
      setIsLoading(false);
      setIngredients([])
    }
  };

  const resetPage = () => {
    setIngredients([]);
    setRecipe("");
    setRecipeShowen(false);
  };

  const addIngredient = (formData) => {
    const ingredient = formData.get("ingredient");
    if (!ingredient) return;
    setIngredients((prev) => Array.from(new Set([...prev, ingredient])));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-950 text-gray-100 flex flex-col items-center p-8">
      <form
        action={addIngredient}
        className="flex flex-wrap justify-between items-center gap-4 py-6 px-6 w-full md:w-2/3 bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700"
      >
        <input
          type="text"
          name="ingredient"
          placeholder="Add an ingredient..."
          className="rounded-lg border border-gray-600 bg-gray-900 text-gray-100 p-3 flex-grow focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
          required
        />
        <button className="rounded-lg bg-green-600 text-gray-100 font-semibold px-8 py-3 hover:bg-green-500 hover:scale-105 transition-all duration-200 shadow-md">
          + Add
        </button>
      </form>



      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} />
      )}

      {ingredients.length > 3 && (
        <RecipeReady getRecipe={handleRecipe} />
      )}

      {isLoading && (
        <div className="mt-8 text-green-400 font-semibold animate-pulse">
          Generating recipe with AI...
        </div>
      )}

      {recipeShowen && !isLoading && (
        <div className="mt-8 w-full md:w-2/3">
          <Recipe recipe={recipe} />
        </div>
      )}



            {recipe && (
        <button
          onClick={resetPage}
          className="mt-6 bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-200"
        >
          New Recipe ?
        </button>
      )}
    </div>
  );
};
