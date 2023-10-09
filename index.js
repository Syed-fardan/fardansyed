import express from "express";
// import quizzes from "./db/quizes";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send('hello fardan');
});
// app.get('/quiz', (req,res) => {
//     res.send(quizzes);
// });
app.listen(process.env.PORT || PORT, () => {
    console.log('server started');
});
