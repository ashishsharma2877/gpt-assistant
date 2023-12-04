// public/app.js
//const express = require('express');
//const axios = require('axios');
//const dotenv = require('dotenv');
//dotenv.config();

//const app = express();

document.addEventListener('DOMContentLoaded', () => 
{
    const questionForm = document.getElementById('question-form');
    const answerDiv = document.getElementById('answer');

    questionForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const questionInput = document.getElementById('question');
        const question = questionInput.value;

        if (!question) {
        return;
        }

        try {
        const response = await axios.post('/ask', { question });
        const answer = response.data;

        answerDiv.innerHTML = `<p><strong>Answer:</strong> ${answer}</p>`;
        } catch (error) {
        console.error(error);
        answerDiv.innerHTML = '<p>Error fetching answer</p>';
        }
    });
});
