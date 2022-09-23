const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(morgan('tiny'));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Minesweeper API!")
});

app.get("*", (req, res) => {
    res.status(404).json("Endpoint does not exist")
});

module.exports = app;