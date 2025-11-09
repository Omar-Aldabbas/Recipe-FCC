import ReactMarkdown from "react-markdown";
import { useRef } from "react";
import { useEffect } from "react";

export const Recipe = ({ recipe }) => {
  const recipeRef = useRef(null);

  useEffect(() => {
    if (recipeRef.current) {
      recipeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [recipe]);

  return (
    <section
      ref={recipeRef}
      className="recipe-container opacity-0 transition-opacity duration-700 ease-in-out"
      style={{ opacity: recipe ? 1 : 0 }}
    >
      <h2>Your Recipe</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
};
