"use client";

import { useEffect, useState } from "react";
import PeopleList from "../atomic/organisms/PeopleList";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import { BASE_URL } from "@/consts";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 20px;
`;

export default function Home() {
    const [data, setData] = useState<IPersonData[]>([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`${BASE_URL}/get`);
            const jsonReponse = await response.json();
            setData(jsonReponse.result);
        }
        getData();
    }, []);

    return (
        <Wrapper>
            <h1>People</h1>
            <p>You can add, delete and edit people.</p>
            <PeopleList people={data} />
        </Wrapper>
    );
}
