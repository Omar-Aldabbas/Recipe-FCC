import OpenAI from "openai";

const OAI_TOKEN = import.meta.env.VITE_OAI_RECIPE_TOKEN;

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and
suggests a recipe they could make with some or all of those ingredients. You don't
need to use every ingredient they mention in your recipe. The recipe can
include additional ingredients they didn't mention, but try not to include
too many extra ingredients and if some ingredient are not valid say that you don't know it and omit it. Format your response in markdown to make it
easier to render to a web page.
`;

const client = new OpenAI({
  apiKey: OAI_TOKEN,
  dangerouslyAllowBrowser: true
});

export async function getRecipeFromOpenAI(ingredientsArr) {
  const ingredientsStr = ingredientsArr.join(", ");

  try {
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsStr}. Suggest a recipe.` }
      ],
      max_tokens: 1024
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error("OpenAI error:", err.message);
    return null;
  }
}
