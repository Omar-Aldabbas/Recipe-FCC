export const RecipeReady = (props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-10 bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl text-white">
      <div className="mb-4 md:mb-0">
        <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
          Ready for a recipe?
        </h3>
        <p className="text-gray-300">
          Let AI generate a delicious recipe from your ingredients.
        </p>
      </div>
      <button
        onClick={props.getRecipe}
        className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
      >
        Get Recipe
      </button>
    </div>
  );
};
