
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai')
const { Router }  = require('express');
import serverless from "serverless-http";

dotenv.config();
const app = express();
app.use(cors()); 

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


const configuration = new Configuration({
    apiKey: OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

app.use(bodyParser.json());
app.use(express.static('public'));

const router = Router();
router.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

router.post('/get-response', async (req, res) => {
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

app.use("/app/", router);

export const handler = serverless(app);