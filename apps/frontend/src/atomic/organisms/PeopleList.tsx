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

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 300px;
    min-width: 400px;
    button {
        border-radius: 10px;
    }
`;

interface PeopleListProps {
    people: IPersonData[];
    submitForm: (person: IPersonData) => void;
}

const PeopleList: FC<PeopleListProps> = ({ people, submitForm }) => {
    return (
        <>
            <Wrapper>
                {people?.map((person) => {
                    return <PersonCard person={person} key={person.id} submitForm={submitForm} />;
                })}
                <ButtonContainer>
                    <button type="button" style={{ height: "100px" }}>
                        ADD PERSON
                    </button>
                </ButtonContainer>
            </Wrapper>
        </>
    );
};
export default PeopleList;
