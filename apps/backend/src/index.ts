import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { IPersonData, IPersonDataResponse } from "@pnpm-fullstack-monorepo/validation";

const app = express();
const port = 5000;

// enable json in the request body
app.use(bodyParser.json());

// enable cross origin resourse sharing
app.use(cors());

const peopleObject: IPersonDataResponse = {
    people: [
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
    ],
};

app.get("/get", (req, res) => {
    res.send({ result: peopleObject });
});

app.post("/post", (req, res) => {
    const foundId = peopleObject.people.findIndex((person) => person.id === req.body.id);
    peopleObject.people.splice(foundId ?? peopleObject.people.length - 1, 1, req.body);

    res.send({ result: peopleObject });
});
// should do a post to add ppl
app.post("/add-person", (req, res) => {
    // const newArrayOfPpl = { ...people, {id: "", } };
    // const newArrayOfPpl = [...peopleObject, { id: "", name: "", dateOfBirth: "", money: 0 }];
    const newArrayOfPpl = { people: [...peopleObject.people, { id: "", name: "", dateOfBirth: "", money: 0 }] };
    console.log(newArrayOfPpl);
    res.send({ result: newArrayOfPpl });
});

// should do a patch to check out how it works

app.delete("/delete", (req, res) => {
    console.log("a ver ese delete", req.body);
    const foundId = peopleObject.people.findIndex((person) => person.id === req.body.id);
    peopleObject.people.splice(foundId ?? peopleObject.people.length - 1, 1);

    res.send({ result: peopleObject });
});

app.listen(port, () => console.log(`App listening to PORT: ${port}`));
