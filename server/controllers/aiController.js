const axios = require('axios');

// @desc    Summarize a note's content
// @route   POST /api/ai/summarize
exports.summarizeNote = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Content is required for summarization.' });
  }

  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: "tinyllama",
      prompt: `Summarize the following text in three bullet points:\n\n${content}`,
      stream: false // We want the full response at once
    });

    res.json({ summary: response.data.response });

  } catch (error) {
    console.error("Error communicating with Ollama:", error.message);
    res.status(500).json({ message: 'Failed to generate summary from AI model.' });
  }
};