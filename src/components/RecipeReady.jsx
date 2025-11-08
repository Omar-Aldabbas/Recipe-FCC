

export const RecipeReady = (props) => {

    return (

        <>
        <div>
            {props.recipe}
        </div>
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
                onClick={() => {
                    props.showRecipe();
                    props.getRecipe();
                }}
                className="mt-4 md:mt-0 bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-200"
              >
                Get Recipe
              </button>
            </div>
        </>
    )
}