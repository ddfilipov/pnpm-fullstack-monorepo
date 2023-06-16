import { FC } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import CustomInput from "../atoms/CustomInput";
import { Controller, useForm } from "react-hook-form";
import CustomCheckbox from "../atoms/CustomCheckbox";

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    border: 1px solid #ffcc66;
    border-radius: 10px;
    min-width: 400px;
`;

interface InputValues {
    name: string;
    money: number;
    dateOfBirth: Date;
    isVip?: boolean;
}

interface PersonCardProps {
    person: IPersonData;
}

const PersonCard: FC<PersonCardProps> = ({ person }) => {
    const defaultValues: InputValues = {
        name: person.name,
        money: person.money,
        dateOfBirth: person.dateOfBirth,
        isVip: person.isVip,
    };
    const { control, handleSubmit } = useForm({ defaultValues: defaultValues });

    const onSubmit = (data: InputValues) => {
        console.log("showing data:", data);
    };

    return (
        <StyledBox key={person.id}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <CustomInput value={value} onChange={onChange} label="Name" type="text" />
                    )}
                />
                <Controller
                    name="money"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <CustomInput value={value} onChange={onChange} label="Money" type="number" />
                    )}
                />
                <Controller
                    name="dateOfBirth"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                        return (
                            <CustomInput
                                value={value.toString().split("T")[0]}
                                onChange={onChange}
                                label="Date of Birth"
                                type="date"
                            />
                        );
                    }}
                />
                <p>{person.dateOfBirth.toString()}</p>
                <Controller
                    name="isVip"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <CustomCheckbox value={value} onChange={onChange} htmlFor="isVip" label="Is VIP?" />
                    )}
                />
                <button type="submit">SUBMIT</button>
            </form>
        </StyledBox>
    );
};
export default PersonCard;
