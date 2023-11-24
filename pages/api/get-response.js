import openai from '../../openaiConfig';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { messages } = req.body;

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4-1106-preview',
        messages,
      });

      res.json({ response: response.choices[0].message.content });
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
