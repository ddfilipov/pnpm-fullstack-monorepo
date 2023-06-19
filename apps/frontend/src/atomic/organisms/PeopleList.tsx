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
    submitForm: (person: IPersonData) => void;
}

const PeopleList: FC<PeopleListProps> = ({ people, submitForm }) => {
    return (
        <Wrapper>
            {people?.map((person) => {
                return <PersonCard person={person} key={person.id} submitForm={submitForm} />;
            })}
        </Wrapper>
    );
};
export default PeopleList;
