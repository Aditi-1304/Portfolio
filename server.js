// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { Configuration, OpenAIApi } = require("openai");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const openai = new OpenAIApi(
//     new Configuration({ apiKey: process.env.OPENAI_API_KEY })
// );

// app.post("/chat", async (req, res) => {
//     const { message } = req.body;
//     try {
//         const response = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: message }],
//         });
//         res.json({ reply: response.data.choices[0].message.content });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error communicating with AI.");
//     }
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));
