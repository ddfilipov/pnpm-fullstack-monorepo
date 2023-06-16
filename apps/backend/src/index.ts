import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";

const app = express();
const port = 5000;

// enable json in the request body
app.use(bodyParser.json());

// enable cross origin resourse sharing
app.use(cors());

const people: IPersonData[] = [
    {
        id: 1,
        name: "Pepe",
        dateOfBirth: new Date("2000-01-17"),
        money: 1000,
    },
    {
        id: 2,
        name: "Ana",
        dateOfBirth: new Date("1996-11-25"),
        money: 1500,
    },
    {
        id: 3,
        name: "John",
        dateOfBirth: new Date("1984-10-29"),
        money: 1600,
    },
    {
        id: 4,
        name: "Berni Eclestone",
        money: 1000000,
        dateOfBirth: new Date("1960-01-01"),
        isVip: true,
    },
];

app.get("/get", (req, res) => {
    res.send({ result: people });
});

app.post("/post", (req, res) => {
    console.log("showing req:", req.body);
});

app.listen(port, () => console.log(`App listening to PORT: ${port}`));
