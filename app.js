// app.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.json());



app.get('app.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'public', 'app.js'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// app.js
// ...

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Set your API key in a .env file

app.post('/ask', async (req, res) => {
    const question = req.body.question;

    try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: `Please provide information on ${question}`,
        max_tokens: 100,
    }, {
        headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        },
    });

    const answer = response.data.choices[0].text;
    res.send(answer);
    } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching answer');
    }
    });

// ...
