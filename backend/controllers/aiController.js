export const askAI = async (req, res) => {
  const { question } = req.body;
  try {
    const answer = `AI suggests: Stay consistent, eat clean, and train hard. You asked: "${question}"`;
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};