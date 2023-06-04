import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;
// const port = process.env.PORT || 3000;

// enable json in the request body
app.use(bodyParser.json());

// enable cross origin resourse sharing
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hi!");
});

app.listen(port, () => console.log(`App listening to PORT: ${port}`));
