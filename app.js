const OPENAI_API_KEY = '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'
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

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
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4-1106-preview',
                messages: conversationArr
            })
        });

        const responseData = await response.json();
        conversationArr.push({role: 'assistant', content: responseData.choices[0].message.content});
        renderAllResponses();
    } catch (error) {
        console.error('Error fetching response from server:', error);
    }
}

function typewriterEffect(text, element, speed = 50, callback) {
    console.log("called")
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