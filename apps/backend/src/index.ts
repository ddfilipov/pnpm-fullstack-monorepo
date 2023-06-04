import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
    res.send("Hi!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening to PORT: ${port}`));
