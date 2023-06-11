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
`;

interface InputValues {
    name: string;
    money: number;
    isVip?: boolean;
}

interface PersonCardProps {
    person: IPersonData;
}

const PersonCard: FC<PersonCardProps> = ({ person }) => {
    const defaultValues: InputValues = { name: person.name, money: person.money, isVip: person.vip };
    const { register, control } = useForm({ defaultValues: defaultValues });
    return (
        <StyledBox key={person.id}>
            <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <CustomInput value={value} onChange={onChange} htmlFor="name" label="Name" type="text" />
                )}
            />
            <Controller
                name="money"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <CustomInput value={value} onChange={onChange} htmlFor="money" label="Money" type="number" />
                )}
            />
            <Controller
                name="isVip"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <CustomCheckbox value={value} onChange={onChange} htmlFor="isVip" label="Is VIP?" />
                )}
            />
            <ul>
                <li>{person.birthDate.toString()}</li>
            </ul>
        </StyledBox>
    );
};
export default PersonCard;
