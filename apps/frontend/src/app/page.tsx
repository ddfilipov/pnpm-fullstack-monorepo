"use client";

import { useEffect } from "react";
import PeopleList from "../atomic/organisms/PeopleList";
import { IPersonData, IPersonDataResponse } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import { BASE_URL } from "@/consts";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 20px;
`;

export interface InputValues extends IPersonDataResponse {}

export default function Home() {
    const methods = useForm<InputValues>();

    const {
        fields: peopleFields,
        append: appendPeople,
        remove: removePeople,
        update: updatePeople,
    } = useFieldArray({
        control: methods.control,
        name: "people",
    });

    useEffect(() => {
        async function getData() {
            const response = await fetch(`${BASE_URL}/get-people`);
            const jsonReponse = await response.json();
            // console.log("-------- useEffect ---------");
            // console.log(JSON.stringify(jsonReponse.result));
            methods.reset(jsonReponse.result);
        }
        getData();
    }, []);

    const handleEditPerson = async (person: IPersonData, index: number) => {
        console.log("person:", JSON.stringify(person));
        const response = await fetch(`${BASE_URL}/edit-person`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                personId: person.personId,
                name: person.name,
                money: person.money,
                dateOfBirth: person.dateOfBirth,
                isVip: person.isVip,
            }),
        });

        const jsonReponse = await response.json();
        updatePeople(index, jsonReponse.result);
        console.log("lemme see that edited person");
        console.log(jsonReponse);
    };

    const handleAddPerson = async () => {
        const response = await fetch(`${BASE_URL}/add-person`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
        const jsonReponse = await response.json();
        appendPeople(jsonReponse.result);
    };

    const handleDeletePerson = async (personId: number, index: number) => {
        const response = await fetch(`${BASE_URL}/delete-person`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: personId,
            }),
        });
        // TODO: shouldn't I return a message saying it's all cool or what
        const jsonReponse = await response.json();
        // console.log("a ver ese json del DELETE:", jsonReponse);
        removePeople(index);
    };

    return (
        <Wrapper>
            <h1>People</h1>
            <p>You can add, delete and edit people.</p>
            <FormProvider {...methods}>
                <PeopleList
                    people={peopleFields as IPersonData[]}
                    handleEditPerson={handleEditPerson}
                    handleAddPerson={handleAddPerson}
                    handleDeletePerson={handleDeletePerson}
                />
            </FormProvider>
        </Wrapper>
    );
}
