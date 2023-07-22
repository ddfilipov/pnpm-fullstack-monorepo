"use client";

import { useEffect, useState } from "react";
import PeopleList from "../atomic/organisms/PeopleList";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import { BASE_URL } from "@/consts";
import { useFieldArray, useForm } from "react-hook-form";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 20px;
`;

interface InputValues {
    id: number;
    name: string;
    money: number;
    dateOfBirth: Date;
    isVip?: boolean;
}

export default function Home() {
    const [data, setData] = useState<IPersonData[]>([]);
    // const defaultValues: InputValues[] = {
    //     id: person.id,
    //     name: person.name,
    //     money: person.money,
    //     dateOfBirth: person.dateOfBirth,
    //     isVip: person.isVip,
    // };
    // const { control, handleSubmit, reset } = useForm({ defaultValues: defaultValues });

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, 
        name: "test", 
      });
    useEffect(() => {
        async function getData() {
            const response = await fetch(`${BASE_URL}/get`);
            const jsonReponse = await response.json();
            setData(jsonReponse.result);
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
        setData(jsonReponse.result);
    };

    const handleAddPerson = async () => {
        const response = await fetch(`${BASE_URL}/add-person`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });

        const jsonReponse = await response.json();
        setData(jsonReponse.result);
    };

    return (
        <Wrapper>
            <h1>People</h1>
            <p>You can add, delete and edit people.</p>
            <PeopleList people={data} submitForm={submitForm} handleAddPerson={handleAddPerson} />
        </Wrapper>
    );
}
