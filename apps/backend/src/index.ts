import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { IPersonDataResponse } from "@pnpm-fullstack-monorepo/validation";

const app = express();
const port = 5000;

// enable json in the request body
app.use(bodyParser.json());

// enable cross origin resourse sharing
app.use(cors());

const peopleObject: IPersonDataResponse = {
    people: [
        {
            personId: 1,
            name: "Pepe",
            dateOfBirth: new Date("2000-01-17"),
            money: 1000,
        },
        {
            personId: 2,
            name: "Ana",
            dateOfBirth: new Date("1996-11-25"),
            money: 1500,
        },
        {
            personId: 3,
            name: "John",
            dateOfBirth: new Date("1984-10-29"),
            money: 1600,
        },
        {
            personId: 4,
            name: "Berni Eclestone",
            money: 1000000,
            dateOfBirth: new Date("1960-01-01"),
            isVip: true,
        },
    ],
};

app.get("/get-people", (req, res) => {
    console.log(peopleObject);
    res.send({ result: peopleObject });
});

app.post("/edit-person", (req, res) => {
    const foundIndex = peopleObject.people.findIndex((person) => person.personId === req.body.personId);
    peopleObject.people.splice(foundIndex ?? peopleObject.people.length - 1, 1, req.body);
    console.log("foundIndex::", foundIndex);
    const editedPerson = peopleObject.people[foundIndex];
    console.log(JSON.stringify(editedPerson));
    res.send({ result: editedPerson });
});

app.post("/add-person", (req, res) => {
    const nextId: number[] = peopleObject.people.flatMap((x) => x.personId);
    peopleObject.people.push({ personId: Math.max(...nextId) + 1, name: "", dateOfBirth: new Date(), money: 0 });
    res.send({ result: peopleObject.people[peopleObject.people.length - 1] });
});

// should do a patch to check out how it works

app.delete("/delete", (req, res) => {
    console.log("a ver ese delete", req.body);
    const foundId = peopleObject.people.findIndex((person) => person.personId === req.body.personId);
    peopleObject.people.splice(foundId ?? peopleObject.people.length - 1, 1);

    res.send({ result: peopleObject });
});

app.listen(port, () => console.log(`App listening to PORT: ${port}`));
