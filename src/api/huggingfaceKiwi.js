import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and 
suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, but try not 
to include too many extra ingredients and make it as long and detailed as possible. 
Format your response in Markdown so it works perfectly with react-markdown.
`;

const client = new InferenceClient(import.meta.env.VITE_HF_RECIPE_TOKEN);

/**
 * Generate a recipe from a list of ingredients
 * @param {string[]} ingredientsArr - Array of ingredient names
 * @returns {string} Recipe text
 */
export async function getRecipeFromHF(ingredientsArr) {
  const ingredientsStr = ingredientsArr.join(", ");
  const userPrompt = `I have the following ingredients: ${ingredientsStr}. Please suggest a detailed recipe.`;

  try {
    const chatCompletion = await client.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct:novita",
      messages: [
        { role: "system", content: [{ type: "text", text: SYSTEM_PROMPT }] },
        { role: "user", content: [{ type: "text", text: userPrompt }] }
      ],
      stream: false
    });

    return chatCompletion.choices[0].message.content;
  } catch (err) {
    console.error("Hugging Face chat error:", err);
    return null;
  }
}

// Example usage
// (async () => {
//   const recipe = await getRecipeFromHF(["onion", "meat", "olive oil", "bread"]);
//   console.log(recipe);
// })();
