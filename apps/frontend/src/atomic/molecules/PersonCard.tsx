import { FC, useState } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import CustomInput from "../atoms/CustomInput";
import { Controller, useForm } from "react-hook-form";
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
    id: number;
    name: string;
    money: number;
    dateOfBirth: Date;
    isVip?: boolean;
}

interface PersonCardProps {
    person: IPersonData;
    submitForm: (person: IPersonData) => void;
}

const PersonCard: FC<PersonCardProps> = ({ person, submitForm }) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const defaultValues: InputValues = {
        id: person.id,
        name: person.name,
        money: person.money,
        dateOfBirth: person.dateOfBirth,
        isVip: person.isVip,
    };
    const { control, handleSubmit } = useForm({ defaultValues: defaultValues });

    const onSubmit = async (data: InputValues) => {
        // console.log("que hago aqui?");
        // const response = await fetch(`${BASE_URL}/delete`, {
        //     method: "DELETE",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         id: person.id,
        //     }),
        // });
        // console.log("resposneeee", response);
        setIsEditMode(false);
        submitForm(data);
    };

    const deletePerson = async () => {};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledBox key={person.id}>
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
                            />
                            <CustomButton
                                buttonInputType="secondary"
                                buttonType="button"
                                label="CANCEL"
                                onClick={() => setIsEditMode(false)}
                            />
                        </>
                    ) : (
                        <>
                            <CustomButton
                                buttonInputType="primary"
                                buttonType="button"
                                label="EDIT"
                                onClick={() => setIsEditMode(true)}
                            />
                            <CustomButton
                                buttonInputType="secondary"
                                buttonType="button"
                                label="DELETE"
                                onClick={deletePerson}
                            />
                        </>
                    )}
                </StyledButtonsContainer>
            </StyledBox>
        </form>
    );
};
export default PersonCard;
