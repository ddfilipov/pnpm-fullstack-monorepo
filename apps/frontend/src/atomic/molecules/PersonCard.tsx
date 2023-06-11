import { FC } from "react";
import { IPersonData } from "@pnpm-fullstack-monorepo/validation";
import { styled } from "styled-components";
import CustomInput from "../atoms/CustomInput";
import { Controller, useForm } from "react-hook-form";

const StyledBox = styled.div`
    padding: 10px;
    width: 300px;
    border: 1px solid black;
`;

interface InputValues {
    name: string;
}

interface PersonCardProps {
    person: IPersonData;
}

const PersonCard: FC<PersonCardProps> = ({ person }) => {
    const defaultValues: InputValues = { name: person.name };
    const { register, control } = useForm({ defaultValues: defaultValues });
    return (
        <StyledBox key={person.id}>
            <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <CustomInput value={value} onChange={onChange} htmlFor="name" label="Name" />
                )}
            />
            <ul>
                <li>{person.money}</li>
                <li>{person.birthDate.toString()}</li>
                {person.vip ? <li>VIP</li> : null}
            </ul>
        </StyledBox>
    );
};
export default PersonCard;
