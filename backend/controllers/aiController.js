import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

export const askAI = async (req, res) => {
  const { question } = req.body;
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: question }],
    });
    const answer = response.data.choices[0].message.content;
    res.status(200).json({ answer });
  } catch (err) {
    res.status(500).json({ message: "AI request failed", error: err.message });
  }
};
