const express = require('express');
const quizes = require('./db/quizes')
const app = express();
const PORT = 3000;
// console.log('quizes',quizes);
app.get("/", (req, res) => {
    res.send('hello fardan');
});
app.get('/quiz', (req,res) => {
    res.send(quizes);
});
app.listen(process.env.PORT || PORT, () => {
    console.log('server started');
});
