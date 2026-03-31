const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_KEY,
});

exports.chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ reply: "Message is required" });
    }

    console.log("GEMINI_KEY exists:", !!process.env.GEMINI_KEY);
    console.log("Incoming message:", message);

    const response = await ai.models.generateContent({
       model: "gemini-2.5-flash",
      contents: message,
    });

    // ✅ CORRECT RESPONSE PARSING
    const reply =
      response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI.";

    console.log("Final reply:", reply);

    return res.json({ reply });

  } catch (error) {
    console.error("Gemini error:", error.message);

    return res.status(500).json({
      reply: "AI error. Please try again.",
    });
  }
};