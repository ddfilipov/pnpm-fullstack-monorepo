import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";

const app = express();
const port = 5000;
// const port = process.env.PORT || 3000;

// enable json in the request body
app.use(bodyParser.json());

// enable cross origin resourse sharing
app.use(cors());

app.get("/get", (req, res) => {
    const person: IPersonData = {
        birthDate: new Date(),
        money: 11,
        name: "Berni Eclestone",
    };
    res.send({ result: JSON.stringify(person) });
});

app.listen(port, () => console.log(`App listening to PORT: ${port}`));
