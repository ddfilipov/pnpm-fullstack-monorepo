import { FC } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import PersonCard from "../molecules/PersonCard";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

interface PeopleListProps {
    people: IPersonData[];
}

const PeopleList: FC<PeopleListProps> = ({ people }) => {
    return (
        <Wrapper>
            {people?.map((person) => {
                return <PersonCard person={person} />;
            })}
        </Wrapper>
    );
};
export default PeopleList;
