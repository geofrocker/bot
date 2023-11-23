// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai')

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(cors()); 

// Replace 'your-api-key' with your actual OpenAI API key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';


const configuration = new Configuration({
    apiKey: OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

app.use(bodyParser.json());

app.post('/get-response', async (req, res) => {
    const conversation = req.body.messages;

    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-4-1106-preview',
            messages: conversation,
        })
        res.json({ response: response.data.choices[0].message.content });
    } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
