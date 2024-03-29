import { FC, useState } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import PersonCard from "../molecules/PersonCard";
import CustomButton from "../atoms/CustomButton";

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
    people: IPersonData[];
    handleEditPerson: (person: IPersonData, index: number) => void;
    handleAddPerson: () => void;
    handleDeletePerson: (personId: number, index: number) => void;
}

const PeopleList: FC<PeopleListProps> = ({ people, handleEditPerson, handleAddPerson, handleDeletePerson }) => {
    // console.log(people);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState<boolean>(false);

    const handleIsAddButtonDisabled = (newButtonValue: boolean) => {
        setIsAddButtonDisabled(newButtonValue);
    };
    console.log(JSON.stringify(people));
    return (
        <>
            <Wrapper>
                {people?.map((person, index) => {
                    return (
                        <PersonCard
                            person={person}
                            key={person.personId}
                            handleEditPerson={handleEditPerson}
                            handleDeletePerson={handleDeletePerson}
                            personIndex={index}
                            handleIsAddButtonDisabled={handleIsAddButtonDisabled}
                        />
                    );
                })}
                <ButtonContainer>
                    <CustomButton
                        buttonInputType="primary"
                        buttonType="button"
                        label="ADD PERSON"
                        onClick={handleAddPerson}
                        disabled={isAddButtonDisabled}
                    />
                </ButtonContainer>
            </Wrapper>
        </>
    );
};
export default PeopleList;
