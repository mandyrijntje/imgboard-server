const express = require("express");
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");

const Image = require("./image/model");
const imageRouter = require("./image/router");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

const port = process.env.PORT || 4000;

app.use(imageRouter);

app.listen(port, () => console.log(`App listening on port ${port}`));
