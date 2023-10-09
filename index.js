import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send('hello fardan');
});
app.listen(process.env.PORT || PORT, () => {
    console.log('server started');
});
