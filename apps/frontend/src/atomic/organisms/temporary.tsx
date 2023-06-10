import { FC, Fragment, useEffect, useState } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
const BASE_URL = "http://localhost:5000";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

const StyledBox = styled.div`
    padding: 10px;
    width: 300px;
    border: 1px solid black;
`;

const Temporal: FC = () => {
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
            {data?.map((person) => {
                return (
                    <StyledBox key={person.id}>
                        <p>{person.name}</p>
                        <ul>
                            <li>{person.money}</li>
                            <li>{person.birthDate.toString()}</li>
                            {person.vip ? <li>VIP</li> : null}
                        </ul>
                    </StyledBox>
                );
            })}
        </Wrapper>
    );
};
export default Temporal;
