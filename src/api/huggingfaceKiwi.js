import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and 
suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, but try not 
to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

const client = new InferenceClient(import.meta.env.VITE_HF_RECIPE_TOKEN);

/**
 * Generate a recipe from a list of ingredients
 * @param {string[]} ingredientsArr - Array of ingredient names
 * @returns {string} Recipe text
 */
export async function getRecipeFromHF(ingredientsArr) {
  const ingredientsStr = ingredientsArr.join(", ");
  const userPrompt = `I have the following ingredients: ${ingredientsStr}. Please suggest a recipe.`;

  try {
    const chatCompletion = await client.chatCompletion({
      model: "moonshotai/Kimi-K2-Thinking:novita",
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
// getRecipeFromHF(['onion', 'meat', 'olive oil', 'bread'])