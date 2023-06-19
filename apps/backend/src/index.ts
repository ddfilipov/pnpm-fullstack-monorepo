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
        isVip: false,
    },
    {
        id: 2,
        name: "Ana",
        dateOfBirth: new Date("1996-11-25"),
        money: 1500,
        isVip: true,
    },
    {
        id: 3,
        name: "John",
        dateOfBirth: new Date("1984-10-29"),
        money: 1600,
        isVip: false,
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
    // TODO: should modify our people object
    const foundId = people.findIndex((person) => person.id === req.body.id);
    people.splice(foundId ?? people.length - 1, 1, req.body);
    console.log("newppl:", people);

    res.send({ result: people });
});

app.listen(port, () => console.log(`App listening to PORT: ${port}`));
