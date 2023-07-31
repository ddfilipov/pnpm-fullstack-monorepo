"use client";

import { useEffect, useState } from "react";
import PeopleList from "../atomic/organisms/PeopleList";
import { IPersonData, IPersonDataResponse } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import { BASE_URL } from "@/consts";
import { FormProvider, useFieldArray, useForm, useWatch } from "react-hook-form";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 20px;
`;

export interface InputValues extends IPersonDataResponse {}

export default function Home() {
    const [data, setData] = useState<InputValues>();
    const defaultValues: InputValues = {
        people: [
            {
                id: 0,
                name: "",
                money: 0,
                dateOfBirth: new Date(),
                isVip: false,
            },
        ],
    };
    const methods = useForm<InputValues>();

    const {
        fields: peopleFields,
        append: appendPeople,
        remove: removePeople,
    } = useFieldArray({
        control: methods.control,
        name: "people",
    });
    const dataWatch = useWatch({ control: methods.control, name: "people" });
    useEffect(() => {
        async function getData() {
            const response = await fetch(`${BASE_URL}/get`);
            const jsonReponse = await response.json();
            console.log("-------- useEffect ---------");
            console.log(JSON.stringify(jsonReponse.result));
            setData(jsonReponse.result);
            methods.reset(jsonReponse.result);
        }
        getData();
    }, []);

    const submitForm = async (person: IPersonData) => {
        const response = await fetch(`${BASE_URL}/post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: person.id,
                name: person.name,
                money: person.money,
                dateOfBirth: person.dateOfBirth,
                isVip: person.isVip,
            }),
        });

        const jsonReponse = await response.json();
        console.log(jsonReponse);
        setData(jsonReponse.result);
    };
    console.log(peopleFields);
    console.log(dataWatch);

    const handleAddPerson = async () => {
        const response = await fetch(`${BASE_URL}/add-person`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
        const jsonReponse = await response.json();
        console.log("-------- handleAddPerson ---------");
        console.log(JSON.stringify(jsonReponse.result));
        setData(jsonReponse.result);
    };

    return (
        <Wrapper>
            <h1>People</h1>
            <p>You can add, delete and edit people.</p>
            <FormProvider {...methods}>
                <PeopleList
                    people={peopleFields as IPersonData[]}
                    submitForm={submitForm}
                    handleAddPerson={handleAddPerson}
                />
            </FormProvider>
        </Wrapper>
    );
}
