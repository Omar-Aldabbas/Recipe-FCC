
export const IngredientsList = (props) => {
  return (
    <section className="w-full md:w-2/3 mt-12 text-left">
      <h1 className="text-3xl font-bold mb-6 text-blue-950">
        Ingredients on hand
      </h1>
      <ul className="rounded-xl bg-linear-to-br from-blue-100/60 to-gray-100 border border-gray-300 backdrop-blur p-6 space-y-3 shadow-inner">
        {props.ingredients.map((ing, i) => (
          <li
            key={ing + i}
            className="text-lg font-medium text-slate-900 bg-white rounded-lg px-5 py-2 shadow-sm hover:shadow-md transition-all duration-150"
          >
            {ing}
          </li>
        ))}
      </ul>

    </section>
  );
};
