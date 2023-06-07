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

const people: IPersonData[] = [
    {
        name: "Pepe",
        birthDate: new Date("2000-01-17"),
        money: 10,
    },
    {
        name: "Berni Eclestone",
        money: 11,
        birthDate: new Date("2000-01-17"),
        vip: true,
    },
];

app.get("/get", (req, res) => {
    res.send({ result: JSON.stringify(people) });
});

app.listen(port, () => console.log(`App listening to PORT: ${port}`));
