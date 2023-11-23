import { process } from '/env.js'
import ai from 'https://cdn.jsdelivr.net/npm/openai@3.3.0/+esm'
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


const configuration = new ai.Configuration({
    apiKey: OPENAI_API_KEY
})

const openai = new ai.OpenAIApi(configuration)

const conversationArr = [
];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('qaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var loader = document.getElementById('loader');
        loader.style.display = 'block';
        const userInput = document.getElementById('userInput');
        conversationArr.push({ 
            role: 'user',
            content: userInput.value
        });
        userInput.value = '';
        fetchReply();
    });
});

async function fetchReply() {
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-4-1106-preview',
            messages: conversationArr,
        })
        conversationArr.push({role: 'assistant', content: response.data.choices[0].message.content});
        renderAllResponses();
    } catch (error) {
        console.error('Error fetching response from server:', error);
    }
}

function typewriterEffect(text, element, speed = 50, callback) {
    let i = 0;
    const typeInterval = setInterval(function () {
        element.innerHTML += text.charAt(i);
        i++;
        if (i > text.length - 1) {
            clearInterval(typeInterval);
            if (callback) {
                callback();
            }
        }
    }, speed);
}

// Update your renderAllResponses function
function renderAllResponses() {
    var responseDiv = document.getElementById('response');
    var loader = document.getElementById('loader');

    // Hide loader once the response is received
    loader.style.display = 'none';

    responseDiv.innerHTML = '';

    conversationArr.forEach((message, index) => {
        if (message.role === 'assistant') {
            // Display loader while waiting for the response
            loader.style.display = 'none';
            // Render the assistant's formatted response
            const assistantResponse = document.createElement('div');
            assistantResponse.className = 'assistant-response';
            responseDiv.appendChild(assistantResponse);

            if (index === conversationArr.length - 1) {
                // Apply typewriter effect only to the last assistant response
                typewriterEffect(message.content, assistantResponse, 10, function() {
                    // Hide loader once the typewriter effect is complete
                    loader.style.display = 'none';
                });
            } else {
                assistantResponse.innerHTML = message.content;
            }
        } else {
            // Render user's and system's messages
            responseDiv.innerHTML += `
                <p><strong>Me:</strong> ${message.content}</p>
            `;
        }
    });
}