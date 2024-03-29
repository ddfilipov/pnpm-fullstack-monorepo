import { FC, useState } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import CustomInput from "../atoms/CustomInput";
import { Controller, useForm, useWatch } from "react-hook-form";
import CustomCheckbox from "../atoms/CustomCheckbox";
import { appColors } from "@/utils/colors";
import CustomButton from "../atoms/CustomButton";

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    border: 1px solid ${appColors.salmon};
    border-radius: 10px;
    min-width: 400px;
    gap: 10px;
`;

const StyledButtonsContainer = styled.div`
    min-height: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;

interface InputValues {
    personId: number;
    name: string;
    money: number;
    dateOfBirth: Date;
    isVip?: boolean;
}

interface PersonCardProps {
    person: IPersonData;
    handleEditPerson: (person: IPersonData, index: number) => void;
    handleDeletePerson: (personId: number, index: number) => void;
    personIndex: number;
    handleIsAddButtonDisabled: (newValue: boolean) => void;
}

const PersonCard: FC<PersonCardProps> = ({
    person,
    handleEditPerson,
    handleDeletePerson,
    personIndex,
    handleIsAddButtonDisabled,
}) => {
    // TODO: up this form state to page???
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const defaultValues: InputValues = {
        personId: person.personId,
        name: person.name,
        money: person.money,
        dateOfBirth: person.dateOfBirth,
        isVip: person.isVip,
    };
    const { control, handleSubmit, reset } = useForm({ defaultValues: defaultValues });

    const watchPerson = useWatch({ control });
    // const onSubmit = async (data: InputValues) => {
    //     // const response = await fetch(`${BASE_URL}/delete`, {
    //     //     method: "DELETE",
    //     //     headers: { "Content-Type": "application/json" },
    //     //     body: JSON.stringify({
    //     //         id: person.id,
    //     //     }),
    //     // });
    //     setIsEditMode(false);
    //     handleEditPerson(data);
    // };

    const handleCancelEdit = () => {
        setIsEditMode(false);
        handleIsAddButtonDisabled(false);
        reset();
    };

    const handleSavePerson = () => {
        setIsEditMode(false);
        handleIsAddButtonDisabled(false);
        // TODO: isVip is undefined if u don't make it true once
        handleEditPerson(watchPerson as IPersonData, personIndex);
        console.log("watchPerson clicking SAVE:", watchPerson);
    };

    const handleClickEdit = () => {
        setIsEditMode(true);
        handleIsAddButtonDisabled(true);
        console.log("person clicking EDIT:", person);
    };

    return (
        <form>
            <StyledBox key={person.personId}>
                <Controller
                    name="name"
                    rules={{ required: "This field is required" }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <CustomInput
                            value={value}
                            onChange={onChange}
                            label="Name"
                            type="text"
                            disabled={!isEditMode}
                        />
                    )}
                />
                <Controller
                    name="money"
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field: { onChange, value } }) => (
                        <CustomInput
                            value={value}
                            onChange={onChange}
                            label="Money"
                            type="number"
                            disabled={!isEditMode}
                        />
                    )}
                />
                <Controller
                    name="dateOfBirth"
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field: { onChange, value } }) => {
                        return (
                            <CustomInput
                                value={value.toString().split("T")[0]}
                                onChange={onChange}
                                label="Date of Birth"
                                type="date"
                                disabled={!isEditMode}
                            />
                        );
                    }}
                />
                <Controller
                    name="isVip"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <CustomCheckbox value={value} onChange={onChange} label="Is VIP?" disabled={!isEditMode} />
                    )}
                />
                <StyledButtonsContainer>
                    {isEditMode ? (
                        <>
                            <CustomButton
                                buttonInputType="primary"
                                buttonType="submit"
                                key="submitButton"
                                label="SAVE"
                                onClick={handleSavePerson}
                            />
                            <CustomButton
                                buttonInputType="secondary"
                                buttonType="button"
                                label="CANCEL"
                                onClick={handleCancelEdit}
                            />
                        </>
                    ) : (
                        <>
                            <CustomButton
                                buttonInputType="primary"
                                buttonType="button"
                                label="EDIT"
                                onClick={handleClickEdit}
                            />
                            <CustomButton
                                buttonInputType="secondary"
                                buttonType="button"
                                label="DELETE"
                                // onClick={deletePerson}
                                onClick={() => handleDeletePerson(person.personId, personIndex)}
                            />
                        </>
                    )}
                </StyledButtonsContainer>
            </StyledBox>
        </form>
    );
};
export default PersonCard;
