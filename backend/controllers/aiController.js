import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const askAI = async (req, res) => {
  const { question } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: question }],
    });

    const answer = response.choices[0].message.content;
    res.status(200).json({ answer });
  } catch (err) {
    res.status(500).json({ message: "AI request failed", error: err.message });
  }
};
