import { FC } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import PersonCard from "../molecules/PersonCard";
import CustomButton from "../atoms/CustomButton";
import { InputValues } from "@/app/page";

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
        height: 100px;
    }
`;

interface PeopleListProps {
    people: InputValues;
    submitForm: (person: IPersonData) => void;
    handleAddPerson: () => void;
}

const PeopleList: FC<PeopleListProps> = ({ people, submitForm, handleAddPerson }) => {
    console.log(people);
    return (
        <>
            <Wrapper>
                {people?.people?.map((person) => {
                    return <PersonCard person={person} key={person.id} submitForm={submitForm} />;
                })}
                <ButtonContainer>
                    <CustomButton
                        buttonInputType="primary"
                        buttonType="button"
                        label="ADD PERSON"
                        onClick={handleAddPerson}
                    />
                </ButtonContainer>
            </Wrapper>
        </>
    );
};
export default PeopleList;
